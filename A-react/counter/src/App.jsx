import { useState } from "react";

function App() {
  const [change, setChange] = useState("#0f172a");

  function changee() {
    setChange("#e1e1e1");
  }

  return (
    <div>
      <button onClick={changee}>Change Color</button>
    </div>
  );
}

export default App;