import '../styles/general.css';
import { useState } from "react"

function Header({fullName}){
    return (
        <>
            <h1 className="fullName">{fullName}</h1>
        </>
    )
}
function EditPersonal(props){
    return (
        <>
            <form action="" className="form">
                <div className="formHeader">
                    <h1 className="formHeading">Personal Details</h1>
                    <img src="../public/dropdown.png" alt="dropdown" className="dropdown" />
                </div>
                <label htmlFor="firstName" className="form__label">First Name:</label>
                <input id="firstName" onChange={props.handleNames} className="form__input" />

                <label htmlFor="lastName" className="form__label">Last Name:</label>
                <input id="lastName" onChange={props.handleNames} className="form__input" />

                <label htmlFor="email" className="form__label">Email:</label>
                <input id="email" onChange={props.handleEmail} className="form__input" />

                <label htmlFor="phone" className="form__label">Phone Number:</label>
                <input id="phone" onChange={props.handleLast} className="form__input" />

                <label htmlFor="address" className="form__label">Address:</label>
                <input id="address" onChange={props.handleLast} className="form__input" />
            </form>

        </>
    )
}

function Information(){
    const [firstName,setfirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const fullName = firstName + ' ' + lastName

    // MAYBE ADD WHOLE FORM IN OBJ FOR STATE

    function handleNames(e){
        (e.target.id === 'firstName') ? setfirstName(e.target.value) : setlastName(e.target.value);
    }

    return (
        <>

            <div className="editGeneral">
                <EditPersonal handleNames={handleNames}/>
            </div>
            <div className="displayGeneral">
                {/* <Header fullName={fullName} /> */}
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