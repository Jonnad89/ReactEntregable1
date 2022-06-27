import React, { useState } from 'react';

const Bulb = () => {

const [ isOn, setIsOn ] = useState(true)

const toggleIsOn = () => setIsOn (!isOn)

    return (
        <div>
           <div className='bulb' 
           style={{background: isOn ? "yellow" : "gray"}}>
            
            <button onClick={toggleIsOn}>On / Off</button>
            
           </div>
           <div className='bulb' 
           style={{background: isOn ? "gray" : "yellow"}}>
            
            <button onClick={toggleIsOn}>On / Off</button>
            
           </div>
           <div className='bulb' 
           style={{background: isOn ? "yellow" : "gray"}}>
            
            <button onClick={toggleIsOn}>On / Off</button>
            
           </div>
           <div className='bulb' 
           style={{background: isOn ? "gray" : "yellow"}}>
            
            <button onClick={toggleIsOn}>On / Off</button>
            
           </div>
        </div>
    );
};

export default Bulb;