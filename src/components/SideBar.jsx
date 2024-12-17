import { NavLink } from 'react-router-dom';
import { MdOutlineLiveHelp } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineDonutSmall } from "react-icons/md";
const sidebarItems = [
    { path: '/dashboard', name: 'Dashboard', icon: <MdOutlineDashboard /> },
    {
      path: '/customers',
      name: 'Customers',
      icon: <IoIosPeople />
    },
    { path: '/Help', name: 'Help', icon: <MdOutlineLiveHelp /> }
  ];

const SideBar = () => {
    
    return (
        <div className="bg-white text-primary-lighter w-[260px] min-h-screen flex flex-col justify-between">
        <div className=" p-4">
         <div className="flex gap-3">
         <MdOutlineDonutSmall /> <span className='text-black'>Dashboard</span>
         </div>
          <div className="mt-8">
            {sidebarItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={`ml-4 flex gap-2 items-center py-4 text-black`}
                style={({ isActive }) => ({
                  // return {
                  color: isActive && 'white',
                  background: isActive && 'blue',
                  display: 'flex',
                  gap: '24px',
                  padding: '10px',
                  borderRadius: '8px',
                  // };
                })}>
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    )
};
export default SideBar;