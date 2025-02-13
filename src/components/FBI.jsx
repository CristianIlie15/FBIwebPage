import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FBIWanted = () => {
  const [wantedList, setWantedList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://api.fbi.gov/wanted/v1/list';

    // Make the API request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the API response data here
        setWantedList(response.data.items);
        setLoading(false);
        console.log(response.data.items);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>FBI Wanted List</h1>
      <ul>
        {wantedList.map((item) => (
          <li key={item.uid}>
            <h2>{item.title}</h2> <br />
            <img src={item.images[0].large} alt={item.title} /><br />
            <p>Date of Birth: {item.personal_details.date_of_birth}</p><br />
            <p>Sex: {item.personal_details.sex}</p><br />
            <p>Eye Color: {item.personal_details.eye_color}</p><br />
            <p>Estimated Height: {item.personal_details.height}</p><br />
            <p>Nationality/Citizenship: {item.personal_details.nationality_citizenship}</p><br />
            <p>Contact Information for Reporting Tips: {item.contact_details[0].value}</p><br />
            <p>Accusation: {item.details.accusation}</p>
            <p><br />
              <a href={item.details.wanted_poster} target="_blank" rel="noopener noreferrer">
                Wanted Poster
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FBIWanted;
