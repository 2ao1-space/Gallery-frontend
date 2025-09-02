import Layout from "../../components/Layout";
import { Menu } from "../../components/Menu";
// import { LuWand } from "react-icons/lu";

export default function Home() {
  return (
    <Layout>
      {/* Hero section */}
      <section className="h-screen relative">
        <Menu />

        <div className="grid justify-center justify-items-center h-screen content-center">
          <div className="relative">
            <span className="text-7xl font-Losta_Masta text-main absolute top-0 -left-10">
              Gal
            </span>
            <img
              src="../../public/Images/monaliza.png"
              alt="Ao Gallery"
              className="mt-8"
            />
            <span className="text-7xl font-Losta_Masta text-main absolute -bottom-8 -right-10">
              lery
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
