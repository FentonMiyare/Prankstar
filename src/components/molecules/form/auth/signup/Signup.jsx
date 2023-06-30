// @ts-nocheck
/* eslint-disable react/prop-types */
import { forwardRef, useState, useRef } from 'react';

// @ts-ignore
import styles from './Signup.module.css';
import Input from '@components/atoms/input';
import Subtitle from '@components/atoms/subtitle';
import Button from '@components/atoms/button';

const SignupForm = forwardRef((props, ref) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const passRef = useRef();
	const emailRef = useRef();
	const fNameRef = useRef();
	const lNameRef = useRef();
	const buttonRef = useRef();

	// @ts-ignore
	const { title, handleSubmit } = props;

	return (
		<form
			className={styles.form}
			onSubmit={(event) =>
				handleSubmit(firstName, lastName, email, pass, event)
			}
			ref={ref}
		>
			<Subtitle>{title}</Subtitle>
			<div className={styles.formField}>
				<div className={styles.formFieldRow}>
					<Input
						// @ts-ignore
						label="First Name"
						ref={fNameRef}
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						placeholder="First Name"
					/>
				</div>
				<div className={styles.formFieldRow}>
					<Input
						// @ts-ignore
						label="Last Name"
						ref={lNameRef}
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						placeholder="Last Name"
					/>
				</div>
			</div>
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

SignupForm.displayName = 'SignupForm';

export default SignupForm;
