import React from 'react'
import Profile from './profile/Profile.jsx';
import {NavItems} from './../../assets/data/navItemsData.jsx';
import NavItem from './navItem/NavItem.jsx';
import Credits from './credits/Credits.jsx';

const Drawer = () => {
    let active = 'Payments';

    return (
        <div className=' bg-drawer w-64 text-white p-4 flex flex-col justify-between'>
            <div>
                <Profile/>
                {
                    Object.keys(NavItems).map(
                        (key) => {return <NavItem icon={NavItems[key]} heading={key} bg={(active===key)}/>}
                    )
                }
                
            </div>
            <div>
            <Credits/>
            </div>
        </div>
    )
}

export default Drawer