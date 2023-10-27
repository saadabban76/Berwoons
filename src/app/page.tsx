import Contactus from "@/landing-layouts/Contactus";
import Footer from "@/landing-layouts/Footer";
import { Header } from "@/landing-layouts/Header";
import Navbar from "@/landing-layouts/Navbar";
import PricingOptions from "@/components/PricingOptions";
import Whatwedo from "@/landing-layouts/Whatwedo";
import Whoweare from "@/landing-layouts/Whoweare";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen-xl flex-col pt-7 px-4">
      {/* <Navbar /> */}
      <Header />
      <Whatwedo />
      <Whoweare />
      <PricingOptions />
      <Contactus />
      <Footer />
    </main>
  );
}
