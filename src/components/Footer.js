import React from 'react'
import facebook from '../images/footer/facebook.png';
import git from '../images/footer/git.png';
import ig from '../images/footer/ig.svg';
import x from '../images/footer/x.png';
import downloadButton from '../images/footer/download .png';
import linkButton from '../images/footer/link.png';



let currentYear=new Date().getFullYear();

const Footer = () => {
  return (
    <div className = "min-h-[250px] footer flex flex-col-reverse md:flex-row gap-2">
      <section className = "min-w-[94%] h-[38%] bg-black/50 rounded-md md:min-h-full md:min-w-[38%]">
      <div className = "socialMedia flex flex-col items-center md:items-start md: ml-[5%] lg:ml-[25%]">
      <h3 className = "font-Kanit text-white/75 md:text-lg lg:text-xl mt-4"> Social media Links</h3>
      <ul className = "my-6 gap-6 flex flex-row">
        <li>
        <a href = "https://www.facebook.com/ilie.cristian282/" target = "_blank"><img src = {facebook} width="45" height="45" ></img></a>
        </li>
        <li>
        <a href = "https://github.com/CristianIlie15" target = "_blank"><img src = {git} width="45" height="45" ></img> </a>
        </li>
        <li>
        <a href = "https://twitter.com/Synysterg211079" target = "_blank"><img src = {x} width="45" height="45" ></img> </a>
        </li>
        <li>
        <a href = "https://www.instagram.com/empty_field01/" target = "_blank"><img src = {ig} width="45" height="45" ></img> </a>
        </li>
      </ul>

      </div>

        <div className = "ml-[60%] mt-5 md:ml-[40%]">
        <a href = "https://www.linkedin.com/in/claudiu-cristian-ilie-78529a290/" target = "_blank"><button className = "rounded-lg bg-yellow-400 px-4 py-2 font-AR text-black/60 font-semibold mb-10">LinkedIn <span className = "text-black/40 font-extrabold text-lg">&gt;</span></button></a>
        </div>
      </section>
      <section className = "w-full h-[242px] bg-black/40 rounded-lg">
      <div className = "flex items-center flex-col mt-10 md:items-start md:ml-10 lg:ml-20 ">
      <a href= "https://www.justice.gov" target = "_blank"><div className = "flex flex-row mb-2 md:mb-3  "><h3 className = "font-Kanit text-white/75 md:text-lg lg:text-xl mr-1">Justice.Gov</h3> <img src={linkButton} width="25" height="25" /></div></a>
      <a href= "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjL56Grp6yCAxVfcfEDHdGXBj4QFnoECBYQAQ&url=https%3A%2F%2Fwww.fbi.gov%2Ffile-repository%2Fpia-ncic-020723.pdf&usg=AOvVaw25k_OCuAW-qRzDU1poHR3r&opi=89978449" target = "_blank"><div className = "flex flex-row mb-2 md:mb-3 "><h3 className = "font-Kanit text-white/75 md:text-lg lg:text-xl mr-2">Laws pdf</h3> <img src={downloadButton} width="28" height="27" /></div></a>
      <h3 className = "font-Kanit text-white/75 md:text-lg lg:text-xl mr-1 "> Phone: 202-514-2000</h3>
      </div>
      
      
      <div className = "copyRight mt-8 md:ml-10 lg:ml-20 flex items-end flex-col">
      <h3 className = "font-Kanit text-white/75 md:text-lg lg:text-xl mr-6  ">
      © Copyright {currentYear}. <br /> All rights reserved.  </h3>
    </div>
      </section>
    </div>
  )
}

export default Footer
