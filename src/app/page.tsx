import FadeInSection from "../components/FadeInSection/FadeInSection";

export default function Home() {
  return (
    <>
      <div
        id="intro"
        className="flex justify-center bg-primary p-48 text-5xl text-secondary"
      >
        <FadeInSection>
          <h1> Hello There</h1>
        </FadeInSection>
      </div>
    </>
  );
}
