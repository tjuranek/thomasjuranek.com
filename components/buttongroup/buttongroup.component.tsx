import styles from './buttongroup.module.css';

export function ButtonGroup(props: Props) {
    const { additionalClassNames, children } = props;

    return (
        <div className={`${styles.buttonGroup} ${additionalClassNames}`}>
            {children}
        </div>   
    );
}

interface Props {
    additionalClassNames?: string; 
    children: React.ReactNode;
}
