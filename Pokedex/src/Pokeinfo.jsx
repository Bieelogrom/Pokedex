import './Pokeinfo.css'
import Bulbasauro from './assets/001.png'

function Pokeinfo(){
    const atributos = ["HP :", "Ataque :", "Defesa :", "Ataque Especial :", "Defesa Especial :", "Velocidade :"]
    const listarAtributos = atributos.map(atributo => <li>{atributo}</li>)


    return (
        <section>
            <div className='topo_info'>
                <p className='nome_pokemon'>Bulbasaur</p>
                <img src={Bulbasauro} alt="Bulbasauro" className='foto_info_pokemon'/>
            </div>
            <div>

            </div>
            <div className='atributos_info'>
                <ul>
                    {listarAtributos}
                </ul>
            </div>
        </section>
    );
}

export default Pokeinfo;