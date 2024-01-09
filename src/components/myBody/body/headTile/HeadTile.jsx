import React from 'react'

const HeadTile = ({label, value}) => {
  return (
    <div className='bg-white rounded-md p-5'>
        <div className='text-left text-black_30 mb-3'>{label}</div>
        <div className='text-left text-3xl font-semibold'>{value}</div>
    </div>
  )
}

export default HeadTile