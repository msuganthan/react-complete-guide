import React from 'react';
//import classes from './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width:60%;
    margin:16px auto;
    border:1px solid #ff0505;
    box-shadow: 0 2px 3px #ccc;
    padding:16px;
    text-align:center;

    '@media(min-width: 500px)': {
                width: '450px'
    }
`

const Person = (props) => {
    {
        /**
         * <div onClick={props.click} className={classes.Person}>
         */
    }
    return (
        

        //<div className='Person' style={style}>
        <StyledDiv>
            {
                /**
                 * Click is a property.
                 */
            }
            <p onClick = {props.click} >I'm {props.name} and I'm {props.age} old</p>
            <input type     = 'text'
                   value    = {props.name} 
                   onChange = {props.changed}/>
        </StyledDiv>
            
        //</div>
    )

}

export default Person;