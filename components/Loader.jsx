import React from 'react'

function Loader({show}) {
  return (show && <div className='loader'></div> );
}

export default Loader