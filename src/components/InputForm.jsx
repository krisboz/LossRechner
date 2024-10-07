import { useState } from "react";

const stoneWeights = [
  { code: "R-BOU-I-Am", weight: 0.9 },
  { code: "R-BOU-I-Cach", weight: 0.9 },
  { code: "Test", weight: 1 },
];

const InputForm = ({ submitItem }) => {
  const [code, setCode] = useState("");
  const [weight, setWeight] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const calculateValues = (code, weight, quantity) => {
    let secondCode = null; //If from an existing item use that code
    const dividedWeight = weight / quantity; // Einzelmenge
    console.log(`Initial Divided Weight: ${dividedWeight}`);

    // Convert code to lowercase for case-insensitive comparison
    const lowerCaseCode = code.toLowerCase();

    // Check if the stone weight needs to be subtracted
    const stoneItem = stoneWeights.find(
      (item) => item.code.toLowerCase() === lowerCaseCode
    );

    let adjustedWeight = dividedWeight;
    if (stoneItem) {
      adjustedWeight -= stoneItem.weight;
      secondCode = stoneItem.code;
      console.log(`Adjusted Weight after subtracting stone: ${adjustedWeight}`);
    }

    const eightySix = adjustedWeight / 86;
    const hundred = eightySix * 100;
    const loss = hundred * 0.14;

    console.log({
      code,
      weight,
      quantity,
      dividedWeight,
      adjustedWeight,
      loss,
    });

    const codeToReturn = secondCode ? secondCode : code;
    const newItem = {
      code: codeToReturn,
      weight,
      quantity,
      dividedWeight,
      adjustedWeight,
      loss,
    };
    submitItem(newItem);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const parsedWeight = parseFloat(weight.replace(",", "."));
    calculateValues(code, parsedWeight, quantity);
  };

  return (
    <div>
      <div className="input-form-container">
        <form onSubmit={handleFormSubmit}>
          <label>
            Code
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type={"text"}
            />
          </label>
          <label>
            Weight (g)
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type={"text"}
            />
          </label>
          <label>
            Quantity
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type={"number"}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
