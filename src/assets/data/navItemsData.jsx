import { GrHomeRounded } from "react-icons/gr";
import { LuClipboardList } from "react-icons/lu";
import { IoGridOutline } from "react-icons/io5";
import { PiChartBarBold } from "react-icons/pi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { MdPayments } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdOutlineColorLens } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { CiLocationArrow1 } from "react-icons/ci";

export const NavItems = {
    "Home" : <GrHomeRounded/>,
    "Orders" : <LuClipboardList/>,
    "Products" : <IoGridOutline />,
    "Delivery" : <FiTruck />,
    "Marketing" : <HiOutlineSpeakerWave />,
    "Analytics" : <PiChartBarBold />,
    "Payments" : <MdPayments />,
    "Tools" : <CiLocationArrow1 />,
    "Discounts" : <CiDiscount1 />,
    "Audience" : <GoPeople />,
    "Appearance" : <MdOutlineColorLens />,
    "Plugins" : <AiOutlineThunderbolt />,
};
