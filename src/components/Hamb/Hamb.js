import React from 'react'

const aparecer= ()=> {
    alert('hola')
}
const Hamb = () => {
  return (
    <i onClick={aparecer} class="fa-solid fa-bars nav_hamb"></i>
  )
}

export default Hamb