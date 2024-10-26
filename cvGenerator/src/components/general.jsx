// import  from './styles'
import { useState } from "react"

function Header({fullName}){
    return (
        <>
            <h1 className="fullName">{fullName}</h1>
        </>
    )
}
function EditName({handleFirst,handleLast}){
    return (
        <>
            <label for='firstName'>First Name:</label>
            <input id='firstName' onChange={handleFirst}></input>
            <label for='lastName'>Last Name:</label>
            <input id='lastName' onChange={handleLast}></input>
        </>
    )
}

function Information(){
    const [firstName,setfirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const fullName = firstName + ' ' + lastName

    function handleFirst(e){
        setfirstName(e.target.value)
    }
    function handleLast(e){
        setlastName(e.target.value)
    }

    return (
        <>

            <div className="editGeneral">
                <EditName handleFirst={handleFirst} handleLast={handleLast}/>
            </div>
            <div className="displayGeneral">
                <Header fullName={fullName} />
                <div className="info">
                    {/* <Email/>
                    <Phone/>
                    <Location/> */}
                </div>
            </div>
        </>
    )
}

export function General(){

    return (
        <>
            <Information/>
        </>
    )
}