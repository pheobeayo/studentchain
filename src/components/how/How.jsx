import howimage from "../../assets/howimage.svg";


const How = () => {
    return (
        <section className="bg-white py-20">
            <div className="bg-white lg:w-[90%] md:w-[90%] w-[100%] mx-auto ">
                <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
                    <h1 className="text-[#331000] lg:text-[32px] md:text-[32px] text-[24px] font-[700] lg:w-[70%] md:w-[70%] w-[100%] my-12 font-titiliumweb text-center lg:text-left md:text-left">
                        How to Navigate
                        <br />
                        Welcome to StudentChain
                        <br />
                        How to Navigate StudentChain
                    </h1>




                    <div className="flex flex-col lg:flex-row md:flex-row justify-between">
                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10 md:mx-10 shadow-md">
                            <div className="grid place-items-center">
                            <img src={howimage} alt="howimage" />
                            </div>
                            <div className="w-full h-1/2">
                                <h3 className="text-[#331000] text-xl font-bold leading-loose text-center ">
                                    Connect Wallet
                                </h3>
                                <p className="text-[#331000] text-sm font-normal pb-2 text-center">
                                    Whether you are looking forward to
                                    fund or to secure funding, the first
                                    step is to connect your wallet to get started

                                </p>
                            </div>

                        </div>



                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10 shadow-md">
                        <div className="grid place-items-center">
                            <img src={howimage} alt="howimage" />
                            </div>
                            <div className="w-full h-1/2 p-1">
                                <h3 className="text-[#331000] text-xl font-bold leading-loose text-center">
                                    Submit a Proposal
                                </h3>
                                <p className="text-[#331000] text-sm font-normal text-center">
                                    If you are looking forward to secure
                                    funding for your education, click
                                    on the submit a proposal button to proceed
                                </p>
                            </div>
                        </div>

                        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10 shadow-md md:mx-8">
                        <div className="grid place-items-center">
                            <img src={howimage} alt="howimage" />
                            </div>
                            <div className="w-full h-1/2 p-1">
                                <h3 className="text-[#331000] text-xl font-bold leading-loose text-center">
                                    Fund
                                </h3>
                                <p className="text-[#331000] text-sm font-normal pb-4 text-center ">
                                    GreenRewards makes sustainability
                                    accessible and engaging. Embrace
                                    the future of sustainability.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section>

    );
};

export default How;
