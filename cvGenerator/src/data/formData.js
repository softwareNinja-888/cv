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
        four: ['startEd', 'Start Date:'],
        five: ['endEd','End Date:'],
        form: 'formEducation',
    }
    const experience = {
        section: 'Experience',
        one: ['company','Company Name:'],
        two: ['position', 'Position:'],
        three: ['locationXp','Location:'],
        four: ['startXp', 'Start Date:'],
        five: ['endXp','End Date:'],
        form: 'formExperience'
    }

    return {personalInfo,education,experience}
})()