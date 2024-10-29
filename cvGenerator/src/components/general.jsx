import '../styles/general.css';
import { useState } from "react"
import { Form } from './form.jsx';
import { formData } from '../data/formData.js';

// ADD HEADER/CV BODY IN OWN JSX

function Header({fullName}){
    return (
        <>
            <h1 className="fullName">{fullName}</h1>
        </>
    )
}


function Information(){
    const [firstName,setfirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const fullName = firstName + ' ' + lastName

    function handleNames(e){
        (e.target.id === 'firstName') ? setfirstName(e.target.value) : setlastName(e.target.value);
    }

    return (
        <>

            <div className="editGeneral">
                <Form personalInfo={formData.personalInfo} handleNames={handleNames}/>
                <Form personalInfo={formData.education} handleNames={handleNames}/>
                <Form personalInfo={formData.experience} handleNames={handleNames}/>
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