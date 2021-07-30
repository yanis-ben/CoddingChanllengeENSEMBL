import React from 'react'
import {Link} from "react-router-dom"


export default function Home() {

    return (
        <div className="homme">
            Home
            <div className="SeriesMovies">

                <div className="seriesContainer">
                    <Link to={"/series"}>
                        <div className="image">
                            <img src={require('../image/placeholder.jpg')} alt="series"/>
                        </div>
                        <text className="seriesText">SERIES</text>
                        <div className="series">Series</div>
                    </Link>
                </div>

                <div className="moviesContainer">
                    <Link to={"/movies"}>
                        <div className="image">
                            
                        </div>
                        <div className="movies">Movies</div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
