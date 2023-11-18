import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTabs/SwitchTab'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const TopRated = () => {

  const [endPoints,setEndPoints] = useState("movie")

  const {data, loading} = useFetch(`/${endPoints}/top_rated`);

  const onTabChange =(tab)=>{
    setEndPoints(tab === "Movies" ? "movie": "tv");
  }
 

  return (
    <div className='carouselSection'>
      <ContentWrapper>
       <span className="carouselTitle">Top Rated</span>
       <SwitchTab data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel 
      data={data?.results}
      loading={loading}
      endPoints={endPoints}
      />
    </div>
  )
}

export default TopRated;