import Contactus from "@/landing-layouts/Contactus";
import Footer from "@/landing-layouts/Footer";
import { Header } from "@/landing-layouts/Header";
import Navbar from "@/landing-layouts/Navbar";
import PricingOptions from "@/components/PricingOptions";
import Whatwedo from "@/landing-layouts/Whatwedo";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen-xl flex-col pt-7">
      <Navbar />
      <Header />
      <Whatwedo />
      <PricingOptions />
      <Contactus />
      <Footer />
    </main>
  );
}
