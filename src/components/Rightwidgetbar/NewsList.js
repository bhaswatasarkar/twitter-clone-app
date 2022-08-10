import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import axios from 'axios'



function NewsList({searchString}) {

const [articles, setArticles] = useState([])

// 'https://newsapi.org/v2/everything?q=sports&from=2022-07-20&sortBy=popularity&apiKey=a3d4aab744ae4ceea87848b0c70454f6'
// 'https://bhaswatasarkar.github.io/fakejson/db.json'
// 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=everything&api-key=Ck69Npn9eeRCRZ8lXYvjv6zKXVTy2lAX'

useEffect(() => {
    var myurl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchString}&api-key=Ck69Npn9eeRCRZ8lXYvjv6zKXVTy2lAX`
    
    const getArticles = async () => {
        
            const response = await axios.get(`${myurl}`).catch((err=>{
                document.getElementById('news-components-error').innerHTML="Failed to coonect to the server!"
            }))

            console.log(response);
            try{
                document.getElementById('news-components-error').innerHTML="";
                setArticles(response.data.response.docs)
            }
            catch(e){
                document.getElementById('news-components-error').innerHTML="Too many requests please refresh or type again after a few time!"
            }
        
    }
    getArticles();
},[searchString])

function NewsItemConfigure({index}){
    index = parseInt(index)

    if(articles[index].multimedia.length>=1){
        return (<NewsItem
            title={articles[index].headline.main}
            author={articles[index].byline.original}
            sourcename={articles[index].source}
            urlToImage={"http://www.nytimes.com/"+articles[index].multimedia[0].url}
            sectionName={articles[index].section_name}
        />)
    }
    else{
        return (<NewsItem
            title={articles[index].headline.main}
            author={articles[index].byline.original}
            sourcename={articles[index].source}
            sectionName={articles[index].section_name}
        />)
    }
}

if(articles.length>5){

//   var n = Math.floor(Math.random()*articles.length)
//   n = n%articles.length;
  
      return (
        <div>
            <NewsItemConfigure index='0'/>
            <NewsItemConfigure index='1'/>
            <NewsItemConfigure index='2'/>
            <NewsItemConfigure index='3'/>
            <NewsItemConfigure index='4'/>              
        </div>
      )
    
}
  

else{
  return(<></>)
}
}



export default NewsList