import type { NextPage } from 'next'
import { Button } from '../components/button';
import { ButtonGroup } from '../components/buttongroup';
import { Particles } from '../components/particles';
import { Project } from '../components/project';
import { SocialIcons } from '../components/socialicons';
import { Typography } from '../components/typography';
import lunaImg from '../images/luna.png';
import raffertysImg from '../images/raffertys.png';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <Particles>
            <section className={styles.hero} id='hero'>
                <article className={styles.titlebar}>
                    <Typography additionalClassNames={styles.titlebarName} variant="h1">Thomas Juranek</Typography>

                    <SocialIcons />
                </article>

                <article className={styles.heroInformation}>
                    <Typography additionalClassNames={styles.heroInformationGreeting} variant="p">
                        HEY THERE, I’M THOMAS 👋
                    </Typography>

                    <Typography additionalClassNames={styles.heroInformationDescription} variant="p">
                        Minnesota based 
                        
                        <Typography additionalClassNames={styles.heroInformationDescriptionHighlight} variant="span">
                            {' web developer'}
                        </Typography>

                        . Passionate about efficiently

                        <Typography additionalClassNames={styles.heroInformationDescriptionHighlight} variant="span">
                            {' building lovable products'}
                        </Typography>
                        
                        . Enjoys getting outdoors and to the gym.
                    </Typography>

                    <ButtonGroup additionalClassNames={styles.heroInformationButtons}>
                        <Button label='View Projects' link='#projects'/>
                        <Button label='Contact Me' link='#contact' />
                    </ButtonGroup>
                </article>
            </section>

            <section className={`${styles.projects} ${styles.container}`} id="projects">
                <article>
                    <Typography additionalClassNames={styles.sectionHeader} variant="h2">
                        Projects
                    </Typography>

                    <Typography additionalClassNames={styles.sectionDescription} variant="p">
                        I’m always working on some project to keep improving as a developer. Below are a couple of my recent favorites.
                    </Typography>
                </article>

                <div className={styles.projectList}>
                    <Project 
                        image={lunaImg}
                        imageAlt='A logo for the Luna project'
                        title='Luna'
                        paragraphOne="Interested in crypto but don't have enough time to continually monitor prices and place orders? Luna is an algo trading bot built to trade on your terms without the constant babysitting."
                        paragraphTwo="It started off as an intriguing side project, but now I see a potential SaaS opportunity. Luna is closed source for now but built on Node.js and React. I'm currently working through an algorithm backtesting feature but I plan to either open source it or create an alpha in Q2 of this year."
                    />

                    <Project 
                        image={raffertysImg}
                        imageAlt='A logo for the Raffertys project'
                        title='Raffertys'
                        paragraphOne="Raffertys is a local pizza chain that hired me to design and build them a new website."
                        paragraphTwo="After designing mockups in Figma, I built the site with Gatsby and React as a statically generated site. It uses a headless CMS to manage all of the page content and is hosted through Netlify - taking advantage of their serverless function and form submission features for accepting job applications."
                        buttonLabel='View Site'
                        buttonLink='https://raffertyspizza.com/'
                    />
                </div>
            </section>

            <section className={styles.contact} id='contact'>
                <article className={styles.container}>
                    <Typography additionalClassNames={styles.sectionHeader} variant="h2">
                        Contact Me
                    </Typography>

                    <Typography additionalClassNames={styles.sectionDescription} variant="p">
                        If you’re looking to hire, need a project built, or just want to connect please send me an email or reach out through social media!
                    </Typography>

                    <div className={styles.contactInformation}>
                        <Typography additionalClassNames={styles.contactInformationEmail} variant='p'>
                            ✉️ hello@thomasjuranek.com
                        </Typography>

                        <SocialIcons />
                    </div>
                </article>
            </section>
        </Particles>
    );
}

export default Home
