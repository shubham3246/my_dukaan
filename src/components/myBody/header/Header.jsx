import React from 'react'
import { AiOutlineQuestionCircle } from "react-icons/ai";
import IconButton from '@mui/material/IconButton';
import { FiSearch } from "react-icons/fi";
import { Input } from '@mui/material';
import { MdSms } from "react-icons/md";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

const Header = () => {
    return (
        <div className='w-full flex items-center py-3 border-b border-black_85 px-8'>
            <div className='flex-1 flex items-center text-black_30'>
                <div className='font-medium me-4'>Payments</div>
                <div className='flex items-center'>
                    <AiOutlineQuestionCircle />
                    <div className='ms-1 text-xs'>How it works</div>
                </div>
            </div>
            <div className='flex-1 flex  bg-black_95 items-center rounded-md px-2 '>
                <IconButton sx={{ p: '10px', fontSize: '20px' }} aria-label="search">
                    <FiSearch />
                </IconButton>
                <Input placeholder="Search features, tutorials, etc." className='w-full' disableUnderline="true"/>
            </div>
            <div className='flex-1 flex items-center justify-end'>
                <div className='bg-black_90 p-2 rounded-full me-2 text-black_30'><MdSms fontSize={"25px"}/></div>
                <div className=' rounded-full bg-black_90'><ArrowDropDownRoundedIcon sx={{fontSize:'41px', color:"#4d4d4d"}}/></div>
            </div>
        </div>
    )
}

export default Header;