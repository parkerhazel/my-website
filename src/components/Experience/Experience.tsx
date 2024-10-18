import FadeInSection from "../FadeInSection/FadeInSection";
import JobList from "./JobList";

const Experience = () => {
  return (
    <>
      <div id="experience" className="flex justify-center pt-24">
        <FadeInSection>
          <div className="w-full max-w-5xl items-center p-5 text-center">
            <div className="header-title">
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

{
  /* <div
  id="experience"
  className="flex h-[40vh] flex-col items-center justify-center"
>
  <FadeInSection>
    <h1>Experience</h1>
    <p>Here is my experience.</p>
  </FadeInSection>
</div>; */
}
