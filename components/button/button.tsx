import styles from './button.module.css';

export function Button(props: Props) {
    const { label } = props;

    return (
        <button className={styles.button}>
            {label}
        </button>
    );
};

interface Props {
    label: string;
}
