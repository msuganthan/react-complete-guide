import React from 'react';

const UserInput = (props) => {
    {
        /**
         * Upon change invoke the changed props which is wired in userNameChangeHandler
         */
        /**
         * Value is directly configured from props currentName
         */
    }
    return (
        <input type     = 'text'
               onChange = {props.changed}
               value    = {props.currentName}
        />
    )
}

export default UserInput;