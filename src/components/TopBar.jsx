/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { MdOutlineWavingHand } from "react-icons/md";
import Input from "./Input";

const TopBar = ({name='Evano'}) => {
    return (
        <section className="flex w-full justify-between items-center">
            <div className="flex justify-between text-black">
                <span className="text-base font-extrabold mr-3">Hello {name} </span> <MdOutlineWavingHand />,
            </div>
            <div>   
            <Input placeholder="Search"/>
            </div>
        </section>
    )
};
export default TopBar;