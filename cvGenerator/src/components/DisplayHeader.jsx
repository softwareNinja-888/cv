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


export {Header,Email,Phone,Location}