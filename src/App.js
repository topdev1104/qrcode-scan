import React from "react";
import { QrScanner } from "react-qrcode-scanner";

function App() {
  const handleScan = (value) => {
    alert(`scaned value is ${value}`);
  };

  const handleError = (error) => {
    console.log({ error });
  };

  return (
    <div className="App">
      <QrScanner onScan={handleScan} onError={handleError} />

      {/* <div>
        {[{}].map((item, key) => {
          return <p key={key}>{item.value}</p>;
        })}
      </div> */}
    </div>
  );
}

export default App;
