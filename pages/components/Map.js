import React from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic29ub2ZtYW1tb24iLCJhIjoiY2wwbWRmYXJtMHR4bzNqbzNkcTNobmo1NiJ9.e0PhFKDNw1AgeZtcjfJQUA'

const Map = () => {
  //
  //
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })
  })
  return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
 flex-1
`
