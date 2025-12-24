import Navbar from "./components/Navbar";
import ProjectShowcase from "./components/ProjectShowcase";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060606] text-[#EDEDED] font-clash selection:bg-[#D3E97A] selection:text-black">
      <Navbar />
      <ProjectShowcase />
      <Footer />
    </main>
  );
}
