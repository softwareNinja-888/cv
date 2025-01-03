import '../styles/general.css';
import { useState } from "react"
import { Form } from './Form.jsx';
import { formData } from '../data/formData.js';
import { Header,Email,Phone,Location } from './DisplayHeader.jsx';
import { HeaderDisplay,LeftDisplay,RightDisplay} from './Section.jsx';
import { MainHeader } from './Header.jsx';
import {NOTDONE} from './NOTDONE.jsx'

export function Layout(){

    // DATA TO DISPLAY ON CV:

    const [formValues,setFormValues] = useState({
        firstName: "James",
        lastName: "Reel",
        email: "example@gmail.com",
        phone: "+2763 171 6764",
        address: "London, UK",
        school: 'University of London',
        degree: 'Bachelors Of Commerce',
        location: 'London, UK',
        startEdu: '01/2020',
        endEdu: '12/2022',
        company: 'Google',
        position: 'Project Manager',
        locationXp: 'Silicon Valley',
        startXp: '06/2022',
        endXp: 'present',
    })

    // COMBINE STATES:

    const fullName = `${formValues.firstName} ${formValues.lastName}`
    const displayDateEd = `${formValues.startEdu} - ${formValues.endEdu}`
    const displayDateXp = `${formValues.startXp} - ${formValues.endXp}`

    // FUNCTION TO HANDLE STATES

    function handleStates(e){
        const {id,value} = e.target;
        setFormValues((prevValues)=>({
            ...prevValues,
            [id]: value
        }))
    }

    return (
        <>
            {/* <NOTDONE/> */}
            <MainHeader/>
            <div className="mainContainer">

                {/* AREA TO INPUT DATA: */}

                <div className="editGeneral">
                    <Form formInfo={formData.personalInfo} handleStates={handleStates}/>
                    <Form formInfo={formData.education} handleStates={handleStates}/>
                    <Form formInfo={formData.experience} handleStates={handleStates}/>
                </div>

                {/* AREA THAT SHOWS INPUTED DATA:  */}

                <div className="displayGeneral">
                    {/* CV HEADER: */}

                    <div className="displayHeader">
                        <Header fullName={fullName} />
                        <div className="info">
                            <Email email={formValues.email}/>
                            <Phone phone={formValues.phone}/>
                            <Location location={formValues.address}/>
                        </div>
                    </div>
                    {/* EDUCATION SECTION OF CV: */}

                    <div className="educationCon">
                        <HeaderDisplay title='Education'/>
                        <div className="detailsDisplay">
                            <LeftDisplay title='Education' displayDate={displayDateEd} values={formValues}/>
                            <RightDisplay title='Education' values={formValues}/>
                        </div>
                    </div>
                    {/* EXPERIENCE SECTION: */}
                    <div className="experienceCon">
                        <HeaderDisplay title='Experience'/>
                        <div className="detailsDisplay">
                            <LeftDisplay title='Experience' displayDate={displayDateXp} values={formValues}/>
                            <RightDisplay title='Experience' values={formValues}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// Notes:
// ADD DATE FUNC
// LIGHT VALIDATION ON CV IF NEEDED
// STATES ON EDIT SIDE SO ONE OPENS 
// ADD MORE THAN ONE EDUCATION
