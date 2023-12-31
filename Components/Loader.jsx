import React from 'react'
import styles from '@/styles/loader.css'

function Loader() {
  return (
    <div className="loader">
  <div className="loader_cube loader_cube--color"></div>
   <div className="loader_cube loader_cube--glowing"></div>
    </div>
  )
}

export default Loader