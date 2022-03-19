import { ButtonGroup } from '../buttongroup';
import { FiInstagram, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import styles from './socialicons.module.css';

export function SocialIcons() {
    return (
        <ButtonGroup>
            <FiInstagram className={styles.icon} />
            <FiTwitter className={styles.icon} />
            <FiLinkedin className={styles.icon} />
            <FiGithub className={styles.icon} />
        </ButtonGroup>
    );
};

