import React from 'react'
import { CiWallet } from "react-icons/ci";

const Credits = () => {
  return (
    <div className='rounded-md p-2 flex bg-drawer_active'>
      <div className='p-1 w-fit rounded-md' style={{ backgroundColor: '#ffffff1a' }}>
        <CiWallet fontSize={30} opacity={100} />
      </div>
      <div className='ms-2 flex flex-col justify-between'>
        <div className='text-left text-sm font-thin leading-3'>Available credits</div>
        <div className='text-left font-semibold leading-4'>222.10</div>
      </div>
    </div>
  )
}

export default Credits