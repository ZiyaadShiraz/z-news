import React from "react"
import NewsCard from "../news-card/news-card.component";
import "./news-list.style.css"



export const NewsList = ({articlesArray})=>{
    return (
        <div className="news-container">
            {
                articlesArray.map(news=>{
                    console.log(news)
                    return(
                        <NewsCard title={news.title} shortDescription = {news.description} imgUrl = {news.urlToImage}/>
                    )
                })
            }
        </div>
    ); 
}