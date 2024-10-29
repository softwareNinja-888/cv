export function Form(props){
    return (
        <>
            <form action="" className="form">
                <div className="formHeader">
                    <h1 className="formHeading">{props.personalInfo.section}</h1>
                    <img src="/dropdown.png" alt="dropdown" className="dropdown" />
                </div>
                <label htmlFor={props.personalInfo.one[0]} className="form__label">{props.personalInfo.one[1]}</label>
                <input id={props.personalInfo.one[0]} onChange={props.handleNames} className="form__input" />

                <label htmlFor={props.personalInfo.two[0]} className="form__label">{props.personalInfo.two[1]}</label>
                <input id={props.personalInfo.two[0]} onChange={props.handleNames} className="form__input" />

                <label htmlFor={props.personalInfo.three[0]} className="form__label">{props.personalInfo.three[1]}</label>
                <input id={props.personalInfo.three[0]} onChange={props.handleNames} className="form__input" />

                <label htmlFor={props.personalInfo.four[0]} className="form__label">{props.personalInfo.four[1]}</label>
                <input id={props.personalInfo.four[0]} onChange={props.handleNames} className="form__input" />

                <label htmlFor={props.personalInfo.five[0]} className="form__label">{props.personalInfo.five[1]}</label>
                <input id={props.personalInfo.five[0]} onChange={props.handleNames} className="form__input" />
            </form>

        </>
    )
}