import { useState, useEffect } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

function useFetch(
  url,
  options = {
    method: "GET",
    data: {},
  }
) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axiosInstance({ url, ...options });

        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, isLoading, error };
}

export default useFetch;
