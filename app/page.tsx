import { Banner } from "./_components/banner";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { Projects } from "./_components/projects/projects";

export default function Home() {
  return (
    <>
      <main>
        <header className="bg-headerBackgroundColor py-10">
          <Navbar />
          <Banner />
        </header>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
