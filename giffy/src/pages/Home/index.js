import React, { useState ,useEffect} from "react";
import { Link,useLocation } from "wouter";
import './home.css'
import getGifs from '../../services/getGifs';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../hooks/useGif'

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home() {

    const [keyword, setKeyword] = useState('')
    const[path,push]= useLocation()
    const{loading,gifs} = useGifs()


    const handleSubmit = evt =>{
        evt.preventDefault()
        push(`search/${keyword}`)
    }
    const handleChange = evt =>{setKeyword(evt.target.value)}

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Gif" onChange={handleChange} type='text' value={keyword} />
            </form>
            <h3 className="App-title">Ultima busqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className="App-title">Los gifs mas populares</h3>

            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}