import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useHistory, useParams } from "react-router";
import axiosInstance from "../../../helpers/axiosInstance";
import Slider from "react-slick";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import { API } from "../../../api";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      style={{ color: "black" }}
      onClick={onClick}
    >
      <IconButton onClick={onClick}>
        <NavigateNextRoundedIcon color="black" fontSize="large" />
      </IconButton>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      style={{
        color: "black",
        paddingRight: "10px",
      }}
    >
      <IconButton onClick={onClick}>
        <NavigateBeforeRoundedIcon color="black" fontSize="large" />
      </IconButton>
    </div>
  );
}

const ChapterContent = ({ show, setShow, currentChapter }) => {
  const token = JSON.parse(localStorage.getItem("jwt"));
  const { courseId } = useParams();

  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentChapter?._id) {
      setLoading(true);
      axiosInstance
        .get(`/material/getChapter/${courseId}/${currentChapter?._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setLoading(false);
          setSlides(res.data.data.slides);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [token, courseId, currentChapter?._id]);

  console.log(slides);

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          centerPadding: "350px",
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "300px",
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "250px",
          arrows: false,
        },
      },
      {
        breakpoint: 950,
        settings: {
          centerPadding: "200px",
          arrows: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          centerPadding: "170px",
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: "50px",
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "10px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
    >
      <div className="bg-white flex flex-col items-center rounded-lg w-3/4">
        <div className="w-full flex justify-end p-4">
          <IconButton
            onClick={() => {
              setShow(false);
              setSlides([]);
            }}
          >
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="w-5/6">
          <Slider {...settings} className="w-full">
            {slides.map((data) => {
              return (
                <div key={data._id} className="flex flex-row justify-center">
                  <div className="pt-10 px-2 pb-32 sm:pb-20  w-full flex flex-row">
                    <img
                      className="w-1/2"
                      src={`${API}/material/getSlideImg/${courseId}/${currentChapter?._id}/${data?._id}`}
                      alt=""
                    />
                    <div className="w-1/2">
                      <h1>{data?.title}</h1>
                      <p>{data?.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ChapterContent;
