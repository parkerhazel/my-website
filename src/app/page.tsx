import FadeInSection from "../components/FadeInSection/FadeInSection";

export default function Home() {
  return (
    <>
      <div
        id="intro"
        className="flex flex-col items-center justify-center bg-primary p-48 text-secondary"
      >
        <FadeInSection>
          <h1> Hello There</h1>
        </FadeInSection>
      </div>
    </>
  );
}
