/* eslint-disable @next/next/no-img-element */
import FadeInSection from "../FadeInSection/FadeInSection";

const tech_stack = [
  "Python",
  "AWS",
  "Next.js",
  "Javascript",
  "Salesforce",
  "Apex",
];

const About = () => {
  return (
    <>
      <div id="about" className="flex justify-center pt-24">
        <FadeInSection>
          <div className="max-w-5xl items-center p-5 text-center">
            <div className="mb-4 text-start text-5xl">
              <h1>/ about me</h1>
            </div>
            <div className="hero">
              <div className="hero-content flex-col items-start md:flex-row-reverse">
                <img
                  src="/assets/wizard.jpg"
                  className="ml-16 mt-6 hidden max-w-xs rounded-lg shadow-2xl md:flex"
                  alt="wizzzzard"
                />
                <div className="py-6 text-justify text-2xl">
                  {/* <h1 className="text-5xl font-bold">Box Office News!</h1> */}
                  <p>
                    I am currently a <b>Software Engineer</b> at{" "}
                    <a
                      href="https://www.bridgeig.com"
                      className="text-accent font-extrabold hover:underline"
                    >
                      Bridge Investment Group
                    </a>
                    , working on the Technology Solutions team. I specialize in
                    integrating platforms like AWS and Salesforce and developing
                    web applications.
                  </p>
                  <p className="mt-6">
                    Here are some technologies I have been working with:
                  </p>
                  <ul className="grid list-none grid-cols-2 gap-x-[10px] gap-y-[20px] pt-[20px]">
                    {tech_stack.map((tech_item, i) => (
                      <FadeInSection key={i} delay={`${i + 1}00ms`}>
                        <li
                          key={i}
                          className="relative pl-[20px] text-[18px] text-[var(--slate)] before:absolute before:left-0 before:text-[var(--green-bright)] before:content-['▹']"
                        >
                          {tech_item}
                        </li>
                      </FadeInSection>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

export default About;
