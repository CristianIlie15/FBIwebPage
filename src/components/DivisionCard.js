// DivisionCard.js
import Img1 from '../images/divisions/BAU.png';
import Img2 from '../images/divisions/CD.png';
import Img3 from '../images/divisions/CIRG.png';
import React from 'react';

const DivisionCard = ({ title, description, imageSrc, onClick }) => {

  return (
    <div className="md2: ml-4 division-card flex flex-col md2:flex-row items-center text-center rounded-xl min-h-[50px] w-full h-full md2:max-h-[30%] md2:min-w-[50px] hover:cursor-pointer hover:opacity-50 fullBox " onClick={() => onClick({ title, description, imageSrc })}>
    <div className = "w-[40%] md:min-h-[80px] min-h-[70px] min-w-[70px] md: max-h-[200px] max-w-[120px] md:min-w-[22%] md2:mr-4 imgBox my-4"><img className = "w-full h-full " src={imageSrc} alt="Department logo"/></div>
    
        <div className = " my-2 flex items-center justify-center text-center md2:text-start bg-red-800 md:min-h-[80px] min-h-[120px] md2:min-w-[220px]  md2:min-h-[110px] rounded-xl max-w-[184px] mr-4 md:align-center md:justify-center content-box ">
        <h3 className="  font-semibold text-white/75 font-AR px-2 py-2 text-center uppercase">{title}</h3>
        </div>
      

    </div>
  );
};

export default DivisionCard;
