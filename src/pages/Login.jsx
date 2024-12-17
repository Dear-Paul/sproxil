import { useState } from "react"
import Input from "../components/Input"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = () => {
    navigate('/customers')
    }
    return (
        <div className="m-auto max-w-[500px] mt-2 min-h-[500px] bg-gray-400 justify-center items-center flex flex-col gap-4">
            <Input placeholder="Enter username" name={'username'} value={username} onChange={(e) => setUsername(e.target.value)}/>
            <Input placeholder="Enter password" name={'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={handleSubmit} className="bg-blue text-white">Submit</button>
        </div>
    )
};
export default Login;