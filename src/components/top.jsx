import React from 'react'
import img1 from '../images/top/topimg.png'
const top = () => {
  return (
    <section className = "gradient-background w-full m-0 min-h-[1500px] flex  flex-row justify-center pt-20 lg:min-h-[440px]">
    <div className = "flex flex-col items-center w-full">
    <div className = " mt-20 min-h-[700px]  w-[90%] flex flex-col items-center">
        <div className = " h-fit w-full    flex overflow-hidden flex-col lg:flex-row items-center lg:items-start lg:justify-evenly gap-x-20"> 
             <img src={img1} className = "min-h-[350px] min-w-[400px] w-[450px]" />
             <div className = "min-h-[280px]   flex min-w-[300px] flex-col">
                <div className="flex flex-col py-8  ">
                    <div>
                    <h3 className = "max-w-[1700px] min-w-[200px] font-AR text-white/70 text-xl tracking-tight md:text-2xl"><span className = "text-red-700">"</span>Every violation of truth <br />is not only a sort of suicide<br /> in the liar, but <br />is a stab at the health of human society.<span className = "text-red-700">"</span></h3>
                    </div>
                    <div className = "mt-2 text-right text-white text-l md:text-xl -tracking-wider font-Kanit">
                     <h3>-Ralph Waldo Emerson</h3>
                     </div>
                </div>

             </div>


        </div>
        <div className = "w-[90%] md:w-[80%]   min-h-[300px] rounded-md flex  overflow-hidden ">
            <div className = "flex flex-col  w-full ">
                <div className = "m-0 w-full mt-8">
                <h3 className = "font-Kanit text-3xl text-white md:text-5xl lg:text-6xl"><span className = "text-red-700 font-extrabold ">Guardians of Justice</span><br/> Protecting <br />Investigating   <span className = "text-red-700 font-extrabold">And Serving</span> </h3>
                </div>
                <div className = "font-AR text-xl md:text-2xl font-bold mt-8 text-white/70 justify-center md:justify-start">
                    <h3>At the core of our nation's defense, the <span className = "text-red-700 font-bold">Federal Bureau of Investigation </span>stands as the unwavering 'Guardians of Justice.' With an enduring pledge to protect, investigate, and serve, the <span className = "text-red-700 font-bold"> FBI</span> ensures that <span className = "decoration-4">wrongs</span>  are <span >righted</span> , justice is upheld, and our communities remain secure. Their commitment is a promise to the American people, an assurance that <span className = "text-white/80 lg:font-bold ">when injustices occur, there will always be those who tirelessly work to make them right.</span></h3>
                </div>

                <div className="ml-2 py-8 flex justify-items-end w-full flex-row">
  <a href="https://www.fbi.gov/investigate" target="_blank">
    <button className="rounded-xl border-none py-4 px-6 text-white/90 font-AR font-extrabold text-xl md:text-2xl bg-red-800 hover:bg-transparent hover:border hover:border-white/80 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      Learn More
    </button>
  </a>
</div>

                
                </div>


        </div>

        </div>

    </div>

    </section>
  )
}

export default top;
