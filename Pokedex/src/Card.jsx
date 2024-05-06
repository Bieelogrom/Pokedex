import './Card.css'
import Bulbasauro from './assets/001.png'

function Card() {

  return (
    <div>
      <div className='caixa_pokemon'>
        <img src={Bulbasauro} alt="Bulbasauro" className='img_Pokemon'/>
      </div>
      <div className='infos_Pokemon'>
        <p className='Num_Pokedex'>N° 0001</p>
        <p className='Nom_Pokemon'>Bulbasaur</p>
      </div>
    </div>

  )
}

export default Card
