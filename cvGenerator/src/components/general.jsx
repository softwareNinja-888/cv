import '../styles/general.css';
import { useState } from "react"
import { Form } from './form.jsx';
import { formData } from '../data/formData.js';
import { Header,Email,Phone,Location } from './header.jsx';
import { Body } from './education.jsx';

export function Layout(){
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
                    <div className="educationCon">
                        <Body title='Education' isEl={true}/>
                    </div>
                    <div className="experienceCon">
                        <Body title='Experience' isEl={true}/>
                    </div>
                </div>
            </div>
        </>
    )
}