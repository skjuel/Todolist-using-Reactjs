import React from 'react'

const Resturant = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className='card-author subtle'>Brekfast</span>
            <h2 className='card-title'>Maggi</h2>
            <span className='card-description subtle'>
                asperiores dolores officiis accusantium facilis! Iste!
            </span>
            <div className='card-read'>Read</div>
          </div>
          <span className='card-tag subtle'>OrderNow</span>
        </div>
      </div>
    </>
  )
}

export default Resturant