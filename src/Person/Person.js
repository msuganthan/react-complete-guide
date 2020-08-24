import React from 'react';
import classes from './Person.module.css';

const Person = (props) => {
    {
        /**
         * <div onClick={props.click} className={classes.Person}>
         */
    }
    return (
        

        //<div className='Person' style={style}>
        <div className={classes.Person}>
            {
                /**
                 * Click is a property.
                 */
            }
            <p onClick = {props.click} >I'm {props.name} and I'm {props.age} old</p>
            <input type     = 'text'
                   value    = {props.name} 
                   onChange = {props.changed}/>
        </div>
            
        //</div>
    )

}

export default Person;