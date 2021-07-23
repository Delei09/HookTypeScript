import {createContext} from 'react'

    interface Product {
        id: number,
        name: string,
        price: number
    }

    interface Car{
        products : Product[],
        frete_valor?: number
    }

const CarContext = createContext<Car>({
    products : []
});

export default CarContext