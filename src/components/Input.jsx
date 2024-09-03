function Input({value, set}) {
    return ( 
        <input value={value} onChange={(e) => set(e.target.value)} type="number" className="w-full mt-[15px] border border-[#E7E7EE] p-3 rounded-[5px] roboto-medium text-[#26278D] text-[20px]" />
     );
}

export default Input;