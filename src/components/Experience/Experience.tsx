import FadeInSection from "../FadeInSection/FadeInSection";

const Experience = () => {
  return (
    <>
      <div id="experience" className="flex justify-center pt-24">
        <FadeInSection>
          <div className="max-w-5xl items-center p-5 text-center">
            <div className="after:bg-textPrimary mb-4 flex text-start text-5xl after:ml-5 after:mt-5 after:hidden after:h-[2px] after:w-80 after:sm:block">
              <span>/ experience</span>
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
