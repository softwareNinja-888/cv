export const formData = (function (){
    const personalInfo = {
        section: 'Personal Details',
        one: ['firstName','First Name:'],
        two: ['lastName', 'Last Name:'],
        three: ['email','Email:'],
        four: ['phone', 'Phone'],
        five: ['address','Address:'],
        form: 'formPersonal'
    }

    const education = {
        section: 'Education',
        one: ['school','School:'],
        two: ['degree', 'Degree:'],
        three: ['location','Location:'],
        four: ['start', 'Start Date:'],
        five: ['end','End Date:'],
        form: 'formEducation',
    }
    const experience = {
        section: 'Experience',
        one: ['company','Company Name:'],
        two: ['position', 'Position:'],
        three: ['location','Location:'],
        four: ['start', 'Start Date:'],
        five: ['end','End Date:'],
        form: 'formExperience'
    }

    return {personalInfo,education,experience}
})()