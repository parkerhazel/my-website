import FadeInSection from "../FadeInSection/FadeInSection";

const Education = () => {
  return (
    <>
      <div id="education" className="flex justify-center pt-24">
        <FadeInSection>
          <div className="max-w-5xl items-center p-5 text-center">
            <div className="mb-4 flex text-start text-5xl after:ml-5 after:mt-5 after:hidden after:h-[2px] after:w-80 after:bg-textPrimary after:sm:block">
              <span>/ education</span>
            </div>
            <div className="hero">
              <div className="hero-content items-start">
                <div className="py-6 text-justify text-2xl">
                  Computer Science B.S. @{" "}
                  <b className="font-extrabold text-textSecondary">
                    Univestity of North Carolina at Chapel Hill
                  </b>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

export default Education;
