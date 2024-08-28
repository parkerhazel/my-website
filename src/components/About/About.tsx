const About = () => {
  return (
    <>
      <div id="about" className="flex items-center justify-center pt-10">
        <div className="m-5 flex max-w-3xl flex-col items-center justify-center rounded-lg border border-gray-300 p-5 text-center font-sans leading-relaxed shadow-md">
          <div className="mb-4">
            <h1>About Me</h1>
          </div>
          <div className="mb-4">
            <p>
              Hello! I&apos;m Parker Hazel, a software engineer with a knack for
              solving complex problems. I hold a Computer Science degree from
              the University of North Carolina at Chapel Hill and currently work
              at Bridge Investment Group. There, I specialize in integrating
              platforms like AWS and Salesforce and developing web applications.
              My past experience at Gorelick Brothers Capital involved leading
              Agile projects and optimizing data communication.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
