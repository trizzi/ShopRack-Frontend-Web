import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthUserContext';

function Dashboard() {

    const {authUser} = useAuth();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar toggle={toggle} />
            
            <div className="w-full h-screen flex justify-center items-center text-3xl bg-indigo-400 font-bold">
                Dashboard area for Email:
                <span className="text-white"> &nbsp;&nbsp;{authUser && authUser.email} </span> 
            </div>
            
        </div>
    )
}

export default Dashboard
