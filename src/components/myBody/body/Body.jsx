import React from 'react'
import Dropdown from './dropdown/Dropdown.jsx';
import HeadTile from './headTile/HeadTile.jsx';
import Transactions from './transactions/Transactions.jsx';

const Body = () => {
  return (
    <div className='bg-body_bg p-8'>
        <div className='flex items-center justify-between  pb-7'>
            <div className='text-lg font-semibold text-black_12'>Overview</div>
            <Dropdown/>
        </div>
        <div className='grid grid-cols-2 gap-x-6'>
            <HeadTile label={"Online Orders"} value={"231"}/>
            <HeadTile label={"Amount Recieved"} value={"₹23,92,312.19"}/>
        </div>
        <div className='my-6 text-xl text-left font-semibold'>
            Transactions | This Month
        </div>
        <Transactions/>
    </div>
  )
}

export default Body