import '../styles/general.css';
import { useState } from "react"
import { Form } from './form.jsx';
import { formData } from '../data/formData.js';
import { Header,Email,Phone,Location } from './header.jsx';
import { HeaderDisplay,LeftDisplay,RightDisplay} from './education.jsx';

export function Layout(){
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
        position: 'Manager',
        locationXp: 'Silicon Valley',
        startXp: '06/2022',
        endXp: 'present',
    })
    const fullName = `${formValues.firstName} ${formValues.lastName}`
    const displayDateEd = `${formValues.startEdu} - ${formValues.endEdu}`

    const displayDateXp = `${formValues.startXp} - ${formValues.endXp}`

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
                        <HeaderDisplay title='Education'/>
                        <div className="detailsDisplay">
                            <LeftDisplay title='Education' displayDate={displayDateEd} values={formValues}/>
                            <RightDisplay title='Education' values={formValues}/>
                        </div>
                    </div>
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