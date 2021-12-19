import './App.css';
import React from "react"; 
import { NewsList } from './components/news-list/news-list.component';
const API_ENDPOINT = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e2847c013edc47029052c5a06b9c999e"




class App extends React.Component{
  constructor(){
    super(); 
    this.state = {
      news: [],
      searchField:""
    }
  }

  async componentDidMount(){
    const newsDataPromise = await fetch(API_ENDPOINT);
    const newsDataJSON = await newsDataPromise.json(); 
    const articlesArray = newsDataJSON.articles; 
    this.setState({news: articlesArray}); 
  }

  
  handleChange = (event)=>{
    let searchInput = event.target; 
    let searchText = searchInput.value; 
    this.setState({searchField: searchText})
  }
  render(){
    const {news, searchField} = this.state; 
    const filteredNews = news.filter(news=>news.title.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div>
        <h4 className='welcome-text'>Welcome to Z-News</h4>
        <input className="searchField" type="search" placeHolder="Search articles" onChange={this.handleChange}/>
        <NewsList articlesArray={filteredNews}/>
        {filteredNews.length===0 &&<p>{`No data found for ${searchField} `}</p>}
      </div>
    )
  }


}


export default App;
