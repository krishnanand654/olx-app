/* eslint-disable react/jsx-key */
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../utils/axiosInstance";
import Card from "../../Components/Card/Card";
function Search() {
  const [newData, setNewData] = useState([]);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("q"));
  useEffect(() => {
    const apiCall = async () => {
      let response = await axiosClient.get("/products");
      const searchedData = response.data.filter((item) =>
        item.title.includes(searchParams.get("q"))
      );

      setNewData(searchedData);
    };
    apiCall();
  }, [searchParams]);
  console.log(newData);
  return (
    <div>
      <div className="row-ctn" style={{ padding: "100px 0 0" }}>
        {newData.length > 0
          ? newData.map((el) => {
              return <Card {...el} />;
            })
          : null}
      </div>
    </div>
  );
}

export default Search;
