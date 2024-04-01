import './style.css';
import { Link, Outlet } from 'react-router-dom';
import logoNav from './img/logoNav.png';
import ModalView from '../Modal/modal';
import { useState } from "react";

const NavBar = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    return(
        <div className={'page-content'}>
            <header className={'header'}>
                <div className={'header-views'}>
                    <img className='logoNav' src={logoNav} alt='logoNavBar'></img>
                    <div className={'right-header'}>
                        <Link to="/overview"> <button className={'overview'}>Overview</button></Link>
                        <Link to="/contacts"> <button className={'contacts'}>Contacts</button></Link>
                        <Link to="/favorites"> <button className={'favorites'}>Favorites</button></Link>
                        <button onClick ={setIsOpen} closeModal={() => setIsOpen(true)} className={'new'}>+ NEW</button>
                    </div>
                </div>
            </header>
            <ModalView modalIsOpen={modalIsOpen} closeModal={() => setIsOpen(false)}/>
            <Outlet />
        </div>
    )
}

export default NavBar;

