import {React, useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { parameterWeights } from '../consts';
import { updateUFP } from "../state/numberSlice";


export default function UFPCalculator(){
    const dispatch = useDispatch()
    const [numExternalInputs, setNumExternalInputs] = useState(0);
    const [externalInputComplexity, setExternalInputComplexity] = useState('simple');
    const [numExternalOutputs, setNumExternalOutputs] = useState(0);
    const [externalOutputComplexity, setExternalOutputComplexity] = useState('simple');
    const [numExternalInquiries, setNumExternalInquiries] = useState(0);
    const [externalInquiryComplexity, setExternalInquiryComplexity] = useState('simple');
    const [numInternalLogicalFiles, setNumInternalLogicalFiles] = useState(0);
    const [internalLogicalFileComplexity, setInternalLogicalFileComplexity] = useState('simple');
    const [numExternalInterfaceFiles, setNumExternalInterfaceFiles] = useState(0);
    const [externalInterfaceFileComplexity, setExternalInterfaceFileComplexity] = useState('simple');
    const [functionPoints, setFunctionPoints] = useState(0);
    
    const calculateFunctionPoints = () => {
        const externalInputWeight = parameterWeights.externalInput[externalInputComplexity];
        const externalOutputWeight = parameterWeights.externalOutput[externalOutputComplexity];
        const externalInquiryWeight = parameterWeights.externalInquiry[externalInquiryComplexity];
        const internalLogicalFileWeight = parameterWeights.internalLogicalFiles[internalLogicalFileComplexity];
        const externalInterfaceFileWeight = parameterWeights.externalInterfaceFiles[externalInterfaceFileComplexity];
    
        const calculatedFunctionPoints =
          (numExternalInputs * externalInputWeight) +
          (numExternalOutputs * externalOutputWeight) +
          (numExternalInquiries * externalInquiryWeight) +
          (numInternalLogicalFiles * internalLogicalFileWeight) +
          (numExternalInterfaceFiles * externalInterfaceFileWeight);
        dispatch(updateUFP(calculatedFunctionPoints));
        setFunctionPoints(calculatedFunctionPoints);
    };

    

    
    
    return (
        <section>
            <h1>UFP Point Calculator</h1>
        
            <table>
            <thead>
                <tr>
                <th>Parameter Name</th>
                <th>Number</th>
                <th>Complexity</th>
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
                            value={numExternalInputs}
                            onChange={(e) => setNumExternalInputs(parseInt(e.target.value))}
                            />
                        </td>
                        <td>
                            <select
                            id="external-input-complexity"
                            value={externalInputComplexity}
                            onChange={(e) => setExternalInputComplexity(e.target.value)}
                            >
                            <option value="simple">Simple</option>
                            <option value="average">Average</option>
                            <option value="complex">Complex</option>
                            </select>
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
                            value={numExternalOutputs}
                            onChange={(e) => setNumExternalOutputs(parseInt(e.target.value))}
                            />
                        </td>
                        <td>
                            <select
                            id="external-output-complexity"
                            value={externalOutputComplexity}
                            onChange={(e) => setExternalOutputComplexity(e.target.value)}
                            >
                            <option value="simple">Simple</option>
                            <option value="average">Average</option>
                            <option value="complex">Complex</option>
                            </select>
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
                            value={numExternalInquiries}
                            onChange={(e) => setNumExternalInquiries(parseInt(e.target.value))}
                            />
                        </td>
                        <td>
                            <select
                            id="external-inquiry-complexity"
                            value={externalInquiryComplexity}
                            onChange={(e) => setExternalInquiryComplexity(e.target.value)}
                            >
                            <option value="simple">Simple</option>
                            <option value="average">Average</option>
                            <option value="complex">Complex</option>
                            </select>
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
                            value={numInternalLogicalFiles}
                            onChange={(e) => setNumInternalLogicalFiles(parseInt(e.target.value))}
                            />
                        </td>
                        <td>
                            <select
                            id="internal-logical-file-complexity"
                            value={internalLogicalFileComplexity}
                            onChange={(e) => setInternalLogicalFileComplexity(e.target.value)}
                            >
                            <option value="simple">Simple</option>
                            <option value="average">Average</option>
                            <option value="complex">Complex</option>
                            </select>
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
                            value={numExternalInterfaceFiles}
                            onChange={(e) => setNumExternalInterfaceFiles(parseInt(e.target.value))}
                            />
                        </td>
                        <td>
                            <select
                            id="external-interface-file-complexity"
                            value={externalInterfaceFileComplexity}
                            onChange={(e) => setExternalInterfaceFileComplexity(e.target.value)}
                            >
                            <option value="simple">Simple</option>
                            <option value="average">Average</option>
                            <option value="complex">Complex</option>
                            </select>
                        </td>
                    </tr>

                </tbody>
            </table>
            
            <button style={styles.button} onClick={calculateFunctionPoints}>Calculate UFP</button>

            <h4>UFP Points: {functionPoints}</h4>  
        </section>
    );
}

const styles= {
    button: {
        marginTop: '1rem',

    }
};