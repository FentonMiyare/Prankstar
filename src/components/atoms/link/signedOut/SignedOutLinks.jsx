// @ts-ignore
import styles from './SignedOutLinks.module.css';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
	return (
		<ul className={styles.ul}>
			<li>
				<NavLink to="/signup">Signup</NavLink>
			</li>
			<li>
				<NavLink to="/login">Login</NavLink>
			</li>
		</ul>
	);
};

export default SignedOutLinks;
