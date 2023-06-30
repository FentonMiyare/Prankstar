import { useState, useRef } from 'react';
import Input from '@components/atoms/input';

// eslint-disable-next-line react/prop-types
const Form = ({ title, handleSubmit }) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const passRef = useRef(null);
	const emailRef = useRef(null);

	return (
		<form onSubmit={(event) => handleSubmit(email, pass, event)}>
			<fieldset>
				<legend>{title}</legend>
				<Input
					// @ts-ignore
					label="Email"
					ref={emailRef}
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="email"
				/>
			</fieldset>
			<fieldset>
				<Input
					// @ts-ignore
					label="Password"
					ref={passRef}
					type="password"
					value={pass}
					onChange={(e) => setPass(e.target.value)}
					placeholder="password"
				/>
			</fieldset>
			<button type="submit">{title}</button>
		</form>
	);
};

export default Form;
