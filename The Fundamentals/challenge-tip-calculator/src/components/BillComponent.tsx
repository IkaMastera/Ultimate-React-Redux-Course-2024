import React from "react";

const BillComponent = ({ onBillChange }) => {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="number" onChange={(e) => onBillChange(e.target.value)} />
    </div>
  );
};

export default BillComponent;
