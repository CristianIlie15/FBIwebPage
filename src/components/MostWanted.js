import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomCard from './CustomCard';
import imgTip from "../images/action/tip.png";

const FBIWanted = () => {
  const [wantedList, setWantedList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://api.fbi.gov/wanted/v1/list';

    axios
      .get(apiUrl)
      .then((response) => {
        setWantedList(response.data.items);
        setLoading(false);
        console.log(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleButtonClick = (url) => {
    if (url) {
      window.location.href = url;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex items-center flex-col action-background bg-cover" id='action'>
      <div className="my-10 mt-14">
        <h1 className="text-5xl text-center font-extrabold md:font-6xl text-red-700 my-5">Most Wanted List</h1>
        <div className="my-7">
          <h2 className="text-gray-400 mt-2 font-AR text-xl md:text-2xl text-center">
            These are the Most Wanted individuals at the <span className="font-bold text-red-700">current moment</span>.
          </h2>
        </div>
        <div className="py-10 w-[70%] flex items-center mx-[15%]">
          <img src={imgTip} width={90} />
          <h2 className="text-center text-gray-300 font-AR text-xl md:2xl">
            The info on the page below is generated using a <span className="font-extrabold text-red-700">FREE API</span>. When hovering over the cards, you might notice some <span className="font-extrabold text-[#faea70]">HTML tags</span> in the data — like <span className="font-extrabold text-red-700">anchor tags, paragraph tags</span>, etc. That's part of the raw <span className="font-extrabold text-[#faea70]">plain text</span> from the API.
          </h2>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center min-w-[80%]">
        {wantedList.map((item) => (
          <CustomCard
            key={item.uid}
            url2={item.url}
            title={item.title}
            imageSrc={item.images?.[0]?.original}
            age={item.age_range || "N/A"}
            sex={item.sex || 'N/A'}
            warning={item.warning_message || "N/A"}
            eyes={item.eyes || 'N/A'}
            eyes2={item.eyes_raw || "N/A"}
            race={item.race || 'N/A'}
            Remarks={item.scars_and_marks || 'N/A'}
            hair={item.hair || "N/A"}
            remarks={item.remarks || 'N/A'}
            desc={item.description || 'N/A'}
            reward={item.reward_text || 'N/A'}
            type2={item.poster_classification || 'N/A'}
            detail={item.details || 'N/A'}
            caution={item.caution || 'N/A'}
            pob={item.place_of_birth || 'N/A'}
            buttonLabel="More Info"
            onClick={() => handleButtonClick(item.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default FBIWanted;
