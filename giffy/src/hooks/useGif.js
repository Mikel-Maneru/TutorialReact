import {useContext,useEffect,useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export default function useGifs({keyword} = {keyword:null}){
    const [loading, setLoading] = useState(false)
    const {gifs,setGifs} = useContext(GifsContext)
    useEffect(function () {
        setLoading(true)

        const keywordToUse = keyword || localStorage.getItem('lastKeyWord')

        getGifs({ keyword:keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyWord',keyword)
            })
    }, [keyword,setGifs])

    return {loading,gifs}
}

