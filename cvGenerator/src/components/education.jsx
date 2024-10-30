function HeaderDisplay({title}){
    return (
        <div className="titleContainer">
            <h1 className="fullName">{title}</h1>
        </div>
    )
}

function LeftDisplay({displayDate,values,title}){
    
    return (
        <div className="left">
            <p className="startEndDate">{displayDate}</p>
            <p className="place">{(title === 'Education') ? values.location: values.locationXp}</p>
        </div>
    )
}

function RightDisplay({values,title}){
    return (
        <div className="right">
            <p className="school">{(title === 'Education') ? values.school: values.company}</p>
            <p className="qualification">{(title === 'Education') ? values.degree : values.position}</p>
        </div>
    )
}

export {HeaderDisplay,LeftDisplay,RightDisplay}