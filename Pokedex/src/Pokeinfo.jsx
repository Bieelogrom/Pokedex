import './Pokeinfo.css'
import Bulbasauro from './assets/001.png'

function Pokeinfo({ data }) {
    return (
        <section>
            {
                (!data) ? "" : (
                    <>
                        <div className='topo_info'>
                            <p className='nome_pokemon'>{data.name}</p>
                            <img src={data.sprites.front_default} alt="Bulbasauro" className='foto_info_pokemon' />
                        </div>
                        <div>

                        </div>
                        <div className='atributos_info'>
                            <ul>
                                {
                                    data.stats.map(poke=>{
                                        return(
                                                <li>{poke.stat.name}:{poke.base_stat}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </>
                )
            }

        </section>
    );
}

export default Pokeinfo;