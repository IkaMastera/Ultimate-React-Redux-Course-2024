import React from "react";

const BillComponent = ({ onBillChange }) => {
  return (
    <div>
      <p>How much was the bill?</p>
      <input type="number" onChange={(e) => onBillChange(e.target.value)} />;
    </div>
  );
};

export default BillComponent;
