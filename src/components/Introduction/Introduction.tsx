import FadeInSection from "../FadeInSection/FadeInSection";

const Introduction = () => {
  return (
    <>
      <div id="intro" className="flex justify-center p-5 pt-48 text-center">
        <FadeInSection>
          <h1 className="pb-8 text-5xl">Hello There, I&apos;m Parker!</h1>
          <p className="mx-auto max-w-xl text-lg sm:text-2xl">
            I am a software engineer specializing in cloud-native applications
            and data integration, with a focus on leveraging AWS and
            cutting-edge technologies to drive impactful solutions.
          </p>
        </FadeInSection>
      </div>
    </>
  );
};

export default Introduction;
