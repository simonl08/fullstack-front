import React from 'react'
import { WatchListContainer } from '../styles/globalStyles';

function WatchListPopup(props) {
    return (props.trigger) ? (
        <WatchListContainer>
            <div className="popup-inner">
            <h2>WatchList</h2>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                { props.children }
            </div>
        </WatchListContainer>
    ) : "";
}

export default WatchListPopup;
