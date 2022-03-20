import TsParticles from 'react-tsparticles';
import { options } from '.';
import styles from './particles.module.css';

export function Particles(props: Props) {
    const { children } = props;

    return (
        <>
            <TsParticles options={options} />

            <div className={styles.children}>
                {children}
            </div>
        </>
    );
}

interface Props {
    children: React.ReactNode;
}
