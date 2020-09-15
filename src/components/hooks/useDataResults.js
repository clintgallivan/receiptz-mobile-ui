import { useEffect, useState } from 'react';
import getUser from 'selectors/UserSelectors';
import getData from 'selectors/DataSelectors';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log('Hi there');
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm, //* also can just say: "term" if you are using "term: term"
          // location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something Went Wrong');
    }
  };

  //! Call searchApi when component is first rendered. BAD CODE!!
  // ! searchApi('pasta');

  useEffect(() => {
    searchApi('Cafe')
  }, []);

  return [searchApi, results, errorMessage];
};