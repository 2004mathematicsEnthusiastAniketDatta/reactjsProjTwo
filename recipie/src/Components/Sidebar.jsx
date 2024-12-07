import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-5 shadow-lg w-48 '>
     <h1 className="font-bold text-base">
      <ul>
        <li>Spicy Foods</li>
        <li>Sweet Dishes</li>
        <li>Sour Dishes</li>
        <li>Salty Dishes</li>
      </ul>
     </h1>
     <h1 className='font-bold pt-5 text-lg'>Subscriptions</h1>
     <h1 className="font-bold text-base">
      <ul>
        <li>Trending</li>
        <li>Favourites</li>
        <li>New dishes</li>
        <li>Healthy</li>
      </ul>
     </h1>
    </div>
  )
}

export default Sidebar