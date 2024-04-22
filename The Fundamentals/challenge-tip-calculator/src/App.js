import React, { useState } from "react";
import BillComponent from "./components/BillComponent.tsx";
import ServiceComponent from "./components/ServiceComponent.tsx";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [myService, setMyService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  const averageTip = (myService + friendService) / 2;
  const totalTipAmount = (billAmount * averageTip) / 100;
  const totalPay = Number(billAmount) + totalTipAmount;

  return (
    <>
      <BillComponent onBillChange={setBillAmount} />
      <ServiceComponent onServiceChange={setMyService}>
        How much did you like the service?
      </ServiceComponent>
      <ServiceComponent onServiceChange={setFriendService}>
        How did you friend like the service?
      </ServiceComponent>
      <button>Reset</button>
      <div>
        <p>Total to pay: {totalPay.toFixed(2)}</p>
        <p>
          Tip amount: {totalTipAmount.toFixed(2)} ({averageTip}%)
        </p>
      </div>
    </>
  );
}

export default App;
