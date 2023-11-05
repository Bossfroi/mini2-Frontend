import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Forum = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://instagram130.p.rapidapi.com/account-info',
        params: { username: 'adele' },
        headers: {
          'X-RapidAPI-Key': 'ddacd9913emsh73b2c9cb48a50dap1a8f34jsn00572a350a0d',
          'X-RapidAPI-Host': 'instagram130.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     


      {data ? (
        <div>
          <p>Followers: {data.username}</p>

          <img src={data.profile_pic_url} alt="" />
          <p>Followers: {data.full_name}</p>
          <p>Instagram Account Information:</p>

          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Forum;
