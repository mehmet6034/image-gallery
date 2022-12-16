import React from 'react'
import ImageCard from '../components/ImageCard';
import Data from '../helper/data'

const HomePage = () => {
  return (
    <ImageCard mydata={Data} />
  )
}

export default HomePage;