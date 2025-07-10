import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({title, posterUrl}) => {
    console.log(title, posterUrl)
  return (
    <div className='w-34 '>
        <img src={IMG_CDN_URL+posterUrl} alt={title} className='rounded' />
    </div>
  )
}

export default MovieCard