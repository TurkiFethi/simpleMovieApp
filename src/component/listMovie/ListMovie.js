import React from 'react'
import './listMovie.css'

export default function ListMovie(props) {
    return (
        <div className="container-cards">
            {props.tab.filter(el=>el.movieName.toLowerCase().includes(props.searching.toLowerCase())).map((el,i)=>(
                <div className="card">
                    <img src={el.movieImage}/>
                    <span>{el.movieName}</span>
                    <span>{el.movieDuration}</span>
                    <span>{el.movieType}</span>
                    </div>
            ))}
        </div>
    )
}
