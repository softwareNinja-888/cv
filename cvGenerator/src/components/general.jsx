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
function Email({email}){
    return(
        <div className="emailCon infoCon">
            <img src="/email.png" alt="emailLogo" className="emailLogo" />
            <p className='emailDisplay display'>{email}</p>
        </div>
    )
}
function Phone({phone}){
    return(
        <div className="phoneCon infoCon">
            <img src="/phone.png" alt="phoneLogo" className="phoneLogo" />
            <p className='phoneDisplay display'>{phone}</p>
        </div>
    )
}
function Location({location}){
    return(
        <div className="locationCon infoCon">
            <img src="/location.png" alt="locationlogo" className="locationlogo" />
            <p className='locationDisplay display'>{location}</p>
        </div>
    )
}



function Information(){
    const [formValues,setFormValues] = useState({
        firstName: "James",
        lastName: "Reel",
        email: "example@gmail.com",
        phone: "+2763 171 6764",
        address: "London, UK"
    })
    const fullName = `${formValues.firstName} ${formValues.lastName}`

    function handleStates(e){
        const {id,value} = e.target;
        setFormValues((prevValues)=>({
            ...prevValues,
            [id]: value
        }))
    }

    return (
        <>

            <div className="mainContainer">
                <div className="editGeneral">
                    <Form formInfo={formData.personalInfo} handleStates={handleStates}/>
                    <Form formInfo={formData.education} handleStates={handleStates}/>
                    <Form formInfo={formData.experience} handleStates={handleStates}/>
                </div>
                <div className="displayGeneral">
                    <div className="displayHeader">
                        <Header fullName={fullName} />
                        <div className="info">
                            <Email email={formValues.email}/>
                            <Phone phone={formValues.phone}/>
                            <Location location={formValues.address}/>
                        </div>
                    </div>
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