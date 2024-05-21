import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div id="intro" className={styles.Intro}>
          <div className={styles.IntroHeader}>
            <h1>Introduction</h1>
          </div>
          <div className={styles.paragraph}>
            <p>
              Hello! I&apos;m Parker Hazel, a software engineer with a knack for
              solving complex problems. I hold a Computer Science degree from
              the University of North Carolina at Chapel Hill and currently work
              at Bridge Investment Group. There, I specialize in integrating
              platforms like AWS and Salesforce and developing web applications
              with Svelte. My past experience at Gorelick Brothers Capital
              involved leading Agile projects and optimizing data communication.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
