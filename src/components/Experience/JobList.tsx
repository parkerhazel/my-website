import FadeInSection from "../FadeInSection/FadeInSection";

const experienceItems: {
  [key: string]: {
    occupations: { title: string; duration: string; description: string[] }[];
  };
} = {
  "Bridge Investment Group": {
    occupations: [
      {
        title: "Software Engineer II",
        duration: "January 2024 - Present",
        description: [],
      },
      {
        title: "Software Engineer",
        duration: "July 2022 - January 2024",
        description: [],
      },
    ],
  },
  "Gorelick Brothers Capital": {
    occupations: [
      {
        title: "Software Engineer",
        duration: "August 2020 - July 2022",
        description: [],
      },
      {
        title: "Software Engineer Intern",
        duration: "May 2020 - August 2020",
        description: [],
      },
    ],
  },
  "Leader Creek Fisheries": {
    occupations: [
      {
        title: "Salmon Processor",
        duration: "June 2019 - August 2019",
        description: [],
      },
    ],
  },
};

const JobList: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col items-start">
        {Object.keys(experienceItems).map((company, index) => (
          <div key={index} className="collapse collapse-arrow mb-4 w-full">
            <input
              type="radio"
              name="my-accordion-2"
              defaultChecked={index === 0}
            />
            <div className="collapse-title text-2xl font-extrabold text-textSecondary">
              {company}
            </div>
            <div className="collapse-content">
              {experienceItems[company].occupations.map((occupation, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-2xl font-extrabold text-textTertiary">
                    {occupation.title}
                  </h3>
                  <p className="text-sm text-gray-500">{occupation.duration}</p>
                  <ul className="pl-5">
                    {occupation.description.map((desc, descIndex) => (
                      <FadeInSection
                        key={descIndex}
                        delay={`${descIndex + 1}00ms`}
                      >
                        <li className="text-xl">{desc}</li>
                      </FadeInSection>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
