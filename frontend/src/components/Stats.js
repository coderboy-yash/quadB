import React from 'react'

export default function Stats() {
  return (
    <div className='stat-container'>
        <div className='percent-stat'>
            <div><h2>0.8%</h2></div>
            <div><h5>5 Mins</h5></div>
        </div>
        <div className='percent-stat'>
            <div><h2>1.11%</h2></div>
            <div><h5>1 Hour</h5></div>
        </div>
        <div className='stat-result'>
            <h4>Best Price to Trade</h4>
            <h1>₹ 25,92,308</h1>
            <h6>Average BTC/INR net price including commission</h6>
        </div>
        <div className='percent-stat'>
            <div><h2>7.5%</h2></div>
            <div><h5>1 Day</h5></div>
        </div>
        <div className='percent-stat'>
            <div><h2>14.48%</h2></div>
            <div><h5>7 Days</h5></div>
        </div>
    </div>
  )
}
