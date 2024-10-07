import { useState } from "react";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
  const [calculatedItems, setCalculatedItems] = useState([]);

  const submitItem = (data) => {
    setCalculatedItems((prev) => [...prev, data]);
  };

  //code, weight, quantity, dividedWeight, loss
  return (
    <div className="App">
      <InputForm submitItem={submitItem} />

      {calculatedItems.map((item, index) => (
        <div className="calculated-item-container" key={index}>
          <div className="calculated-item-box">
            <p className="box-name">Item Code</p>
            <p className="box-value">
              <b>{item.code}</b>
            </p>
          </div>

          <div className="calculated-item-box">
            <p className="box-name">Weight sum</p>
            <p className="box-value">{item.weight}</p>
          </div>

          <div className="calculated-item-box">
            <p className="box-name">Quantity</p>
            <p className="box-value">{item.quantity}</p>
          </div>

          <div className="calculated-item-box">
            <p className="box-name">Single Weight</p>
            <p className="box-value">{item.dividedWeight}</p>
          </div>

          <div className="calculated-item-box">
            <p className="box-name">Weight without stone</p>
            <p className="box-value">
              {item.dividedWeight !== item.adjustedWeight
                ? item.adjustedWeight
                : "No item found"}
            </p>
          </div>

          <div className="calculated-item-box">
            <p className="box-name">Loss</p>
            <p className="box-value">{item.loss.toFixed(8)}</p>
          </div>

          <div className="calculated-item-box">
            <p className="box-name">Loss rounded</p>
            <p className="box-value">{item.loss.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
