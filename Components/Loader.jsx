import React from 'react'
import styles from '@/styles/loader.css'

function Loader() {
  return (
    <div classname="loader">
  <div classname="loader_cube loader_cube--color"></div>
   <div classname="loader_cube loader_cube--glowing"></div>
    </div>
  )
}

export default Loader