import { Link } from 'react-router-dom';
import SignedInLinks from '@components/atoms/link/signedIn';
import SignedOutLinks from '@components/atoms/link/signedOut';
// import { useDispatch, useSelector } from 'react-redux'
import useAuth from '@hooks/useAuth';
// @ts-ignore
import styles from './Navbar.module.css';

const Navbar = () => {
	// const dispatch = useDispatch();
	const { isAuth, email } = useAuth();
	// const { auth, profile } = props;
	console.log(isAuth);

	const links = isAuth ? <SignedInLinks email={email} /> : <SignedOutLinks />;

	return (
		<nav className={styles.nav}>
			<div className="">
				<Link to="/">Prankstar</Link>
				{links}
			</div>
		</nav>
	);
};

// const mapStateToProps = (state) => {
//     // console.log(state)
//     return {
//         auth: state.firebase.auth,
//         profile: state.firebase.profile
//     }
// }

export default Navbar;
