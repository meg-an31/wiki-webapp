import React, { useState } from 'react';

const TextInputDemo: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <label>
        Type something:
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </label>
      <p>You typed: {value}</p>
    </div>
  );
};

export default TextInputDemo; 