import axios from 'axios'

export const htmlFromLink = async (url: string): Promise<string> => {
  const response = await axios.get(url, {
    responseType: 'text',
    validateStatus: undefined,
  })
  return response.data as string
}