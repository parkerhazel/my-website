import FadeInSection from "../FadeInSection/FadeInSection";

const Education = () => {
  return (
    <>
      <div id="education" className="justify-center pt-24">
        <FadeInSection>
          <div className="max-w-5xl items-center p-5 text-center">
            <div className="header-title-new">
              <span>/ education</span>
            </div>
            <div className="hero">
              <div className="hero-content items-start">
                <div className="py-6 text-justify text-2xl">
                  Computer Science B.S. @{" "}
                  <a
                    href="https://www.unc.edu"
                    className="font-extrabold text-textSecondary hover:underline"
                  >
                    Univestity of North Carolina at Chapel Hill
                  </a>
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
