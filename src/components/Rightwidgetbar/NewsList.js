import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import axios from 'axios'

function NewsList() {

const [articles, setArticles] = useState([])

// 'https://newsapi.org/v2/everything?q=sports&from=2022-06-30&sortBy=popularity&apiKey=a3d4aab744ae4ceea87848b0c70454f6'

useEffect(() => {
    var myurl = 'https://bhaswatasarkar.github.io/fakejson/db.json'
    const getArticles = async () => {
        const response = await axios.get(`${myurl}`)
        console.log(response);
        setArticles(response.data.articles)
    }
    getArticles();
},[])

if(articles.length>0){

//   var n = Math.floor(Math.random()*articles.length)
//   n = n%articles.length;
  
      return (
        <div>
            <NewsItem
                title={articles[0].title}
                author={articles[0].author}
                sourcename={articles[0].source.name}
                urlToImage={articles[0].urlToImage}
            />
            <NewsItem
                title={articles[1].title}
                author={articles[1].author}
                sourcename={articles[1].source.name}
                urlToImage={articles[1].urlToImage}
            />
            <NewsItem
                title={articles[2].title}
                author={articles[2].author}
                sourcename={articles[2].source.name}
                urlToImage={articles[2].urlToImage}
            />
            <NewsItem
                title={articles[3].title}
                author={articles[3].author}
                sourcename={articles[3].source.name}
                urlToImage={articles[3].urlToImage}
            />
            <NewsItem
                title={articles[4].title}
                author={articles[4].author}
                sourcename={articles[4].source.name}
                urlToImage={articles[4].urlToImage}
            />
                  
        </div>
      )
    
}
  

else{
  return(<></>)
}
}


export default NewsList
