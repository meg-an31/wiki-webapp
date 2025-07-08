import React, { useState } from 'react';

const ButtonDemo: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me! Count: {count}
      </button>
    </div>
  );
};

export default ButtonDemo; 