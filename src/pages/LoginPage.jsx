import { Link } from 'react-router-dom';

import Login from '@components/Login';

const LoginPage = () => {
	return (
		<>
			<Login />
			<p>
				Need an account? <Link to="/signup">Sign Up</Link>
			</p>
		</>
	);
};

export default LoginPage;
