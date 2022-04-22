import Gif from './../Gif/Gif';
import React, { useState, useEffect } from 'react';
import getGifs from '../../services/getGifs';
import Spinner from './../Spinner/Spinner';

export default function ListOfList({ params }) {
    const [gifs, setGiffs] = useState([]);
    const  keyword  = params
    const [loading, setLoading] = useState(false)
    console.log(params)

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGiffs(gifs)
                setLoading(false)
            })
    }, [keyword])
    if(loading) return <Spinner/>

    return <div>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    title={title}
                    url={url}
                    id={id}
                />
            )

        }</div>
}