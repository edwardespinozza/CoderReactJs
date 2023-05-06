import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../firebaseconfig"
import { createAdaptedProductFromFirestore } from "../../../adapters/createAdaptedProductFromFirestore"

export const getProducts = (categoryName) => {
    return new Promise((resolve, reject) => {
        const productsRef = categoryName
            ? query(collection(db, 'products'), where('category', '==', categoryName))
            : collection(db, 'products')

        getDocs(productsRef)
            .then(snapshot => {
                console.log(snapshot)
                const productsAdapted = snapshot.docs.map(doc => {
                    return createAdaptedProductFromFirestore(doc)
                })
                resolve(productsAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}
