import React from 'react'
import IconButton from '@mui/material/IconButton';
import { FiSearch } from "react-icons/fi";
import { Input } from '@mui/material';
import { BiSortAlt2 } from "react-icons/bi";

const Transactions = () => {
    return (
        <div className='bg-white rounded-md p-4'>
            <div className='flex justify-between align-middle'>
                <div className='flex items-center rounded-md px-2 border'>
                    <IconButton sx={{ p: '10px', fontSize: '20px' }} aria-label="search">
                        <FiSearch />
                    </IconButton>
                    <Input placeholder="Search by order ID..." className='w-full' disableUnderline="true" />
                </div>
                <div className='grid grid-cols-3 gap-x-2'>
                    <div className='border my-1 col-span-2'>
                        <IconButton sx={{ fontSize: '17px', py: '0' }} aria-label="sort">
                            <div className='me-1'>Sort</div> <BiSortAlt2 fontSize={20} />
                        </IconButton>
                    </div>
                    <div className='border my-1'>
                        <IconButton sx={{ fontSize: '17px', py: '0' }} aria-label="sort">
                            <BiSortAlt2 fontSize={20} />
                        </IconButton>
                    </div>
                </div>

            </div>


            <div>sgsg</div>
        </div>
    )
}

export default Transactions