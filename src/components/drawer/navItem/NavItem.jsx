import React from 'react'

const NavItem = ({ icon, heading, bg}) => {
  const style = (heading === "Discounts" || heading === "Tools" ||
    heading === "Plugins" || heading === "Appearance")
    ? 'w-[38px] text-2xl'
    : 'w-[38px] text-xl';
  return (
    <div className={`flex px-3 mb-2 py-2 items-center rounded-md hover:bg-drawer_active ${(bg)?'bg-drawer_active':''}`}>
      <div className={style}>{icon}</div>
      <div>{heading}</div>
    </div>
  )
}

export default NavItem;