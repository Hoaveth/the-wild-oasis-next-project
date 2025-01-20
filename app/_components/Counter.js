"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((value) => value + 1);
  }

  return <button onClick={() => increment()}>{count}</button>;
}
