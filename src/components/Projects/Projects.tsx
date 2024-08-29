import FadeInSection from "../FadeInSection/FadeInSection";

const Projects = () => {
  return (
    <>
      <div id="projects" className="flex justify-center pt-24">
        <FadeInSection>
          <div className="max-w-5xl items-center p-5 text-center">
            <div className="mb-4 flex text-start text-5xl after:ml-5 after:mt-5 after:hidden after:h-[2px] after:w-80 after:bg-secondary after:sm:block">
              <span>/ projects</span>
            </div>
            <div className="hero">
              <div className="hero-content flex-col items-start md:flex-row-reverse"></div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

export default Projects;
