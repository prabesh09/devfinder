import React, { useRef } from "react"

const UserInput = (props: any) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () =>{
        if(inputRef.current && inputRef.current.value.trim() !== ''){
          props.getUser(inputRef.current.value)
        }
    }

  return (
    <React.Fragment>
        <input type="text" ref={inputRef} className="user-input"  placeholder="Search GitHub user..."/>
        <button onClick={handleClick} className="user-btn">Search</button>
    </React.Fragment>
  )
}

export default UserInput