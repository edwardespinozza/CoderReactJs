const products = [
    // Ropa para hombres
    {
        id: "1",
        name: "Camisa de algodón",
        price: 29.99,
        category: "hombres",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/17555659_1?wid=240&hei=240&qlt=70&fmt=webp",
        stock: 50,
        descripcion: "Camisa de algodón suave y cómoda en color azul claro."
    },
    {
        id: "2",
        name: "Pantalones vaqueros",
        price: 49.99,
        category: "hombres",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/881726992_1?wid=240&hei=240&qlt=70&fmt=webp",
        stock: 20,
        descripcion: "Pantalones vaqueros clásicos en color azul oscuro."
    },
    {
        id: "3",
        name: "Traje de negocios",
        price: 199.99,
        category: "hombres",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/881688852_1?wid=240&hei=240&qlt=70&fmt=webp",
        stock: 10,
        descripcion: "Traje de negocios elegante y sofisticado en color gris."
    },

    // Ropa para mujeres
    {
        id: "4",
        name: "Vestido de fiesta",
        price: 149.99,
        category: "mujeres",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/18717973_1?wid=240&hei=240&qlt=70&fmt=webp",
        stock: 15,
        descripcion: "Vestido de fiesta elegante y sofisticado en color rojo."
    },
    {
        id: "5",
        name: "Blusa de seda",
        price: 79.99,
        category: "mujeres",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/882749878_1?wid=240&hei=240&qlt=70&fmt=webp",
        stock: 30,
        descripcion: "Blusa de seda suave y cómoda en color rosa claro."
    },
    {
        id: "6",
        name: "Pantalones de yoga",
        price: 39.99,
        category: "mujeres",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/19451273_1?wid=240&hei=240&qlt=70&fmt=webp",
        stock: 25,
        descripcion: "Pantalones de yoga cómodos y flexibles en color negro."
    },

    // Ropa para niños
    {
        id: "7",
        name: "Camiseta con dibujos",
        price: 14.99,
        category: "ninios",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/882472767_1?wid=240&hei=240&qlt=70&fmt=webp",
        stock: 40,
        descripcion: "Camiseta divertida con dibujos de animales en varios colores."
    },
    {
        id: "8",
        name: "Pijama de franela",
        price: 29.99,
        category: "ninios",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/882717666_1?wid=240&hei=240&qlt=70&fmt=webp",
        stock: 20,
        descripcion: "Pijama de franela suave y cómodo en color rosa."
    },
    {
        id: "9",
        name: "Disfraz de superhéroe",
        price: 39.99,
        category: "ninios",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/882461984_1?wid=240&hei=240&qlt=70&fmt=webp",
        stock: 10,
        descripcion: "Disfraz de superhéroe divertido y colorido para niños."
    },

    // Accesorios
    {
        id: "10",
        name: "Gafas de sol",
        price: 24.99,
        category: "accesorios",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/19522803_1?wid=240&hei=240&qlt=70&fmt=webp",
        stock: 35,
        descripcion: "Gafas de sol con lentes polarizadas y marco negro."
    },
    {
        id: "11",
        name: "Cinturón de cuero",
        price: 39.99,
        category: "accesorios",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/19073263_1?wid=240&hei=240&qlt=70&fmt=webp",
        stock: 25,
        descripcion: "Cinturón de cuero marrón con hebilla plateada."
    },
    {
        id: "12",
        name: "Bolsa de mano",
        price: 79.99,
        category: "accesorios",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/19415614_1?wid=240&hei=240&qlt=70&fmt=webp",
        stock: 15,
        descripcion: "Bolsa de mano elegante y espaciosa en color negro."
    }
];

const categories = [
    {id: '1', description: 'Hombres', slug: 'hombres'},
    {id: '2', description: 'Mujeres', slug: 'mujeres'},
    {id: '3', description: 'Niños', slug: 'ninios'},
    {id: '4', description: 'Accesorios', slug: 'accesorios'},
    {id: '5', description: 'Otros', slug: 'otritos'}
]

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 400)
    })
}

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 400)
    })
}

export const getProductsByCategory = (categoryName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryName))
        }, 200)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}