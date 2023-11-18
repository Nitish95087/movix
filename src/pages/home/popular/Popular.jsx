import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTabs/SwitchTab'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const Popular = () => {

  const [endPoints,setEndPoints] = useState("movie")

  const {data, loading} = useFetch(`/${endPoints}/popular`);

  const onTabChange =(tab)=>{
    setEndPoints(tab === "Movies" ? "movie": "tv");
  }
 

  return (
    <div className='carouselSection'>
      <ContentWrapper>
       <span className="carouselTitle">What's Popular</span>
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

export default Popular