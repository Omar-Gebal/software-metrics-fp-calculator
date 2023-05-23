import {React, useState, useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateFP } from "../state/numberSlice";

export default function FPCalculator(){
    const dispatch = useDispatch()
    const {UFP,TCF, FP} = useSelector(state=> state.numbers)
    
    const calculateFP = () => {
      const newFP = UFP * TCF;
      dispatch(updateFP(newFP));
    };
  
    return (
       <section>
            <h1>FP Calculator</h1>
            <label>
              UFP (Unadjusted Function Points): {UFP}
            </label>
            <br />
            <label>
              TCF (Technical Complexity Factor): {TCF}
           
            </label>
            <br />
            <button style={styles.margingVertical} onClick={calculateFP}>Calculate FP</button>
            <h4>FP: {FP}</h4>
       </section>
    );
}

const styles= {
  margingVertical:{
    margin: "1rem 0"
  }
};