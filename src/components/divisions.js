import React, { useState } from 'react';
import DivisionCard from './DivisionCard';
import Img1 from '../images/divisions/BAU.png';
import Img2 from '../images/divisions/CD.png';
import Img3 from '../images/divisions/CIRG.png';
const divisionsData = [
  {
    title: 'Behavioral Analysis Unit',
    description: "The BAU is often depicted in popular culture, such as in TV shows like 'Criminal Minds' It's responsible for profiling and analyzing the behavior of serial criminals and providing insights to help law enforcement agencies apprehend them. This division delves into the psychology and motivations of criminals, making it a captivating area for those interested in criminal psychology and understanding the minds of serial offenders.",
    imageSrc: Img1, 
  },
  {
    title: 'Cyber Division',
    description: "In our increasingly digital world, cybercrime has become a significant threat. The FBI's Cyber Division is at the forefront of investigating cyberattacks, hacking, online fraud, and other cybercrimes .This division plays a crucial role in addressing cybersecurity threats and protecting individuals, organizations, and national security from online threats, making it a fascinating field for those interested in technology and cybersecurity.",
    imageSrc: Img2,
  },
  {
    title: 'Critical Incident Response Group ',
    description: "CIRG is involved in high-stakes, high-risk operations, including hostage rescue, SWAT missions, and crisis response. This division handles some of the most intense and challenging situations law enforcement can encounter. CIRG's work is often dramatic and dynamic, which can make it particularly captivating for those interested in tactical operations and emergency response scenarios.",
    imageSrc: Img3,
  },
];

const Divisions = () => {
  const [selectedDivision, setSelectedDivision] = useState(null);

  const handleDivisionClick = (division) => {
    setSelectedDivision(division);
  };

  return (
    <section id='Divis'  className="divisions-background lg:min-h-[1200px] bg-cover bg-no-repeat w-full md:bg-cover  min-h-[1700px] md:min-h-[1300px] max-h-[1850px] justify-center flex flex-col ">
    <div className = "flex flex-col"> <div className = " flex flex-col lg:mr-20 mr-10 md:mr-[10%]">
      <div className = "text-center flex justify-end my-5 lg:mt-20  ">
        <h2 className = " font-extrabold text-white/90 text-3xl md:text-4xl lg:text-5xl ">Introducing Our <span className = "text-yellow-400 uppercase font-black">Elite Divisions</span> </h2>
      </div>
      <div className = "text-left flex justify-end max-w-full flex-row">
      <div className = "min-w-full">

      </div>
      <div className = "mb-8 min-w-[90%] md:min-w-[580px] ">
        <h3 className = "text-white/80 text-xl font-bold md:text-2xl lg:text-2xl text-left">"In our quest for excellence and unwavering commitment to safeguarding the nation, we've assembled an exceptional ensemble of specialized divisions, each a beacon of expertise in its own right. From cyber intelligence to counterterrorism, our divisions represent the pinnacle of knowledge, dedication, and determination. As you explore our divisions, you'll delve into the heart of innovation, teamwork, and relentless pursuit of justice. Get ready to embark on a journey through the world of unparalleled competence and service to the community."</h3>
        </div>
      </div>

      </div>
      </div>
      <div className=" md:mt-10 md:my-8 h-[600px] lg:w-[70%] w-[90%] md:w-[80%]  flex flex-col md2:flex-row md:min-h-[700px] md2:my-10 lg:ml-[16%] md:ml-[8%] ml-[5%] mt-14 ">
      
        <div className=" w-full max-h-[25%] md2:max-h-[30%] md2:min-h-full md2:max-w-[30%] 
       min-h-[208px]  flex-row flex items-center justify-around md2:flex-col md2:justify-between gap-x-[4px] ">
          {divisionsData.map((division, index) => (
            <DivisionCard
              key={index}
              title={division.title}
              description={division.description}
              imageSrc={division.imageSrc}
              onClick={() => handleDivisionClick(division)}
            />
          ))}
        </div>
        <div className=" mt-4 my-6 target flex items-center justify-center lg: w-full h-full  rounded-3xl p-6">
          {selectedDivision && (
            <div className="selected-division h-full w-full flex items-center flex-col md2:justify-end relative my-15 md:justify-end md:mt-20 lg:mt-0 md2:m-0 md2:mb-20 ">
              <h3 className="text-2xl text-center font-extrabold md2:text-3xl font-Kanit lg:text-4xl text-yellow-400 mb-4 uppercase md2:mb-6 md:text-3xl ">{selectedDivision.title}</h3>
              <p className = "text-xl text-center font-AR md2:text-2xl lg:text-3xl md:text-xl text-white/70 ">{selectedDivision.description}</p>

            </div>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default Divisions;
