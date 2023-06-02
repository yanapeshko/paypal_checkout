import Navlinks from "./components/NavLinks";
import HeroTextContent from "./components/HeroTextContent";
import LeftFooter from "./components/LeftFooter";
import NavIcons from "./components/NavIcons";
import ImageContainer from "./components/ImageContainer";
import PageCount from "./components/PageCount";
import RightFooter from "./components/RightFooter";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalPayment from "./components/PayPalPayment";

function App() {
  const initialOptions = {
    "client-id":
      "AVLLwBu_Q1jM6wnqjc8-M-vz09bI6EN78Ne9F6J7HjEZIO8rtUwSmz3pkdo1-MmpjBwMrSV8DX0hHlKX",
    currency: "USD",
    intent: "capture",
    // "data-client-token": "abc123xyz==",
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="w-screen h-screen font-alata flex">
        <div className="h-full flex-1 pl-40 pr-24 pb-8 flex flex-col justify-between">
          <Navlinks />
          <HeroTextContent />
          <PayPalPayment />
          <LeftFooter />
        </div>
        <div className="h-full flex-1 bg-[#FFF0C8] pr-40 pb-8 flex flex-col justify-between relative">
          <NavIcons />
          <ImageContainer />
          <PageCount />
          <RightFooter />
        </div>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
