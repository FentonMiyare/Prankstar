import Welcome from '@components/welcome/Welcome';
import './App.css';

function App() {
	return (
		<div>
			<h1 className="text-primary text-3xl font-bold underline">
				Hello world! I am using React
			</h1>
			<Welcome />
		</div>
	);
}

export default App;

/**
 # "*.{js, jsx}": "eslint --cache --fix"
# "*.{js, css, md, html, json}": "prettier --write"
# "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
 */
