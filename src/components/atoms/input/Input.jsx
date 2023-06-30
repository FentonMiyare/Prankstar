/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

// @ts-ignore
import styles from './Input.module.css';

const Input = forwardRef((props, ref) => {
	// @ts-ignore
	const { label, ...rest } = props;
	return (
		<label>
			{label}
			<input ref={ref} className={styles.input} {...rest} />
		</label>
	);
});

Input.displayName = 'Input';

export default Input;
