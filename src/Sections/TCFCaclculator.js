import {React, useState, useEffect} from "react";
import { parameterWeights } from '../consts';
import { useDispatch } from "react-redux";
import { updateTCF } from "../state/numberSlice";
let finalDI = 0;

const FactorInput = ({ label, value, onChange }) => {
    const descriptions = [
      'No Influence',
      'Incidental',
      'Moderate',
      'Average',
      'Significant',
      'Essential',
    ];
  
    const handleChange = (event) => {
      const newValue = parseInt(event.target.value);
      console.log(newValue);
      onChange(newValue);
    };
  
    return (
        <div>
          <label>
            {label}
            <select value={value} onChange={handleChange}>
              {descriptions.map((description, index) => (
                <option key={index} value={index}>
                  {description}
                </option>
              ))}
            </select>
          </label>
        </div>
    );
  };
  


const FactorMenu = () => {

    const factors = [
        { label: 'Complexity of the Data Element', state: useState(0) },
        { label: 'Complexity of the Record Element', state: useState(0) },
        { label: 'Number of Data Elements', state: useState(0) },
        { label: 'Number of Record Elements', state: useState(0) },
        { label: 'Data Elements Referenced', state: useState(0) },
        { label: 'Record Elements Referenced', state: useState(0) },
        { label: 'Number of Files', state: useState(0) },
        { label: 'Number of Data Element Types', state: useState(0) },
        { label: 'Number of Record Element Types', state: useState(0) },
        { label: 'Number of Outputs', state: useState(0) },
        { label: 'Internal Logical File Complexity', state: useState(0) },
        { label: 'External Interface File Complexity', state: useState(0) },
        { label: 'Data Communication Complexity', state: useState(0) },
        { label: 'Performance', state: useState(0) },
      ];
      
    const [totalDI, setTotalDI] = useState(0);

    const calculateTotalDI = () => {
        const sum = factors.reduce((acc, factor) => acc + factor.state[0], 0);
        setTotalDI(sum);
        finalDI = sum;
      };

    return (
        <div>
            <h3>Data Inputs Factors</h3>
            {factors.map((factor, index) => (
                <FactorInput
                    key={index}
                    label={factor.label}
                    value={factor.state[0]}
                    onChange={(newValue) => {
                        factor.state[1](newValue);
                    }}
                />
            ))}
            <button onClick={calculateTotalDI}>Calculate Total DI</button>
            <h4>Total DI: {totalDI}</h4>
        </div>
  );
};

export default function TCFCalculator(){
  const dispatch = useDispatch()
    const [DI, setDI] = useState(0);
    const [TCF, setTCF] = useState(0);
    const [showFactors, setShowFactors] = useState(false);
    
    const calculateTCF = () => {
        const newTCF = 0.65 + 0.01 * finalDI;
        setTCF(newTCF);
        dispatch(updateTCF(newTCF))
      };
    

    const handleInputChange = (event) => {
      setDI(parseInt(event.target.value));
      finalDI = parseInt(event.target.value);
    };
  
    const handleCheckboxChange = (event) => {
        setShowFactors(event.target.checked);
        setDI(0);
        finalDI = 0;
    };
    
  
    return (
       <section>
            <h1>TCF Calculator</h1>
            {!showFactors && <label>
                Enter total DI:
                <input type="number" value={DI} onChange={handleInputChange} />
            </label>}
            <label>
                <input type="checkbox" checked={showFactors} onChange={handleCheckboxChange} />
                Detailed DI
            </label>
            {showFactors && <FactorMenu number={DI} />}
            <div>
        <button onClick={calculateTCF}>Calculate TCF</button>
        <h4>TCF: {TCF}</h4>
    </div>
       </section>
    );
}

const styles= {
};