import React, { useState } from "react";
import BillComponent from "./components/BillComponent.tsx";
import ServiceComponent from "./components/ServiceComponent.tsx";

function App() {
  const [bill, setBill] = useState(0);
  const [myService, setMyService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  const handleReset = () => {
    setBill(0);
    setMyService(0);
    setFriendService(0);
  };

  const averageTip = (myService + friendService) / 2;
  const totalTipAmount = (bill * averageTip) / 100;
  const totalPay = Number(bill) + (Number(bill) * averageTip) / 100;

  return (
    <div>
      <BillComponent onBillChange={setBill} />
      <ServiceComponent onServiceChange={setMyService}>
        How much did you like the service ?
      </ServiceComponent>
      <ServiceComponent onServiceChange={setFriendService}>
        How much did your friend like the service ?
      </ServiceComponent>
      <div>
        <p>
          <p>Total to pay: ${totalPay.toFixed(2)}</p>
          <p>
            Tip amount: ${totalTipAmount.toFixed(2)} ({averageTip}%)
          </p>
        </p>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
