import './Header.css'

const Header = () =>{
    return(
        <div className="containerHeader">
            <div>
                <img src="public/logoCesde.png" alt="logo" className="styleLogo"/>
            </div>
            <div>
                <p className="styleTexto"> Centro de costos y nómina </p>
            </div>
        </div>
    )
}

export default Header