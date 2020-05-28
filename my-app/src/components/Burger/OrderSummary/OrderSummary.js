import React from 'react';
import Button from '../../UI/Button/Button';
import { string } from 'prop-types';


const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients).map((igKey)=>{
    return(
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
        )
    })
   return(
    <React.Fragment>
        <h3>Your Order</h3>
        <p>A burger with: </p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total price: {props.price.toFixed(2)} $</strong></p>
        <p>Continue ?</p>

        <Button btnType={"Danger"} clicked={props.cancel}> CANCEL </Button>
        <Button btnType={"Success"} clicked={props.continue}> CONTINUE </Button>
       
    </React.Fragment>
   );

};
export default orderSummary;