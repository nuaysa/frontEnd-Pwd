import {Link}  from 'react-router-dom'
import "./navbar.css"
import world from '../assets/star-6-32.png'

// interface IProps {
//     name: string
// }

function Navbar () { //gaboleh ada 2 div soalnya dianggap 1 elemen, kalo mau dibungkus pake 1 div lagi 
    return (
        <div className="navbar">
                <img alt='logo' src={world} className='logo'/>
            <div className="menu">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            </div>
            <p></p>
        </div>
    )
}

export default Navbar ;