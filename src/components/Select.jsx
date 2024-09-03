function Select({ value, set, text}) {
    return (
        <div>
            <span className="roboto-regular text-[#989898] text-[15px] block mb-[15px] text-center">{text}</span>
            <div className="flex items-center justify-between">
                <figure className="w-[45px] h-[45px]">
                    <img src={`./images/${value}.svg`} alt="..." className="w-full" />
                </figure>
                <select value={value} onChange={(e) => set(e.target.value)} className="w-[225px] border border-[#E7E7EE] p-3 rounded-[5px] roboto-medium text-[#26278D] text-[20px]">
                    <option value="USD">United States (USD)</option>
                    <option value="IRR">Iran (IRR)</option>
                    <option value="AED">United Arab Emirates (AED)</option>
                    <option value="TRY">Turkey (TRY)</option>
                </select>
            </div>
        </div>
    );
}

export default Select;