/* eslint-disable react/prop-types */
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const DashboardLayout = ({children}) => {
    return (
        <section className="flex bg-blue-50">
            <SideBar />
            <section className="flex flex-col gap-7 w-[97%] border border-green-500 p-9">
                <div className="flex items-center mt-4 h-12 px-2 rounded-lg">
                    <TopBar />
                </div>
                <div className="w-[97%] border border-gray-100">{children}</div>
            </section>
        </section>
    )
};
export default DashboardLayout;