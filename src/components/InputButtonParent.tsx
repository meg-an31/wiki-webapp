import React, { useState } from 'react'
import { htmlFromLink } from '../logic/htmlFromLink'

// using a parent component so that the result value can be shared between the button and the output!
const InputButtonParent = () => {
  const [result, setResult] = useState<string>('')
  const [url, setUrl] = useState<string>('')

  const handleClick = async () => {
    const webpage = await htmlFromLink(url)
    setResult(webpage)
  }
  return (
    <>
    <div>
    <label>
        Type something:
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
      </label>
    </div>
      <button onClick={handleClick}>buttondemo</button>
      <p>You typed: {result}</p>
    </>
  )
}

export default InputButtonParent