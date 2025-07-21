import React from 'react'

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <h1>Welcome to KickMatch</h1>
            <p>Compare your kicks with the world.</p>
            <div className='buttons'>
                <button className='btn view-closet'>View My Closet</button>
                <button className='btn explore-more'>Explore Others</button>
            </div>
        </div>
    )
}

export default Homepage