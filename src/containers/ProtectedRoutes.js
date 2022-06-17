import { React} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const username = sessionStorage.username;
    if(username){
        return true
    } else {
        return false
    }
}

export default function ProtectedRoutes() {
    const auth = useAuth();

    return auth ? <Outlet /> : <Navigate to="/login" />
}
