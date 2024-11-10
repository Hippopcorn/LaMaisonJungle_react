import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = "la maison jungle"
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='logo' className='lmg-logo'></img>
            <h1>{title.toUpperCase()}</h1>
        </div>
    )
}

export default Banner