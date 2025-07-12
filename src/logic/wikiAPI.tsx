import Cheerio from 'cheerio';

// page title from keyword
// links from page 
// title-link pairs from links

// gets the page from the user inputted keyword
export const pageFromKeyword = async (keyword: string): Promise<string> => {
    let url = `https://api.wikimedia.org/core/v1/wikipedia/en/page?q=${keyword}&limit=1`;
    let response = await fetch( url,
    {
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Api-User-Agent': 'YOUR_APP_NAME (YOUR_EMAIL_OR_CONTACT_PAGE)'
        }
    });
    let data = await response.json();
    return data.pages[0].title;
}

// gets a list of link-title pairs ready to start searching!
export const linksFromPage = async (page: string): Promise<[string,string][]> => {
    const parser = new DOMParser();
    let url = `https://api.wikimedia.org/core/v1/wikipedia/en/page/${page}/html`; // returns pure html 
    let response = await fetch( url,
    {
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Api-User-Agent': 'YOUR_APP_NAME (YOUR_EMAIL_OR_CONTACT_PAGE)'
        }
    });
    let html = parser.parseFromString(await response.text(), 'text/html');
    let link_elems = html.getElementsByTagName("a");
    let links : [string,string][] = [];
    for (var i = 0; i < link_elems.length && i < 100; i ++){
        if (link_elems[i].href.slice(0, 30) == "https://en.wikipedia.org/wiki/"){
            links.push([link_elems[i].href, link_elems[i].href.slice(30)]);
        }
    }
    return links;
}

// https://github.com/3Top/word2vec-api