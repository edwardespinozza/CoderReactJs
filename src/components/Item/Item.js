import './Item1.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, descripcion }) => {
    return (
        <div className='card'>
            <Link to="/item">
                <img className='cardImg' src={img}/>
            </Link>
            <div className='cardInfo'>
                <Link to="/item">
                    <h4 className='cardTitle'>{name}</h4>
                </Link>
                <p className='cardPrice'>${price}</p>
                <Link to={`/item/${id}`} className='buttonVerMas'>Ver más</Link>
            </div>
        </div>
    )
}

export default Item