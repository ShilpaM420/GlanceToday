
/*import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
/*import Signup from './config/Signup';
import About from './components/layout/About'
import {
  Category,
  CategoryOne,
  CategoryTwo,
  CategoryThree,
} from './pages/Category'; */

/*import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import NewsContent from "./components/NewsContent/NewsContent";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar setCategory={setCategory} />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
    <Footer />
      </div>
    </BrowserRouter>
    
  );
}


export default App; */


import axios from "axios";
import { useEffect, useState} from "react";
import "./App.css";
import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar";
import NewsContent from "./components/NewsContent/NewsContent";
 // import apikey from "./components/layout/data/config";
// import NewsCard from "./components/NewsCard/NewsCard";
import Contact from "./components/layout/data/Contact";

function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("general");

 // console.log(process.env);

  const newsApi = async () => {
    try {
     // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
       
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=5e443677d42d4c779cdc9be236880d84&pageSize=${loadMore}&category=${category}`
      );
     // console.log(news.data.articles);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  }; 

  useEffect( () => {

    newsApi()
    // eslint-disable-next-line 
  }, [newsResults, loadMore, category]);

  return (
    <div className="App" id="#home">
      <Navbar setCategory={setCategory} />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      
        <Contact/>
      
      <Footer />
    </div>
  );
}

export default App;

/* Api key = 5e443677d42d4c779cdc9be236880d84 */