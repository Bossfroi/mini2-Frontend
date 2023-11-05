import React from 'react'
import WeatherAPI from './API/WeatherAPI';
import NewsConAPI from './API/NewsConAPI';
import Footer from './Footer';

const News = () => {
  return (
    <div>
      <WeatherAPI />
      <NewsConAPI/>
    <Footer/>
    </div>
    
  )
  
}


export default News;