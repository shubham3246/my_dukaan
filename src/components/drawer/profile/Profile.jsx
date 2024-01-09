import React from 'react';
import profileImage from './../../../assets/images/profile.png';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const Profile = () => {
  return (
    <div className='w-full mb-7'>
        <div className='flex items-center'>
            <img src={profileImage} className='h-[42px] rounded-md' alt="profile" />
            <div className='flex justify-between w-full items-center ms-3'>
                <div>
                    <div className='text-start font-semibold'>Nishyan</div>
                    <div className='text-sm underline underline-offset-2 text-white/80'>Visit store</div>
                </div>
                <KeyboardArrowDownRoundedIcon sx={{fontSize: 35}}/>
            </div>
        </div>
    </div>
  )
}

export default Profile