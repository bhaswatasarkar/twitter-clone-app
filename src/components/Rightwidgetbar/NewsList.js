import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import axios from 'axios'

function NewsList() {

const [articles, setArticles] = useState([])

// 'https://newsapi.org/v2/everything?q=sports&from=2022-07-20&sortBy=popularity&apiKey=a3d4aab744ae4ceea87848b0c70454f6'
// 'https://bhaswatasarkar.github.io/fakejson/db.json'
// 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Ck69Npn9eeRCRZ8lXYvjv6zKXVTy2lAX'

useEffect(() => {
    var myurl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Ck69Npn9eeRCRZ8lXYvjv6zKXVTy2lAX'
    const getArticles = async () => {
        const response = await axios.get(`${myurl}`)
        console.log(response);
        setArticles(response.data.response.docs)
    }
    getArticles();
},[])

if(articles.length>0){

//   var n = Math.floor(Math.random()*articles.length)
//   n = n%articles.length;
  
      return (
        <div>
            <NewsItem
                title={articles[0].abstract}
                author={articles[0].subsection_name}
                sourcename={articles[0].source}
                urlToImage={articles[0].multimedia[0].url}
            />
            {/* <NewsItem
                title={articles[1].title}
                author={articles[1].author}
                sourcename={articles[1].source.name}
                urlToImage={articles[1].urlToImage}
            /> */}
            {/* <NewsItem
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
            /> */}
                  
        </div>
      )
    
}
  

else{
  return(<></>)
}
}


export default NewsList