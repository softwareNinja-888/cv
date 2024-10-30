function Body({title,date,place,school,qualification,isEl}){
    return (
        <>
            {isEl && (
                <div className="titleContainer">
                    <h1 className="fullName">{title}</h1>
                </div>
            )}
            <div className="detailsDisplay">
                <div className="left">
                    <p className="startEndDate">{date}</p>
                    <p className="place">{place}</p>
                </div>
                <div className="right">
                    <p className="school">{school}</p>
                    <p className="qualification">{qualification}</p>
                </div>
            </div>
        </>
    )
}

export {Body}