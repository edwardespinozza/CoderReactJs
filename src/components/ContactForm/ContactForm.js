import { useState } from "react";
import './ContactForm.css';


const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
        <div class="form-container">
            <form onSubmit={handleSubmit}>
                <div class="form-field">
                <label for="name">Nombre:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingrese su nombre" required />
                </div>
                <div class="form-field">
                <label for="phone">Teléfono:</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Ingrese su teléfono" required />
                </div>
                <div class="form-field">
                <label for="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese su email" required />
                </div>
                <button type="submit" class="buttonVerMas">Generar orden</button>
            </form>
        </div>


        
/*         <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="buttonVerMas">Generar orden</button>
        </form> */
    )
}

export default ContactForm