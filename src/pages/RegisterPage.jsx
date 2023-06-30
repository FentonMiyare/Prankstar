import { SignUp } from '@components/Signup';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
	return (
		<div className="">
			<SignUp />
			<p>
				Already have an account? <Link to="/login">Login</Link>
			</p>
		</div>
	);
};

export default RegisterPage;
