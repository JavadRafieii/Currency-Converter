import { useState } from "react";
import Select from "./Select";
import ChangeButton from "./ChangeButton";
import Input from "./Input";
import Convert from "./Convert";

function CurrencyConverter() {

    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState(0);
    const [fromCountry, setFromCountry] = useState("USD");
    const [toCountry, setToCountry] = useState("IRR");

    const conversionRates = {
        USD: 1,
        IRR: 598900,
    };

    const handleConvert = () => {
        const fromRate = conversionRates[fromCountry];
        const toRate = conversionRates[toCountry];

        const convertedAmount = (amount * toRate) / fromRate;
        setResult(convertedAmount);
    };

    const handleChange = () => {
        setFromCountry(toCountry);
        setToCountry(fromCountry);
        setResult(0);
        setAmount(0);
    };

    return (
        <div>
            <Select value={fromCountry} set={setFromCountry} text={"From"} />
            <ChangeButton handleChange={handleChange} />
            <Select value={toCountry} set={setToCountry} text={"To"} />
            <Input value={amount} set={setAmount} />
            <Convert handleConvert={handleConvert}/>
            <p className="roboto-regular text-[#A1A1A1] text-[16px] mt-[30px]">Indicative Exchange Rate</p>
            <p className="roboto-medium text-[#000000] text-[18px] mt-[13px]">
                Result: {result.toFixed(2)} {toCountry}
            </p>
        </div>
    );
}

export default CurrencyConverter;