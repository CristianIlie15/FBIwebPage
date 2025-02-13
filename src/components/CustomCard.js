import React, { useState } from 'react';

const CustomCard = ({ title, imageSrc, buttonLabel, onClick, age, sex, warning, eyes, eyes2, race, type2, pob, extend, detail, desc, caution, reward, remarks, Remarks, hair , url2}) => {
  const [isHovered, setIsHovered] = useState(false);
  const string1= "/@@download.pdf";
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
      url2=url2+string1;
      window.open(url2, "_blank");
  };

  return (
    <div
      className={`w-72 bg-white  mx-4 my-6 rounded-lg overflow-hidden bg-cover card-background mb-10 border-s-2 shadow-lg   border-white border-b ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 card-background">
        <div className="min-h-[150px] flex justify-center text-center bg-[#5b5c5e] rounded-md items-center border-e-4 border-gray-700  shadow-lg shadow-slate-700">
          <h5 className="text-2xl font-bold text-gray-300">{title}</h5>
        </div>
        <div className="mt-4 flex flex-col items-center min-h-[146px]">
          <div className="flex justify-start flex-col min-h-[210px] ">
            {race !== "N/A" && <div> <p className="text-red-700 text-lg mt-2 font-bold">Race: <span className="uppercase text-gray-300">{race}</span></p></div>}
            {age !== "N/A" && <div> <p className="text-red-700 text-lg mt-2 font-bold">Age: <span className="uppercase  text-gray-300">{age}</span></p></div>}
            {eyes !== "N/A" && <div> <p className="text-red-700 text-lg mt-2 font-bold">Eyecolor: <span className="uppercase  text-gray-300">{eyes}</span></p></div>}
            {hair !== "N/A" && <div> <p className="text-red-700 text-lg mt-2 font-bold">Hair: <span className="uppercase  text-gray-300">{hair}</span></p></div>}
            {pob !== "N/A" && <div> <p className="text-red-700 text-lg mt-2 font-bold">Place of birth: <span className=" text-gray-300">{pob}</span></p></div>}
          </div>
          {isHovered && (
            <div className="onHover max-w-[94%] text-lg font-semibold bg-[#5b5c5e] rounded-md text-center gap-5 over overflow-hidden">

              <div className="caution md:text-md ">
              {caution !== "N/A" && <div> <p className="text-gray-300 text-sm mt-2"> <span className>{caution}</span></p></div>}
              </div>
              <div className="Remarks">
              {Remarks !== "N/A" && <div> <p className="text-red-600 text-sm mt-2"> <span className>{Remarks}</span></p></div>}
              </div>
              <div className="remarks">
              {remarks !== "N/A" && <div> <p className="text-yellow-400 text-sm mt-2"> <span className>Remarks:{remarks}</span></p></div>}
              </div>
              <div className="reward mt-4">
              <div className="reward">
              {reward !== "N/A" && <div> <p className="text-[#faea70] text-sm mt-2"> <span className="uppercase">{reward}</span></p></div>}
              </div>
            </div>
            </div>
          )}
        </div>
        <button
          type="button"
          className="block w-full mt-4 bg-red-700 hover:bg-red-600 text-white text-center py-2 px-4 rounded-full shadow-xl shadow-slate-800"
          onClick={handleButtonClick}
        >
         <span className = "font-AR">{buttonLabel}</span> 
        </button>
        
      </div>
      
    </div>
  );
};

export default CustomCard;
