import styles from './button.module.css';

export function Button(props: Props) {
    const { additionalClassNames, label } = props;

    return (
        <button className={`${styles.button} ${additionalClassNames}`}>
            {label}
        </button>
    );
};

interface Props {
    additionalClassNames?: string;
    label: string;
}
