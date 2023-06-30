import { useLocation, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '@features/auth/authSlice';
import useAuth from '@hooks/useAuth';

const HomePage = () => {
	const dispatch = useDispatch();
	const { isAuth, email } = useAuth();

	console.log('isAuth:', isAuth);

	const location = useLocation();

	if (!isAuth)
		// return redirect('/login');
		return <Navigate to="/login" state={{ from: location }} replace />;

	return (
		<div>
			<h1>Home</h1>
			<button onClick={() => dispatch(removeUser())}>Logout {email}</button>
		</div>
	);
};

export default HomePage;
