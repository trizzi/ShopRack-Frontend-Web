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
            
            <div className="w-full">
                Dashboard area for {authUser && authUser.email}
            </div>
            
        </div>
    )
}

export default Dashboard
