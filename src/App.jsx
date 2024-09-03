import CurrencyConverter from "./components/CurrencyConverter";
import "./App.css";

function App() {
  return (
    <section className="container py-20">
      <div>
        <h1 className="roboto-bold text-[#1F2261] text-[25px] text-center mb-1">Currency Converter</h1>
        <p className="roboto-regular text-[#808080] text-[16px] text-center">You can convert your money <br/> with the app below.</p>
        <div className="flex justify-center">
          <div className="w-[320px] bg-white rounded-[20px] mt-[40px] p-[20px]">
            <CurrencyConverter />
          </div>
        </div>
      </div>
    </section>

  );
}

export default App;