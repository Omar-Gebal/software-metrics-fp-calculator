import {React, useState, useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateAVC, updateLOC } from "../state/numberSlice";
import { AVCvalues } from "../consts";


export default function LOCCalculator(){
    const dispatch = useDispatch()
    const {UFP,TCF, FP, AVC, LOC} = useSelector(state=> state.numbers)
    const [selectedLanguage, setSelectedLanguage] = useState('');
    
    const handleLanguageChange = (event) => {
        const language = event.target.value;
        setSelectedLanguage(language);
        dispatch(updateAVC(AVCvalues[language] || ''));
    };
    
    const calculateLOC = () => {
        const calculatedLOC = FP ? (FP * AVC) : '';
        dispatch(updateLOC(calculatedLOC));
      };
    
    return (
       <section style={styles.section}>
            <h1>LOC Calculator</h1>
            <div>
            <h3 style={styles.label}>Programming Language Selection</h3>
            <label>
                Select a language:
                <select style={styles.marginVertical} value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="">-- Select Language --</option>
                {Object.keys(AVCvalues).map((language) => (
                    <option key={language} value={language}>
                    {language}
                    </option>
                ))}
                </select>
            </label>
            {selectedLanguage && (
                <div style={styles.section}>
                    <h4>LOC/FP: {AVC}</h4>
                    <button onClick={calculateLOC}>Calculate LOC</button>
                    {LOC && <h4>LOC: {LOC}</h4>}
                </div>
                
            )}
            </div>
       </section>
    );
}

const styles= {
    label:{
        fontWeight: "bold",
    },
    section:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    marginVertical:{
        margin: "0 1rem"
    }
};