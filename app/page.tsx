import Sidebar from "./components/Sidebar";
import Mainbody from "./components/Mainbody";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navbar/>
      <div className="maincontainer flex flex-col-reverse lg:flex-row flex-nowrap gap-8 justify-center w-[90vw] xl:w-[70vw] mx-auto">
      <Sidebar />
      <Mainbody />
      </div>
    </main>
  );
}
