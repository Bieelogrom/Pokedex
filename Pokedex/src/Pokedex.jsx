import './style.css'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Pokedex = () => {
    const [pokedata, setPokedata] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState(); 
    const [pokeDex, setPokeDex]  = useState();

    const pokeFun = async () => {
        setLoading(true)
        const res=await axios.get(url);
        // console.log(res.data.results)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
        // console.log(pokedata)
    }

    const getPokemon = async(res) => {
        res.map(async(item)=>{
            const result = await axios.get(item.url)
            // console.log(result.data)
            setPokedata(state=>{
                state=[...state,result.data];
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state;   
            })
        })
    }

    useEffect(() => {
        pokeFun()
    }, [url])
    return (
        <main>
            <div className='lado_esquerdo'>
                <Card pokemon={pokedata} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
            </div>
            <div className='lado_direito'>
                <Pokeinfo data={pokeDex}/>
            </div>
        </main>
    )
}

export default Pokedex