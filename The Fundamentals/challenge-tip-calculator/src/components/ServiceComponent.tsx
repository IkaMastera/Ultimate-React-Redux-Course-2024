import React from "react";

const ServiceComponent = ({ onServiceChange, children }) => {
  return (
    <div>
      <p>{children}</p>
      <select onChange={(e) => onServiceChange(parseInt(e.target.value, 10))}>
        <option value="0%">didn't like it 0%</option>
        <option value="10%">It was good 10%</option>
        <option value="20%">Absolutely amazing! 20%</option>
      </select>
    </div>
  );
};

export default ServiceComponent;
