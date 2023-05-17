import React from "react";
import vg from "../assets/industy.png";
import vg1 from "../assets/Bridge.png";
import vg2 from "../assets/truck.png";
import vg3 from "../assets/suppliers.png";
import vg4 from "../assets/consultancy.png";
import vg5 from "../assets/industy.png";
import Bg1 from "../assets/group.png";
import Bg2 from "../assets/phone.png";
import Bg3 from "../assets/hands.png";
import Bg4 from "../assets/desk.png";
import Bg5 from "../assets/Vector.png";
import Bg6 from "../assets/searchAn.png";
import Cg1 from "../assets/women.png";
import SearchIcon from "@mui/icons-material/Search";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dg from "../assets/log.png"
const Top = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomDot = ({ onClick }) => { };
  return (
    <>
      <div className="top">

        <button className="log"><img src={Dg} alt="" /> LOG IN</button>

        <div className="topOne">
          <h1>Search Engines Of Construction Industry</h1>
          <div className="search">
            <div className="searchInput">
              <input
                type="text"
                className="search-input"
                placeholder="Search Anything Anywhere "
              />
              <SearchIcon className="Searchicon" />
            </div>
          </div>
          <div className="searchBy">
            <div className="t">
              <p>Search By: </p>
            </div>
            <div className="cont">
              <label class="container">
                <input type="radio" checked="checked" name="radio" />
                <span class="checkmark">Company Name</span>
              </label>
              <label class="container">
                <input type="radio" name="radio" />
                <span class="checkmark">Product/Services Name</span>
              </label>
              <label class="container">
                <input type="radio" name="radio" />
                <span class="checkmark">All Profile</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="card">
            <div className="icon">
              <img src={vg} alt="REAL ESTATE" />
            </div>
            <div className="text">
              <p>REAL ESTATE</p>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <img src={vg1} alt="Bridge" />
            </div>
            <div className="text">
              <p>INFRA AND ROADS</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={vg2} alt="Bridge" />
            </div>
            <div className="text">
              <p>TRANSPORT</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={vg3} alt="Bridge" />
            </div>
            <div className="text">
              <p>SUPPLIERS</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={vg4} alt="Bridge" />
            </div>
            <div className="text">
              <p>CONSULTANCY</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={vg5} alt="Bridge" />
            </div>
            <div className="text">
              <p>INDUSTRY</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mid">
        <h1>Our Key Value</h1>
        <div className="up">
          <div className="card1">
            <div className="icon1">
              <img src={Bg1} alt="" />
            </div>
            <div className="text">
              <h2>Get noticed by right costomers</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                aperiam distinctio sit reprehenderit et dignissimos, consectetur
                soluta doloribus quas amet. Eaque, dicta!
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="icon1">
              <img src={Bg2} alt="" />
            </div>
            <div className="text">
              <h2>Get noticed by right costomers</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                aperiam distinctio sit reprehenderit et dignissimos, consectetur
                soluta doloribus quas amet. Eaque, dicta!
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="icon1">
              <img src={Bg3} alt="" />
            </div>
            <div className="text">
              <h2>Increase chances of deal closure</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                aperiam distinctio sit reprehenderit et dignissimos, consectetur
                soluta doloribus quas amet. Eaque, dicta!
              </p>
            </div>
          </div>
        </div>
        <div className="up">
          <div className="card1">
            <div className="icon1">
              <img src={Bg4} alt="" />
            </div>
            <div className="text">
              <h2>Profile visitor analystics</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                aperiam distinctio sit reprehenderit et dignissimos, consectetur
                soluta doloribus quas amet. Eaque, dicta!
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="icon1">
              <img src={Bg5} alt="" />
            </div>
            <div className="text">
              <h2>Technology trends of industry</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                aperiam distinctio sit reprehenderit et dignissimos, consectetur
                soluta doloribus quas amet. Eaque, dicta!
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="icon1">
              <img src={Bg6} alt="" />
            </div>
            <div className="text">
              <h2>Search analytics</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                aperiam distinctio sit reprehenderit et dignissimos, consectetur
                soluta doloribus quas amet. Eaque, dicta!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h2 style={{ textAlign: "center" }}>Customer Feedback</h2>
        <Carousel
          responsive={responsive}
          showDots={true}
          CustomDot={<CustomDot />}
        >
          <div>
            <div className="main">
              <div className="profile">
                <img src={Cg1} alt="" />
              </div>
              <div className="text">
                <h2>"Amazing product and company"</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis soluta omnis repudiandae explicabo voluptatibus,
                quia, exercitationem asperiores tempora cumque, dolor accusamus?
                Aspernatur ducimus saepe, et maxime eos ad repellat incidunt.
              </div>
              <div className="foot">
                <p>
                  -Sonia <br />
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="main">
              <div className="profile">
                <img src={Cg1} alt="" />
              </div>
              <div className="text">
                <h2>"Amazing product and company"</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis soluta omnis repudiandae explicabo voluptatibus,
                quia, exercitationem asperiores tempora cumque, dolor accusamus?
                Aspernatur ducimus saepe, et maxime eos ad repellat incidunt.
              </div>
              <div className="foot">
                <p>
                  -Sonia <br />
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="main">
              <div className="profile">
                <img src={Cg1} alt="" />
              </div>
              <div className="text">
                <h2>"Amazing product and company"</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis soluta omnis repudiandae explicabo voluptatibus,
                quia, exercitationem asperiores tempora cumque, dolor accusamus?
                Aspernatur ducimus saepe, et maxime eos ad repellat incidunt.
              </div>
              <div className="foot">
                <p>
                  -Sonia <br />
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="main">
              <div className="profile">
                <img src={Cg1} alt="" />
              </div>
              <div className="text">
                <h2>"Amazing product and company"</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis soluta omnis repudiandae explicabo voluptatibus,
                quia, exercitationem asperiores tempora cumque, dolor accusamus?
                Aspernatur ducimus saepe, et maxime eos ad repellat incidunt.
              </div>
              <div className="foot">
                <p>
                  -Sonia <br />
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
        </Carousel>
        ;
      </div>
    </>
  );
};

export default Top;
