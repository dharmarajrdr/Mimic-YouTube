import React from 'react'
import './Videos.css'

const Videos = ({ url }) => {
    return (
        <div className='Video'>
            <div className='thumbnail FRCC'>
                <img src={url} />
            </div>
            <div className='FRCS videoDetails'>
                <div className='FRCC channelDP'>
                    <img src={require('./images/dp.jpg')} className='' />
                </div>
                <div className='a'>
                    <p>I want to learn react and i am doing it.</p>
                    <p>Dharmaraj R</p>
                    <p>
                        <span>17K views</span>
                        <span>12 days ago</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Videos