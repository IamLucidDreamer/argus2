import React, { useEffect, useRef, useState } from 'react';
import { Button, IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useParams } from 'react-router';
import axiosInstance from '../../../helpers/axiosInstance';
import Slider from 'react-slick';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import { API } from '../../../api';
import Countdown from 'react-countdown';
import MCQ from './MCQ';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  updateChapter,
  updateCompletedChapter,
  updateCompletedModule,
  updateModule,
  updateTimestamp,
} from '../../../context/actions/userActions';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" style={{ color: 'black' }}>
      <IconButton onClick={onClick}>
        <NavigateNextRoundedIcon color="black" style={{ fontSize: '60px' }} />
      </IconButton>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      style={{
        color: 'black',
        left: '-60px',
      }}
    >
      <IconButton onClick={onClick}>
        <NavigateBeforeRoundedIcon color="black" style={{ fontSize: '60px' }} />
      </IconButton>
    </div>
  );
}

const ChapterContent = ({ show, setShow, currentChapter, chapter, index }) => {
  const token = JSON.parse(localStorage.getItem('jwt'));
  const { courseId, nextModule, moduleId } = useParams();
  const dispatch = useDispatch();

  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const progress = useSelector((state) => state.progress.progress);
  const current = useSelector((state) => state.progress.current);

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

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          centerPadding: '350px',
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: '300px',
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '250px',
          arrows: false,
        },
      },
      {
        breakpoint: 950,
        settings: {
          centerPadding: '200px',
          arrows: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          centerPadding: '170px',
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: '50px',
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '10px',
          arrows: false,
        },
      },
    ],
  };

  const time =
    Date.now() + current?.currentChapter?.currentChapterTimestamp * 60000;

  const countDownRef = useRef();

  if (show) {
    countDownRef?.current?.api?.start();
  }

  const renderer = ({ hours, minutes, completed }) => {
    return (
      <span className="text-2xl font-bold text-gray-2">
        {hours !== 0 ? hours + ' hrs' : null} {minutes} min left
      </span>
    );
  };

  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
    >
      <div className="bg-white flex flex-col items-center rounded-lg w-3/4 lg:w-3/4 h-3/4 relative">
        <div className="w-full flex justify-end p-4">
          <IconButton
            onClick={() => {
              setShow(false);
              setSlides([]);
              countDownRef?.current?.api?.stop();
              setCompleted(false);
            }}
          >
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        {completed ? (
          <div className="text-2xl font-bold text-gray-2 w-full text-center ">
            Chapter Completed!!!
          </div>
        ) : null}
        {current?.completedChapters?.some(
          (chapter) => chapter.chapterId === currentChapter?._id,
        ) ? null : (
          <Countdown
            ref={countDownRef}
            renderer={renderer}
            date={new Date(time)}
            autoStart={false}
            onTick={({ minutes, hours }) => {
              if (hours !== 0) {
                dispatch(
                  updateTimestamp({
                    time: hours * 60 + minutes,
                    id: current?._id,
                  }),
                );
              } else {
                dispatch(updateTimestamp({ time: minutes, id: current?._id }));
              }
            }}
            intervalDelay={60000}
            onStart={() => {
              console.log('Timer started');
            }}
            onStop={() => {
              console.log('Timer stopped');
            }}
            onComplete={() => {
              if (index === chapter?.length - 1) {
                dispatch(
                  updateCompletedChapter({
                    chapterId: currentChapter?._id,
                    id: current?._id,
                  }),
                );
                dispatch(
                  updateCompletedModule({
                    moduleId: moduleId,
                    id: current?._id,
                  }),
                );
                if (nextModule) {
                  dispatch(
                    updateModule({ moduleId: nextModule, id: current?._id }),
                  );
                  dispatch(
                    updateChapter({
                      chapterId: null,
                      duration: 0,
                      id: current?._id,
                    }),
                  );
                }
              } else {
                console.log('inside 2');
                dispatch(
                  updateChapter({
                    chapterId: chapter[index + 1]?._id,
                    duration: chapter[index + 1]?.duration,
                    id: current?._id,
                  }),
                );
                dispatch(
                  updateCompletedChapter({
                    chapterId: currentChapter?._id,
                    id: current?._id,
                  }),
                );
              }

              setCompleted(true);
            }}
          />
        )}
        <div className="w-5/6">
          <Slider {...settings} className="w-full">
            {slides.map((data) => {
              return (
                <div
                  key={data._id}
                  className="p-6 flex flex-row justify-center items-center"
                >
                  {data?.question === null ? (
                    <div className="flex">
                      <div className="w-1/2 h-full flex items-center justify-center">
                        <img
                          className="w-full"
                          src={`${API}/material/getSlideImg/${courseId}/${currentChapter?._id}/${data?._id}`}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h1>{data?.title}</h1>
                        <p>{data?.text}</p>
                      </div>
                    </div>
                  ) : (
                    <MCQ data={data} />
                  )}
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
