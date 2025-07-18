import Wrapper from "./wrapper";




const Labsoft= () => {
    return (
        <Wrapper>
            <div className="flex flex-col items-center justify-center h-screen bg-[#3d2d2d]">
                <h1 className="text-4xl font-bold mb-4">Labsoft for Universities</h1>
                <p className="text-lg text-gray-700 mb-8">Your partner in chemical analysis and research.</p>
                <button className="px-6 py-3 bg-[#153D63] text-white rounded-lg hover:bg-[#1a4d7a] transition duration-300">
                    Get Started
                </button>
            </div>
        </Wrapper>  
    )
};


export default Labsoft;