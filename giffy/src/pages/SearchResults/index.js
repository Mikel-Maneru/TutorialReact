import React from "react";
import { Link } from "wouter";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

export default function SearchResults({params}) {
    const { keyword, rating } = params


    return (
        <>
         <ListOfGifs params={keyword} />
        </>
    )
}