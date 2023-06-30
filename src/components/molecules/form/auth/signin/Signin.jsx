// @ts-nocheck
/* eslint-disable react/prop-types */
import { forwardRef, useState, useRef } from 'react';

// @ts-ignore
import styles from './Signin.module.css';
import Input from '@components/atoms/input';
import Subtitle from '@components/atoms/subtitle';
import Button from '@components/atoms/button';

const SigninForm = forwardRef((props, ref) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const passRef = useRef(null);
	const emailRef = useRef(null);
	const buttonRef = useRef(null);

	// @ts-ignore
	const { title, handleSubmit } = props;

	return (
		<form
			className={styles.form}
			onSubmit={(event) => handleSubmit(email, pass, event)}
			ref={ref}
		>
			<Subtitle>{title}</Subtitle>
			<div className={styles.formField}>
				<Input
					// @ts-ignore
					label="Email"
					ref={emailRef}
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="email"
				/>
			</div>
			<div className={styles.formField}>
				<Input
					// @ts-ignore
					label="Password"
					ref={passRef}
					type="password"
					value={pass}
					onChange={(e) => setPass(e.target.value)}
					placeholder="password"
				/>
			</div>
			<Button ref={buttonRef}>{title}</Button>
		</form>
	);
});

SigninForm.displayName = 'SigninForm';

export default SigninForm;
