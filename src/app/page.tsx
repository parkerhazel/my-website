import Introduction from "@/components/Introduction/Introduction";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-5xl flex-col">
        <Introduction />
        <About />
        <Experience />
        <Education />
      </div>
    </>
  );
}
