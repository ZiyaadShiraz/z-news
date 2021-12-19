import React from "react"
import "./news-card.style.css"



function NewsCard({title, shortDescription, imgUrl}){
    return(
        <div className="card">
            <h4 className="title">{title}</h4>
            <hr/>
            <img className="news-image" src={imgUrl} alt="image"/>
            <p>{shortDescription}</p>
        </div>
    ); 
}


export default NewsCard; 