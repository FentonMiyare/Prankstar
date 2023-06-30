/* eslint-disable react/prop-types */

// @ts-ignore
import styles from './Subtitle.module.css';

const Subtitle = (props) => {
	const { children } = props;
	return <h2 className={styles.h2}>{children}</h2>;
};

Subtitle.displayName = 'Subtitle';

export default Subtitle;
