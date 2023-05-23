import UFPCalculator from './Sections/UFPCalculator';
import TCFCalculator from './Sections/TCFCaclculator';
import FPCalculator from './Sections/FPCalculator';
import LOCCalculator from './Sections/LOCCalculator';


export default function Main() {

  return (

        <div style={styles.container}>
            <div style={styles.section}>
                <UFPCalculator />
            </div>
            <div style={styles.section}>
                <TCFCalculator />
            </div>
            <div style={styles.section}>
                <FPCalculator />
            </div>
            <div style={styles.section}>
                <LOCCalculator />
            </div>
        </div>

  );
}

const styles = {
    container: {
         padding: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    section: {
        marginBottom: '40px',
        backgroundColor: 'white',
        border: '2px solid purple',
        borderRadius: '0.5rem',
        padding: '2rem',
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
  };
