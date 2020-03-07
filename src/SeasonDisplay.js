import React from 'react';
import './SeasonDisplay.css'
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }

    return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const iconName = season === 'summer' ? 'sun' : 'snowflake';
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left corner massive  ${iconName} icon`}></i>
            Season: {season}
            <i className={`icon-right corner massive  ${iconName} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;