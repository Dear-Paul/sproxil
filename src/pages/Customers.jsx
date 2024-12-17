import DashboardLayout from "../components/DashboardLayout";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import profileIcon1 from '../icons/profile-2user.png';
import monitorIcon from '../icons/monitor.png';
import profileIcon3 from '../icons/profile-tick.png';
import Input from "../components/Input";
import CustomTable from "../components/CustomTable";
import { data } from "../utils";


const Customers = () => {
    const dummyData = [
        {userCount: 5423, iconMain: profileIcon1,  id: 1, title: 'Total customers', percentage: 15},
        {userCount: 1189, iconMain: profileIcon3,  id: 2,  title: 'Members', percentage: 1},
        {userCount: 189, iconMain: monitorIcon,  id: 3, title: 'Active now'}
    ]
    const columns = [
        {title: 'ID', accessor: 'id'},
        {title: 'email', accessor: 'email'},
        {title: 'Name', accessor: 'name'},
        {title: 'Website', accessor: 'website'},
        {title: 'Status', accessor: 'status'},
    ]
    return (
        <DashboardLayout>
            <section className="flex flex-col w-full gap-8 text-black font-extrabold">
                    <section className=" flex justify-between border bg-white rounded-lg py-4 px-20">
                        {dummyData.map((item) => (
                            <div className="flex items-center justify-between" key={item.id}>
                                <img src={item.iconMain} className="rounded-full bg-green-100 p-4 mr-2"/>
                                <div className="flex flex-col">
                                    <h5>{item.title}</h5>
                                    <h3>{item.userCount}</h3>
                                    <h6></h6>
                                    {item.percentage &&  <div className={`flex items-center gap-2 ${item.percentage < 10 ? 'text-red': 'text-green'}`}>
                                        {item.percentage < 10 ?  <FaArrowDown /> :<FaArrowUp /> } <h6>{item.percentage}%</h6><span className="text-slate-400">This month</span>
                                    </div>}
                                    </div>
                            </div>
                        ))}
                    </section>
                    <section className="flex flex-col justify-between border bg-white rounded-lg py-4 px-20">
                        <div  className="flex w-full  items-center justify-between">
                            <div className="flex-col">
                                <h3>All Customers</h3>
                                <h6 className="text-xs text-green-500">Active members</h6>    
                            </div>
                            <div className="flex gap-2 items-center">
                                <Input placeholder="Search" bg={`bg-gray-50`}/>
                                <div className="flex text-xs min-w-24 p-2 bg-gray-50 rounded-lg">
                                <h5>Sort by:</h5><span>Newest</span>
                                </div>    
                            </div>
                        </div>
                        <CustomTable columns={columns} data={data}/>
                    </section>
            </section>
        </DashboardLayout>
      
    )
}
export default Customers;