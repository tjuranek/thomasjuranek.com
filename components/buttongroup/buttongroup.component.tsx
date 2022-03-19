import styles from './buttongroup.module.css';

export function ButtonGroup(props: Props) {
    const { children } = props;

    return (
        <div className={styles.buttonGroup}>
            {children}
        </div>   
    );
}

interface Props {
    children: React.ReactNode;
}
