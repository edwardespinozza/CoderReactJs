import './ItemDetail.css'

const ItemDetail = ({ id, name, img, price, descripcion }) => {
    return (
        <div className='detailCard'>
            <img className='detailCardImg' src={img}/>
            <div className='detailCardInfo'>
                <h4 className='detailCardTitle'>{name}</h4>
                <span className='detailCardDescripcion'>{descripcion}</span>
                <p className='detailCardPrice'>${price}</p>
            </div>
        </div>
    )
}

export default ItemDetail