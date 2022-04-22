import React from "react";
import './Gif.css'
export default function Gif({ title, id, url }) {
    return (
        <div className="Container-Gif">
            <a href={`/gif/${id}`} className="Gif">
                <h4> {title}</h4>
                <img loading="lazy" alt={title} src={url} />
            </a>
        </div>

    )
}