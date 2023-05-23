import {React, useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { parameterWeights } from '../consts';
import { updateUFP } from "../state/numberSlice";


export default function UFPCalculator(){
    const dispatch = useDispatch()
    const [numExternalInput, setNumExternalInput] = useState({simple:0,average:0,complex:0});
    const [numExternalOutput, setNumExternalOutput] =  useState({simple:0,average:0,complex:0});
    const [numExternalInquirie, setNumExternalInquirie] = useState({simple:0,average:0,complex:0});
    const [numInternalLogicalFile, setNumInternalLogicalFile] = useState({simple:0,average:0,complex:0});
    const [numExternalInterfaceFile, setNumExternalInterfaceFile] = useState({simple:0,average:0,complex:0});
    const [functionPoint, setFunctionPoint] =  useState(0);
    
    const calculateFunctionPoints = () => {
        
        const externalInput = numExternalInput.simple * parameterWeights.externalInput.simple + numExternalInput.average * parameterWeights.externalInput.average + numExternalInput.complex * parameterWeights.externalInput.complex; 
        const externalOutput = numExternalOutput.simple * parameterWeights.externalOutput.simple + numExternalOutput.average * parameterWeights.externalOutput.average + numExternalOutput.complex * parameterWeights.externalOutput.complex; 
        const externalInquiryWeight = numExternalInquirie.simple * parameterWeights.externalInquiry.simple + numExternalInquirie.average * parameterWeights.externalInquiry.average + numExternalInquirie.complex * parameterWeights.externalInquiry.complex; 
        const internalLogicalFileWeight =numInternalLogicalFile.simple * parameterWeights.internalLogicalFiles.simple + numInternalLogicalFile.average * parameterWeights.internalLogicalFiles.average + numInternalLogicalFile.complex * parameterWeights.internalLogicalFiles.complex; 
        const externalInterfaceFileWeight =numExternalInterfaceFile.simple * parameterWeights.externalInterfaceFiles.simple + numExternalInterfaceFile.average * parameterWeights.externalInterfaceFiles.average + numExternalInterfaceFile.complex * parameterWeights.externalInterfaceFiles.complex; 
    
        const calculatedFunctionPoints =
           externalInput+
          externalOutput +
           externalInquiryWeight +
          internalLogicalFileWeight+
        externalInterfaceFileWeight;
        dispatch(updateUFP(calculatedFunctionPoints));
        setFunctionPoint(calculatedFunctionPoints);
    };

    

    
    
    return (
        <section>
            <h1>UFP Calculator</h1>
        
            <table>
            <thead>
                <tr>
                <th>Parameter Name</th>
                <th>Simple</th>
                <th>Average</th>
                <th>Complex</th>

                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="external-inputs">Number of External Inputs:</label>
                        </td>
                        <td>
                            <input
                                type="number"
                                id="external-inputs"
                                min="0"
                                value={numExternalInput.simple}
                                onChange={(e) => setNumExternalInput({...numExternalInput, simple:parseInt(e.target.value)})}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                id="external-inputs"
                                min="0"
                                value={numExternalInput.average}
                                onChange={(e) => setNumExternalInput({...numExternalInput, average:parseInt(e.target.value)})}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                id="external-inputs"
                                min="0"
                                value={numExternalInput.complex}
                                onChange={(e) => setNumExternalInput({...numExternalInput, complex:parseInt(e.target.value)})}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="external-outputs">Number of External Outputs:</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="external-outputs"
                            min="0"
                            value={numExternalOutput.simple}
                            onChange={(e) => setNumExternalOutput({...numExternalOutput, simple:parseInt(e.target.value)})}
                            />
                        </td>
                        <td>
                            <input
                            type="number"
                            id="external-outputs"
                            min="0"
                            value={numExternalOutput.average}
                            onChange={(e) => setNumExternalOutput({...numExternalOutput, average:parseInt(e.target.value)})}
                            />
                        </td>
                        <td>
                            <input
                            type="number"
                            id="external-outputs"
                            min="0"
                            value={numExternalOutput.complex}
                            onChange={(e) => setNumExternalOutput({...numExternalOutput, complex:parseInt(e.target.value)})}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="external-inquiries">Number of External Inquiries:</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="external-inquiries"
                            min="0"
                            value={numExternalInquirie.simple}
                            onChange={(e) => setNumExternalInquirie({...numExternalInquirie, simple:parseInt(e.target.value)})}
                            />
                        </td>
                        <td>
                            <input
                            type="number"
                            id="external-inquiries"
                            min="0"
                            value={numExternalInquirie.average}
                            onChange={(e) => setNumExternalInquirie({...numExternalInquirie, average:parseInt(e.target.value)})}
                            />
                        </td>
                        <td>
                            <input
                            type="number"
                            id="external-inquiries"
                            min="0"
                            vvalue={numExternalInquirie.complex}
                            onChange={(e) => setNumExternalInquirie({...numExternalInquirie, complex:parseInt(e.target.value)})}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="internal-logical-files">Number of Internal Logical Files:</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="internal-logical-files"
                            min="0"
                            value={numInternalLogicalFile.simple}
                            onChange={(e) => setNumInternalLogicalFile({...numInternalLogicalFile, simple:parseInt(e.target.value)})}
                            />
                        </td>
                        <td>
                            <input
                            type="number"
                            id="internal-logical-files"
                            min="0"
                            value={numInternalLogicalFile.average}
                            onChange={(e) => setNumInternalLogicalFile({...numInternalLogicalFile, average:parseInt(e.target.value)})}
                            />
                        </td>
                        <td>
                            <input
                            type="number"
                            id="internal-logical-files"
                            min="0"
                            value={numInternalLogicalFile.complex}
                            onChange={(e) => setNumInternalLogicalFile({...numInternalLogicalFile, complex:parseInt(e.target.value)})}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="external-interface-file">Number of External Interface Files:</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="external-interface-file"
                            min="0"
                            value={numExternalInterfaceFile.simple}
                            onChange={(e) => setNumExternalInterfaceFile({...numExternalInterfaceFile, simple:parseInt(e.target.value)})}
                            />
                        </td>
                        <td>
                            <input
                            type="number"
                            id="internal-logical-files"
                            min="0"
                            value={numExternalInterfaceFile.average}
                            onChange={(e) => setNumExternalInterfaceFile({...numExternalInterfaceFile, average:parseInt(e.target.value)})}
                            />
                        </td>
                        <td>
                            <input
                            type="number"
                            id="internal-logical-files"
                            min="0"
                            value={numExternalInterfaceFile.complex}
                            onChange={(e) => setNumExternalInterfaceFile({...numExternalInterfaceFile, complex:parseInt(e.target.value)})}
                            />
                        </td>
                    </tr>

                </tbody>
            </table>
            
            <button style={styles.button} onClick={calculateFunctionPoints}>Calculate UFP</button>

            <h4>UFP Points: {functionPoint}</h4>  
        </section>
    );
}

const styles= {
    button: {
        marginTop: '1rem',
    }
};