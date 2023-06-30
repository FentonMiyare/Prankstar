/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

// @ts-ignore
import styles from './Button.module.css';

// @ts-ignore
const Button = forwardRef(({ children }, ref) => {
	return (
		<button type="submit" ref={ref} className={styles.button}>
			{children}
		</button>
	);
});

Button.displayName = 'Button';

export default Button;

// May have many states, such as: disabled, hover, different sizes, etc.
