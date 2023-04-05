import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Nabvar = () => {
    return (
        <nav className='seccion'>
            <div className='container'>
                <div className='nav'>
                    <Link to = '/' className='logo'>
                        <h1>MiTienda</h1>
                    </Link>
                    <div className='nav'>
                        <NavLink to = '/category/hombres' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Hombres</NavLink>
                        <NavLink to = '/category/mujeres' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Mujeres</NavLink>
                        <NavLink to = '/category/ninios' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Niños</NavLink>
                        <NavLink to = '/category/accesorios' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                        <CartWidget />
                    </div> 
                </div>
            </div>
        </nav>
    )
}

export default Nabvar