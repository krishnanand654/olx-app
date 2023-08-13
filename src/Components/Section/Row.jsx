/* eslint-disable react/jsx-key */
import Card from "../Card/Card";
import "./row.css";
import { useEffect, useState } from "react";
import axiosClient from "../../utils/axiosInstance";
const Row = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      let response = await axiosClient.get("/products");
      let result = response.data;
      setData(result);
    };
    apiCall();
  }, []);

  return (
    <>
      <h1 className="head">Fresh recommendations</h1>
      <div className="row-ctn">
        {data.length > 0
          ? data.map((el) => {
              return <Card {...el} />;
            })
          : null}
      </div>
    </>
  );
};
export default Row;
