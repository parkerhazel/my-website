import FadeInSection from "../FadeInSection/FadeInSection";
import JobList from "./JobList";

const Experience = () => {
  return (
    <>
      <div id="experience" className="justify-center pt-24">
        <FadeInSection>
          <div className="w-full max-w-5xl items-center p-5 text-center">
            <div className="header-title-new">
              <span>/ experience</span>
            </div>
            <JobList />
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

export default Experience;
