import Hero from "@/components/hero";
import Location from "@/components/location";
import Speaker from "@/components/speaker";
import Timer from "@/components/timer";
import VideoAndRegistration from "@/components/video";

const speakers = [
  {
    name: "Nii Antiaye Quarshie",
    role: "Resident Pastor, ICGC Kabod",
    image: "/speaker_nii.jpg",
  },
  {
    name: "Bernard Avle",
    role: "General Manager of Citi FM & Citi TV and Host of the Citi Breakfast Show",
    image: "/speaker_bernard.jpg",
  },
  {
    name: "Rev. Akua Ofori-Boateng",
    role: "Director of Programmes for Anglican Diocese of Accra",
    image: "/speaker_akua.jpg",
  },

  {
    name: "Joel Nii Tackie",
    role: "Pastor and Public speaker",
    image: "/speaker_joel.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Timer />
      <VideoAndRegistration />
      <section className="speakers-section py-24">
        <div className="container mx-auto">
          <h3 className=" text-center text-3xl pb-5">Speakers</h3>
          <div className="grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-4 ">
            {speakers.map((speaker, index) => (
              <Speaker key={index} {...speaker} />
            ))}
          </div>
        </div>
      </section>
      <Location />
    </main>
  );
}
