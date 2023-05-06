import './Notifications.css'
import { useState, createContext, useContext } from 'react'


const Notification = ({ type, message }) => {
    let estilo = ''
    if (type === 'success') {
        estilo = 'success' 
    } else {
        estilo = 'error' 
    }

    if(!message) return

    return (
        <div className={`notifications ${estilo}`}>
            { message }
        </div>
    )
}


export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const setNotification = (type, text) => {
        setNotificationData ({ type, text })
        setTimeout(() => {
            setNotification({ type, text: '' })
        }, 3500)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification type={ notificationData.type } message={ notificationData.text } />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}




