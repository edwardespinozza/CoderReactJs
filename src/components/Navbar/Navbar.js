import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { getCategories } from '../../asyncMock'
import { useEffect, useState } from 'react'
import { db } from '../../services/firebase/firebaseconfig'
import { collection, getDocs } from 'firebase/firestore'

const Nabvar = () => { 

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesRef = collection(db, 'categories')
        getDocs(categoriesRef)
            .then(snapshot => {
                const categoriesAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setCategories(categoriesAdapted)
            })
    }, [])

    console.log(categories)

    return (
        <nav className='seccion'>
            <div className='container'>
                <div className='nav'>
                    <Link to = '/' className='logo'>
                        <h1>MiTienda</h1>
                    </Link>
                    <div className='nav'>
                        {
                            categories.map(cat => {
                                return (
                                    <NavLink key={cat.id} to = {`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
                                )
                            })
                        }
                        <NavLink to = {`/cart`}>
                            <CartWidget /> 
                        </NavLink>
                    </div> 
                </div>
            </div>
        </nav>
    )
}

export default Nabvar