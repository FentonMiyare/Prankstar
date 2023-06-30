import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// actions:
import { setUser } from '@features/auth/authSlice';
// firebase
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import SigninForm from '@components/molecules/form/auth/signin';

// import Form from '@components/Form';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (email, password, event) => {
		event.preventDefault();
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
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
	return <SigninForm title="login" handleSubmit={handleLogin} />;
};

export default Login;
