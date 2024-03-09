import React from "react";
import Registration from "./registration";

const VideoAndRegistration = () => {
  return (
    <section className="video-section section py-24 bg-slate-50">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10">
        <div className="mx-auto">
          <div className="md:hidden">
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/n5BG_naAGtA?si=BbtdfhgRUyKT5oCe"
              title="Youth Alive Conference 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="hidden md:flex">
            <iframe
              width="720"
              height="405"
              src="https://www.youtube.com/embed/n5BG_naAGtA?si=BbtdfhgRUyKT5oCe"
              title="Youth Alive Conference 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <Registration />
      </div>
    </section>
  );
};

export default VideoAndRegistration;
