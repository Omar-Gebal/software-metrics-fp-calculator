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
        <div >
          <label style={styles.detailedDI}>
            {label}
            <select style={styles.marginVertical} value={value} onChange={handleChange}>
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
        { label: 'Data Communications', state: useState(0) },
        { label: 'Distributed Data Processing', state: useState(0) },
        { label: 'Performance', state: useState(0) },
        { label: 'Heavily Used Configuration', state: useState(0) },
        { label: 'Transaction Rate', state: useState(0) },
        { label: 'Online Data Entry', state: useState(0) },
        { label: 'End-User Efficiency', state: useState(0) },
        { label: 'Online Update', state: useState(0) },
        { label: 'Complex Processing', state: useState(0) },
        { label: 'Resusability', state: useState(0) },
        { label: 'Installation Ease', state: useState(0) },
        { label: 'Operational Ease', state: useState(0) },
        { label: 'Multiple Sites', state: useState(0) },
        { label: 'Facilitate Change', state: useState(0) },
      ];
      
    const [totalDI, setTotalDI] = useState(0);

    const calculateTotalDI = () => {
        const sum = factors.reduce((acc, factor) => acc + factor.state[0], 0);
        setTotalDI(sum);
        finalDI = sum;
      };

    return (
        <div style={styles.detailedDI}>
            <h3 style={styles.bold}>Rating for each factor</h3>
            
            <div style={styles.detailedDI}>
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
            </div>
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
       <section style={styles.section}>
            <h1>TCF Calculator</h1>
            {!showFactors && <label style={{...styles.textCenter}}>
                Enter total DI:
                <br/>
                <input type="number" value={DI} onChange={handleInputChange} />
            </label>}
            <label style={styles.marginBot}>
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
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
  },
  marginBot: {
    marginBottom: '1rem',
  },
  detailedDI:{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems:"stretch",
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  marginVertical:{
    marginTop: '1rem',
    marginBottom: '1rem',
  }
};