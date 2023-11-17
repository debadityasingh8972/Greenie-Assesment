import React, { useState } from 'react'
import Context from './context'

const ContextHolder = (props) => {
    const [users, setUsers] = useState([
        {
            username: "mayank",
            id: 2,
            email: "mayank012@gmail.com",
            phone: 9587452263,
            creationDate: "May 20 2022",
            password: 'password'
        }
    ])
    return (
        <Context.Provider value={{ users, setUsers }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextHolder