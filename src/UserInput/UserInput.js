import React from 'react';

const UserInput = ( props ) => {
    {
        /**
         * Upon change invoke the changed props which is wired to usernameChangeHandler
         */
        /**
         * Value is directly configured from prop currentName.
         */
    }
    return (
        <input 
            type = 'text'
            onChange={props.changed}
            value={props.currentName}
        />
    )
}

export default UserInput;