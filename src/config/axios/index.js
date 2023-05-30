import axios from "axios";

const AxiosConfig = () => {
  const instance = axios.create({
    baseURL: "https://646f0ae509ff19b1208674bc.mockapi.io/",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      "X-Custom-Header": "foobar",
    },
  });

  return {
    instance,
  };
};

export default AxiosConfig;
