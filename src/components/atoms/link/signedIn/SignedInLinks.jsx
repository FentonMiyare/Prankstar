/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '@features/auth/authSlice';
// import useAuth from '@hooks/useAuth'

// @ts-ignore
import styles from './SignedInLinks.module.css';

const SignedInLinks = (props) => {
	const dispatch = useDispatch();
	return (
		<ul className={styles.ul}>
			<li>
				<NavLink to="/create">New Project</NavLink>
			</li>
			<li>
				<a onClick={() => dispatch(removeUser())}>Log Out</a>
			</li>
			<li>
				<NavLink to="/">{props.email}</NavLink>
			</li>
		</ul>
	);
};

export default SignedInLinks;
