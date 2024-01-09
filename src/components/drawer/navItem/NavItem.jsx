import React from 'react'

const NavItem = ({ icon, heading }) => {
  const style = (heading === "Discounts" || heading === "Tools" ||
    heading === "Plugins" || heading === "Appearance")
    ? 'w-[38px] text-2xl'
    : 'w-[38px] text-xl';
  return (
    <div className='flex px-3 mb-4 items-center'>
      <div className={style}>{icon}</div>
      <div>{heading}</div>
    </div>
  )
}

export default NavItem;