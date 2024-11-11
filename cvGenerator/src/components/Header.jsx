import '../styles/general.css';
import logo from '/logo.webp'

export function MainHeader(){
    return (
        
        <div className="header">
            <div className="leftHead">
                <span className='heading'>CV Generator</span>
                <img src={logo} alt="cv logo" className="logo" />
            </div>
            <div className="rightHead">
                <button type="button" className="save">Download CV</button>
            </div>

           
        </div>
        
    )
}