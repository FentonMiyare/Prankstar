/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

// @ts-ignore
import styles from './Title.module.css';

// @ts-ignore
const Title = forwardRef(({ children, ...rest }, ref) => {
	return (
		<h1 ref={ref} className={styles.h1} {...rest}>
			{children}
		</h1>
	);
});

Title.displayName = 'Title';

export default Title;
