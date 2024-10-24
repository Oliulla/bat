import { useSelector } from 'react-redux';
const useAuth = () => {
    const { user, accessToken } = useSelector((state) => state.auth);
    return !!user && !!accessToken;
};

export default useAuth;
