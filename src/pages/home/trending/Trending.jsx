import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTabs/SwitchTab'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const Trending = () => {

  const [endPoints,setEndPoints] = useState("day")

  const {data, loading} = useFetch(`/trending/all/${endPoints}`);

  const onTabChange =(tab)=>{
    setEndPoints(tab === "Day" ? "day": "week");
  }
 

  return (
    <div className='carouselSection'>
      <ContentWrapper>
       <span className="carouselTitle">Trending</span>
       <SwitchTab data={["Day","Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending