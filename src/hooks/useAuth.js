import { useSelector } from 'react-redux';

const useAuth = () => {
	const { id, email } = useSelector((state) => {
		// @ts-ignore
		return state.auth;
	});

	return {
		isAuth: !!email,
		id,
		email,
	};
};

export default useAuth;
