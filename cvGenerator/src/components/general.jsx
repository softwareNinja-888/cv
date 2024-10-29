import '../styles/general.css';
import { useState } from "react"
import { Form } from './form.jsx';

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

    // MAYBE ADD WHOLE FORM IN OBJ FOR STATE

    function handleNames(e){
        (e.target.id === 'firstName') ? setfirstName(e.target.value) : setlastName(e.target.value);
    }

    const personalInfo = {
        section: 'Personal Details',
        one: ['firstName','First Name:'],
        two: ['lastName', 'Last Name:'],
        three: ['email','Email:'],
        four: ['phone', 'Phone'],
        five: ['address','Address:'],
    }

    const education = {
        section: 'Education',
        one: ['school','School:'],
        two: ['degree', 'Degree:'],
        three: ['location','Location:'],
        four: ['start', 'Start Date:'],
        five: ['end','End Date:'],
    }
    const experinece = {
        section: 'Experience',
        one: ['company','Company Name:'],
        two: ['position', 'Position:'],
        three: ['location','Location:'],
        four: ['start', 'Start Date:'],
        five: ['end','End Date:'],
    }

    return (
        <>

            <div className="editGeneral">
                <Form personalInfo={personalInfo} handleNames={handleNames}/>
                <Form personalInfo={education} handleNames={handleNames}/>
                <Form personalInfo={experinece} handleNames={handleNames}/>
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