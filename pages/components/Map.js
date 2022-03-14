import React from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic29ub2ZtYW1tb24iLCJhIjoiY2wwbWRmYXJtMHR4bzNqbzNkcTNobmo1NiJ9.e0PhFKDNw1AgeZtcjfJQUA'

const Map = (props) => {
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

    // addToMap(map)

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates)
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates)
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds(
        [
          props.dropoffCoordinates, // southwestern corner of the bounds
          props.pickupCoordinates, // northeastern corner of the bounds
        ],
        {
          padding: 60,
        }
      )
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
 flex-1 h-1/2
`
