import React from 'react';
import classes from './Person.css';

const Person = (props) => {
    {
        /**
         * <div onClick={props.click} className={classes.Person}>
         */
    }
    return (
        
        <div className='Person'>
            <p>I'm {props.name} and I'm {props.age} old</p>
            <input type = 'text' value={props.name} onChange={props.changed}/>
        </div>
    )

}

export default Person;