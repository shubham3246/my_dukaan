import React from 'react'
import Profile from './profile/Profile.jsx';
import {NavItems} from './../../assets/data/navItemsData.jsx';
import NavItem from './navItem/NavItem.jsx';

const Drawer = () => {
    return (
        <div className=' h-full bg-drawer w-64 text-white p-4'>
            <Profile/>
            {
                Object.keys(NavItems).map(
                    (key) => <NavItem icon={NavItems[key]} heading={key} />
                )
            }
        </div>
    )
}

export default Drawer