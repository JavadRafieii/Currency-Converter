import Change from "../../public/images/change.svg";

function ChangeButton({ handleChange }) {
    return (
        <div className="my-[15px] flex justify-center relative before:absolute before:content-[''] before:w-full before:h-[1px] before:bg-[#E7E7EE] before:left-0 before:top-[50%] before:z-[1]">
            <button onClick={handleChange} className="w-[44px] h-[44px] bg-[#26278D] rounded-full p-[12px] relative z-[1] transition-all hover:rotate-[180deg]">
                <img src={Change} alt="..." className="w-full h-full" />
            </button>
        </div>
    );
}

export default ChangeButton;