import heroimage1 from "../../assets/heroimage1.svg";
import heroimage2 from "../../assets/heroimage2.svg";
import stud from "../../assets/stud.svg";
import { Link } from "react-router-dom";
import useIsStudent from "../../hooks/useIsStudent";

const Hero = () => {
  const isReg = useIsStudent();

  return (
    <div className=" bg-[#331000]/5 relative py-6">
      <div className="flex flex-col items-center gap-4 lg:w-[70%] md:w-[70%] w-[100%] mx-auto text-center my-12 px-4 lg:px-0 md:px-0">
        <img src={stud} alt="stud" className="w-1/4 mt-10 flex items-center" />
        <h1 className="text-[40px] md:text-[40px] font-serif font-extrabold capitalize text-center  text-[#091913]">
          Fueling Education's Next Frontier
        </h1>
        <h3 className="text-[20px] md:text-[18px] font-serif text-center font-semibold text-[#091913]">
          Where Boundaries Blur and Innovations Thrive:
          <br />
          Transforming Education Through Blockchain
        </h3>
        <div className="flex items-center gap-8">
          <Link
            to={isReg ? "/login" : "/create-proposal"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="bg-[#FF5100] hover:bg-[#030352] text-white font-bold py-2 px-4  rounded">
              Submit Proposal
            </button>
          </Link>
          <Link
            to="/proposals"
            style={{ textDecoration: "none", color: "#427142" }}
          >
            {" "}
            <button className="bg-[#030352] hover:bg-[#FF5100] text-[#ffffff] font-bold py-2 px-4 border border-[#030352] rounded">
              Fund a Proposal{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:w-[500px] lg:h-[500px] md:w-[500px] md:h-[500px] w-[250px] h-[250px] bg-[#015C28]/20 blur-[80px] absolute top-0 left-0 rounded-full"></div>
      <div className="flex flex-col lg:flex-row md:flex-row justify-between lg:w-[90%] md:w-[90%] w-[100%] mx-auto mb-10">
        <div className="flex justify-end items-center lg:w-[45%] md:w-[45%] w-[100%]">
          <img src={heroimage2} alt="heroimage1" />
        </div>
        <div className="flex justify-start items-center lg:w-[52%] md:w-[52%] w-[100%] ">
          <img src={heroimage1} alt="heroimage2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
