import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const accessToken = useSelector((state) => state.auth.accessToken);

    useEffect(() => {
        if (accessToken) {
            setLoading(false);
        } else {
            router.push('/login');
        }
    }, [router, accessToken]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
