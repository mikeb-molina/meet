import { useState } from "react";

const NumberOfEvents = ({setCurrentNOE, setErrorAlert}) => {
    const [eventNumber, setEventNumber] = useState('32');
    const handleInputChange = (event) => {
        const value = event.target.value;
        setEventNumber(value);
        setCurrentNOE(value);

        let infoText;
        if(isNaN(value) || value <= 0) {
            infoText = "Only positive numbers allowed"
        } else {
            infoText = ""
            setCurrentNOE(value);
        }
        setErrorAlert(infoText);
    }
    return(
        <div id= "number-of-events">
            <input
                type="text" 
                id= "number-of-events-input"
                className="number-of-events-input"
                placeholder="Number of events shown..."
                value={eventNumber}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default NumberOfEvents