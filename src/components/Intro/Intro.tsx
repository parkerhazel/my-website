import styles from './Intro.module.css';

const Intro = () => {
    return (
        <>
        <div id='intro' className={styles.Intro}>
            <h1>Introduction</h1>
            <p>
                My name is Parker Hazel, and I&apos;m 24 years old. I work as a Software Engineer.
            </p>
        </div>
        </>
    );
};

export default Intro;