import type { NextPage } from 'next'
import { Button } from '../components/button/button';
import { ButtonGroup } from '../components/buttongroup/buttongroup.component';
import { Particles } from '../components/particles';
import { SocialIcons } from '../components/socialicons/socialicons.component';
import { Typography } from '../components/typography';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <>
            <Particles />

            <section className={styles.hero}>
                <article className={styles.titlebar}>
                    <Typography additionalClassNames={styles.name} variant="h1">Thomas Juranek</Typography>

                    <SocialIcons />
                </article>

                <article className={styles.information}>
                    <Typography additionalClassNames={styles.greeting} variant="p">
                        HEY THERE, I’M THOMAS 👋
                    </Typography>

                    <Typography additionalClassNames={styles.description} variant="p">
                        Minnesota based 
                        
                        <Typography additionalClassNames={styles.highlight} variant="span">
                            {' web developer'}
                        </Typography>

                        . Passionate about efficiently

                        <Typography additionalClassNames={styles.highlight} variant="span">
                            {' building lovable products'}
                        </Typography>
                        
                        . Enjoys getting outdoors and to the gym.
                    </Typography>

                    <ButtonGroup additionalClassNames={styles.buttons}>
                        <Button label='View Projects' />
                        <Button label='Contact Me' />
                    </ButtonGroup>
                </article>
            </section>
        </>
    );
}

export default Home
