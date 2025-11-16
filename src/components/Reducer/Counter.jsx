import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}></button>
      <p>{counter}</p>
    </div>
  );
}
