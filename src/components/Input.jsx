/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";
const Input = ({placeholder='', bg, onChange, name, value}) => {
   return (
    <div className="flex justify-between min-w-14 bg-white rounded-lg p-3">
        <CiSearch className={`w-6 h-6 mr-2 text-gray-400 ${bg ? bg: 'bg-white'}`}/>
        <input placeholder={placeholder} className="bg-white text-black" onChange={onChange} name={name} value={value}/>
    </div>
   ) 
}
export default Input;