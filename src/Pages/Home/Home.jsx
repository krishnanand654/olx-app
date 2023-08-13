import Row from "../../Components/Section/Row";
import Subnav from "../../Components/Subnav/Subnav";
import Banner from "../../Components/Banner/Banner";
function Home() {
  return (
    <>
      <div className="section">
        <Subnav />
        <Banner />
        <Row />
      </div>
    </>
  );
}

export default Home;
