import styles from './button.module.css';

export function Button(props: Props) {
    const { additionalClassNames, label, link, openNewWindow } = props;

    const target = openNewWindow ? '_blank' : '_self';
    const classNames = `${styles.button} ${additionalClassNames}`;

    return (
        <a href={link} target={target} className={classNames}>
            {label}
        </a>
    );
};

interface Props {
    additionalClassNames?: string;
    label: string;
    link?: string;
    openNewWindow?: boolean;
}
