import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navbar from '@components/molecules/navbar ';

const Layout = () => {
	return (
		<>
			<Header />
			<Navbar />
			<main className="App">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
