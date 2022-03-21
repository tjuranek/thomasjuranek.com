import type { NextPage } from 'next'
import { Button } from '../components/button';
import { ButtonGroup } from '../components/buttongroup';
import { Particles } from '../components/particles';
import {Project} from '../components/project';
import { SocialIcons } from '../components/socialicons';
import { Typography } from '../components/typography';
import coinbasePic from '../images/coinbase.png';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <Particles>
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

            <section className={styles.projects} id="projects">
                <article>
                    <Typography additionalClassNames={styles.sectionHeader} variant="h2">
                        Projects
                    </Typography>

                    <Typography additionalClassNames={styles.sectionDescription} variant="p">
                        I’m always working on some project to keep improving as a developer. Below are a couple of my recent favorites.
                    </Typography>
                </article>

                <Project 
                    image={coinbasePic}
                    imageAlt='some alt text'
                    title='Luna'
                    paragraphOne='Luna is an in progress cryptocurrency trading bot that automates placing orders on an exchange.'
                    paragraphTwo='Think of it as a program that continually looks at price data, determines if a coin is worth buying or selling, and then places that order automatically.'
                    buttonLabel='Coming Soon'
                />

                <Project 
                    image={coinbasePic}
                    imageAlt='some alt text'
                    title='Luna'
                    paragraphOne='Luna is an in progress cryptocurrency trading bot that automates placing orders on an exchange.'
                    paragraphTwo='Think of it as a program that continually looks at price data, determines if a coin is worth buying or selling, and then places that order automatically.'
                    buttonLabel='Coming Soon'
                />
            </section>
        </Particles>
    );
}

export default Home
