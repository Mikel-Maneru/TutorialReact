import Gif from './../Gif/Gif';
import React, { useState, useEffect } from 'react';
import './styles.css';

export default function ListOfList({ gifs }) {
    return <div className='ListOfGifs'>
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