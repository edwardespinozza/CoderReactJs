import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Nabvar = () => {
    return (
        <nav className='seccion'>
            <div className='container'>
                <div className='nav'>
                    <h1>MiTienda</h1>
                    <div className='nav'>
                        <Button label="Ropa" callback={() => console.log("Ropa")}/>
                        <Button label="Accesorios"  callback={() => console.log("Accesorios")}/>
                        <Button label="Equipos"  callback={() => console.log("Equipos")}/>
                        <CartWidget />
                        {/* <button className="btn">Ropa</button>
                        <button className="btn">Accesorios</button>
                        <button className="btn">Equipos</button>*/}
                    </div> 
                </div>
            </div>
        </nav>
    )
}

export default Nabvar