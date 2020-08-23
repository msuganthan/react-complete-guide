import React from 'react';

const UserOutput = (props) => {

    {
        /*Directly using the prop username*/
    }
    return (
        <div className='userOutput'>
            <p>Username: {props.userName}</p>
        </div>
    )

}

export default UserOutput;

