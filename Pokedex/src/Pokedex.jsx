import './style.css'
import Card from './Card'
import Pokeinfo from './Pokeinfo'

const Pokedex = () => {
    return (
        <main>
            <div className='lado_esquerdo'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='lado_direito'>
                <Pokeinfo />
            </div>
        </main>
    )
}

export default Pokedex