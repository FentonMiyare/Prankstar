import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { setUser } from '@features/auth/authSlice';
import SignupForm from './molecules/form/auth/signup/Signup';
// import Form from '@components/Form';

export const SignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRegister = (firstName, lastName, email, password, event) => {
		event.preventDefault();
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						id: user.uid,
						email: user.email,
						// token: user.accessToken,
					})
				);
				navigate('/');
			})
			.catch(console.error);
	};

	// @ts-ignore
	return <SignupForm title="Sign Up" handleSubmit={handleRegister} />;
};
