import { useState } from "react";

export function Form(props){

    const [isOpen,setIsOpen] = useState(true)

    function toogleDisplay(){
        setIsOpen(!isOpen)
    }

    function dropFunc(el){
        const form = document.querySelector(`.${el}`);
        const formHeader = Array.from(form.children).filter(child => child.classList.contains('formHeader'))
        const imgDrop = formHeader[0].children[1]

        const elements = Array.from(form.children).filter(
        child => !child.classList.contains('formHeader')
        );
        toogleDisplay()
        elements.forEach(element => {
            if (isOpen) {
                element.style.display = 'block'
                imgDrop.style.transform = 'rotate(180deg)'
            } else if (!isOpen){
                element.style.display = 'none'
                imgDrop.style.transform = 'rotate(-360deg)'
            }
        });

    }
    return (
        <>
            <form action="" className={props.formInfo.form}>
                <div className="formHeader">
                    <h1 className="formHeading">{props.formInfo.section}</h1>
                    <img src="/dropdown.png" alt="dropdown" className="dropdown" onClick={()=>{dropFunc(props.formInfo.form)}}/>
                </div>
                <label htmlFor={props.formInfo.one[0]} className="form__label">{props.formInfo.one[1]}</label>
                <input id={props.formInfo.one[0]} onChange={props.handleStates} className="form__input" />

                <label htmlFor={props.formInfo.two[0]} className="form__label">{props.formInfo.two[1]}</label>
                <input id={props.formInfo.two[0]} onChange={props.handleStates} className="form__input" />

                <label htmlFor={props.formInfo.three[0]} className="form__label">{props.formInfo.three[1]}</label>
                <input id={props.formInfo.three[0]} onChange={props.handleStates} className="form__input" />

                <label htmlFor={props.formInfo.four[0]} className="form__label">{props.formInfo.four[1]}</label>
                { props.formInfo.four[0] === 'phone' ? (
                    <input id={props.formInfo.four[0]} onChange={props.handleStates} className="form__input" placeholder="+(code) 63 171 6764"/>
                ) : (
                    <input id={props.formInfo.four[0]} onChange={props.handleStates} className="form__input" />
                )
                }
                

                <label htmlFor={props.formInfo.five[0]} className="form__label">{props.formInfo.five[1]}</label>
                <input id={props.formInfo.five[0]} onChange={props.handleStates} className="form__input" />
            </form>

        </>
    )
}