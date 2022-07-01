import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import axios from 'axios'

function NewsList() {

const [articles, setArticles] = useState([])


useEffect(() => {
    const getArticles = async () => {
        const response = await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2022-06-30&sortBy=popularity&apiKey=a3d4aab744ae4ceea87848b0c70454f6')
        console.log(response);
        setArticles(response.data.articles)
    }
    getArticles();
},[])

if(articles.length>0){

  var n = Math.floor(Math.random()*articles.length)
  
      return (
        <div>
            <NewsItem
                title={articles[n+0].title}
                author={articles[n+0].author}
                sourcename={articles[n+0].source.name}
                urlToImage={articles[n+0].urlToImage}
            />
            <NewsItem
                title={articles[n+1].title}
                author={articles[n+1].author}
                sourcename={articles[n+1].source.name}
                urlToImage={articles[n+1].urlToImage}
            />
            <NewsItem
                title={articles[n+2].title}
                author={articles[n+2].author}
                sourcename={articles[n+2].source.name}
                urlToImage={articles[n+2].urlToImage}
            />
            <NewsItem
                title={articles[n+3].title}
                author={articles[n+3].author}
                sourcename={articles[n+3].source.name}
                urlToImage={articles[n+3].urlToImage}
            />
            <NewsItem
                title={articles[n+4].title}
                author={articles[n+4].author}
                sourcename={articles[n+4].source.name}
                urlToImage={articles[n+4].urlToImage}
            />
                  
        </div>
      )
    
}
  

else{
  return(<></>)
}
}


export default NewsList
