"use client";
import TimelineCard from "./TimelineCard";
import { useEffect, useRef, useState } from "react";

const Timeline = ({ datas }) => {
  const ScrollRef = useRef(0);
  const [scrollCurrent, setScrollCurrent] = useState(ScrollRef.current);
  const [scrollLength, setLength] = useState(ScrollRef.current);

  const HandleScroll = () => {
    setScrollCurrent(ScrollRef.current);
    setLength(ScrollRef.current.scrollTop);
  };

  useEffect(() => {
    ScrollRef.current.addEventListener("scroll", HandleScroll);

    return () => {
      if (ScrollRef.current)
        ScrollRef.current.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  console.log(datas);

  return (
    <>
      <div className="p-5">
        <h1 className="md:text-4xl sm:text-3xl text-center font-bold txt-grad">
          <b>History Timeline</b>
        </h1>
        <p className="text-center md:text-xl sm:text-sm my-10 mx-auto text-white">
          Explore the evolution of gaming magic with Gamedevutopia History
          Timeline. Journey through the milestones, from pixelated pioneers to
          immersive virtual worlds, tracing the artistry, technology, and
          culture that shaped gaming as we know it. Whether youre a seasoned
          gamer or a curious newcomer, uncover the stories behind your favorite
          titles and the visionaries who brought them to life.
        </p>
      </div>

      <div
        ref={ScrollRef}
        className="Scroll no-scrollbar h-[90vh] overflow-y-scroll overflow-x-hidden transition-all rounded-[2rem] md:rounded-[5rem] border-2 mx-5 "
      >
        <div className="Timeline">
          <br />
          <br />
          {datas &&
            datas.map((data, i) => (
              <TimelineCard
                key={i}
                data={data}
                index={i}
                scrollCurrent={scrollCurrent}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
