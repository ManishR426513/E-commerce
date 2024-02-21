import React from 'react'
import SideBar from '../Common/SideBar'
import TopBar from '../Common/TopBar'

export default function PrivateLayout({ children, activeSubMenu }) {
  return (
    <div class="flex  h-full w-full">
      <SideBar />
      <div className='w-[calc(100%-75px)] bg-lightgray mt-[65px] ml-[auto] side--content--area'>
        <TopBar />
        {children}
      </div>
    </div>
  )
}
