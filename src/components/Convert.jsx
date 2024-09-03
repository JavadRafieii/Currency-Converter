function Convert({ handleConvert }) {
    return ( 
        <button onClick={handleConvert} className="w-full mt-[15px] border border-[#E7E7EE] p-3 rounded-[5px] roboto-medium bg-[#26278D] text-white text-[20px] transition-all hover:bg-green-600">Convert</button>
     );
}

export default Convert;