import { useState, useEffect } from "react";

function UseEffectt() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Loaded or count changed");
  }, [count]);

  function changee() {
    setCount(count + 1);
  } 

  return (
    <>
      <h1>{count}</h1>

      <button onClick={changee}>
        Increase
      </button>
    </>
  );
}

export default UseEffectt;