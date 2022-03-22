import Image from 'next/image';
import { Button } from '../button';
import { Typography } from '../typography';
import styles from './project.module.css';

export function Project(props: Props) {
    const { image, imageAlt, title, paragraphOne, paragraphTwo, buttonLabel, buttonLink } = props;

    return (
        <article>
            <div className={styles.project}>
                <Image alt={imageAlt} placeholder='blur' priority={true} layout='responsive' src={image} />

                <div className={styles.informationContainer}>
                    <div>
                        <Typography
                            additionalClassNames={styles.name}
                            variant='h3'
                        >
                            {title}
                        </Typography>

                        <Typography
                            additionalClassNames={styles.description}
                            variant='p'
                        >
                            {paragraphOne}
                        </Typography>

                        <Typography
                            additionalClassNames={styles.description}
                            variant='p'
                        >
                            {paragraphTwo}
                        </Typography>

                        {buttonLabel && buttonLink &&  (
                            <Button 
                                additionalClassNames={styles.button}
                                label={buttonLabel}
                                link={buttonLink}
                                openNewWindow={true}
                            />
                        )}
                    </div>
                </div>
            </div>
                            
            <hr className={styles.divider} />
        </article>
    );
}

interface Props {
    image: any;
    imageAlt: string;
    title: string;
    paragraphOne: string;
    paragraphTwo?: string;
    buttonLabel?: string;
    buttonLink?: string;
}
