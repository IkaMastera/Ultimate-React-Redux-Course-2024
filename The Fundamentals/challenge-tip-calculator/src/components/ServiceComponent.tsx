import React from "react";

const ServiceComponent = ({ children, onServiceChange }) => {
  return (
    <div>
      <label>{children}</label>
      <select onChange={(e) => onServiceChange(parseInt(e.target.value, 10))}>
        <option value="0">Didnt like it 0%</option>
        <option value="10%">Liked it 10%</option>
        <option value="20%">Really liked it 20%</option>
      </select>
    </div>
  );
};

export default ServiceComponent;
