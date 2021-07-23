import  React, {useContext} from 'react'
import CarContext from './CarContext'

const AppContext: React.FC = () => {

    const {  products, frete_valor} = useContext(CarContext)
    return(
        <div>
            appContext
            {products.map(produto => <h1>  {produto}</h1>)}
        </div>
    )
}

export default AppContext