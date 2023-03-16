import './Button.css'

const Button = (props) => {
    console.log(props)
    return <button onClick={props.callback} className='btn'>{props.label}</button>
}

export default Button