import { ButtonGroup } from '../buttongroup';
import { FiInstagram, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import styles from './socialicons.module.css';

export function SocialIcons() {
    return (
        <ButtonGroup>
            <a href="https://www.instagram.com/tjuranek/" target="_blank" rel="noreferrer">
                <FiInstagram className={`${styles.icon} ${styles.instagram}`} />
            </a>

            <a href="https://twitter.com/thomas_juranek" target="_blank" rel="noreferrer">
                <FiTwitter className={`${styles.icon} ${styles.twitter}`} />
            </a>

            <a href="https://www.linkedin.com/in/thomasjuranek/" target="_blank" rel="noreferrer">
                <FiLinkedin className={`${styles.icon} ${styles.linkedin}`} />
            </a>

            <a href="https://github.com/tjuranek" target="_blank" rel="noreferrer">
                <FiGithub className={`${styles.icon} ${styles.github}`} />
            </a>
        </ButtonGroup>
    );
};

