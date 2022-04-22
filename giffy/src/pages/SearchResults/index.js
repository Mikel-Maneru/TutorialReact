import React, { useState, useEffect } from 'react';
import { Link } from "wouter";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Spinner from "../../components/Spinner/Spinner";
import useGifs from '../../hooks/useGif'

function SearchResults({params}) {
    const { keyword } = params
    const{loading,gifs} = useGifs({keyword})

    return (
        <>{loading
            ?<Spinner/>
            :<ListOfGifs gifs={gifs} />
        }
    
        </>
    )
}

export default React.memo(SearchResults)