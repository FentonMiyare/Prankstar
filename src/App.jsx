import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';
import Layout from '@components/Layout';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<RegisterPage />} />
				{/* <Route path="/*" element={ErrorPage} /> */}
				{/* Catch all - replace with 404 component if you want */}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
		</Routes>
	);
};

export default App;

/**
 # "*.{js, jsx}": "eslint --cache --fix"
# "*.{js, css, md, html, json}": "prettier --write"
# "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
 */
