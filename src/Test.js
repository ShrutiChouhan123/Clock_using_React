import React from 'react'

function Test() {
    return (

        <>
            <label for="username-input">Username</label>
            <input id="username-input"  placeholder='username'/><br/>
            <label for="firstname-input">First Name</label>
            <input id="firstname-input"></input>
            <label for="firstname-input">Last Name</label>
            <input id="firstname-input"></input>
            <input type='submit' value="submit" />
        </>
    )
}

export default Test