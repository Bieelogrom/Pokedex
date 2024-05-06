import './Card.css'
import Bulbasauro from './assets/001.png'

function Card({ pokemon, loading, infoPokemon }) {
  console.log(pokemon)
  return (
    <>
      {
        loading ? <h2>Loading...</h2> : pokemon.map((item) => {
          return (
            <div>
              <div className='caixa_pokemon' key={item.id} onClick={()=>infoPokemon(item)}>
                <img src={item.sprites.front_default} alt="Bulbasauro" className='img_Pokemon' />
              </div>
              <div className='infos_Pokemon'>
                <p className='Num_Pokedex'>N° {item.id}</p>
                <p className='Nom_Pokemon'>{item.name}</p>
              </div>
            </div >
          )
        })
      }
    </>

  )
}

export default Card
