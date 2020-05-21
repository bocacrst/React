import React from 'react';

const validationComponent = (props)=>{
    let validation = ' text too short'

    if (props.length >= 5)
        validation = 'text ok'   
        
     return( 
        <div>
            <p>{validation} </p>
        </div>
     )
    
}
export default validationComponent;