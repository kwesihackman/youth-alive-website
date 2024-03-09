"use client";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  name: string;
  role: string;
  bio?: any;
  image: string;
};

const NiiBio = () => {
  return (
    <div>
      <p>
        Pastor Nii Antiaye Quarshie is the Resident Pastor of ICGC Kabod
        Assembly. He is a young dynamic minister of the Gospel with a strong
        foundation in prayer and the Word.
      </p>
      <p>
        He believes everyone is called into the Kingdom for exploits no matter
        your background, tribe or the colour of your skin.{" "}
      </p>

      <p>
        He is a Banker and marketer by profession. He is married and resides in
        Accra with his wife and children.
      </p>
    </div>
  );
};

const AkuaBio = () => {
  return (
    <div>
      <p>
        Rev’d Akua Ofori-Boateng is the Director of Programmes for the Anglican
        Diocese of Accra.
      </p>

      <p>
        She is a member of the United States Trade Advisory Committee on Africa,
        and serves as a member on the Board of the Otumfuo Osei Tutu II
        Foundation (OOTIIF).
      </p>

      <p>
        Rev’d Akua is also the co-founder of Aequitas (pronounced Equitas); a
        faith-based foundation which has a vision to become the leading NGO in
        Africa, where organizations can source young tertiary graduates who have
        been molded into self-aware, passionate, and fit for purpose youth
        through personalized grooming and training.
      </p>
    </div>
  );
};

const JoelBio = () => {
  return (
    <div>
      <p>
        Pastor Joel Nii Tackie Tackie is a Minister of the Gospel, Practicing
        Architect and public speaker.{" "}
      </p>
      <p>
        He has been spreading the Good News of Salvation for over 15 years, from
        his time as a student at the Kwame Nkrumah University of Science and
        Technology (KNUST) till now.{" "}
      </p>
      <p>
        He has had the privilege of ministering God&apos;s Word on various
        platforms in Ghana, both within the International Central Gospel Church
        (ICGC) and beyond. His ministry is characterized by strong teaching of
        the word of God, fervent prayer, prophetic declarations and healings.
      </p>
      {/* <p>
        He has a Master of Architecture degree from the KNUST and is an
        Associate of the Ghana Institute of Architects and is currently an
        employee at the Consortium for Housing and Settlement Planning (CIHSD)
      </p>
      <p>
        Pastor Joel is the senior Pastor of ICGC Dayspring Assembly and is
        married with a son. His desire is to see the power of God demonstrated
        mightily in our churches and generation.
      </p> */}
    </div>
  );
};

const BernardBio = () => {
  return (
    <div>
      <p>
        Bernard Avle is a multiple award-winning media personality and
        development activist. He is the host of the Citi Breakfast Show, the
        most widely listened radio morning show in Ghana.{" "}
      </p>

      <p>
        {" "}
        Bernard has done pioneering work in using a commercial radio and TV
        platform to champion good governance and social accountability in Ghana.
        Bernard holds a bachelor&apos;s degree in Economics from the University
        of Ghana and an MBA from Warwick University in the UK.{" "}
      </p>

      {/* <p>
        He is an Edward R Murrow Fellow of Journalism and a Chevening Scholar,
        Bernard is a Fellow of the fifth class of the Africa Leadership
        Initiative (ALI) – West Africa and is a member of the Aspen Global
        Leadership Network. Bernard was adjudged Ghana Journalists Association
        (GJA) Journalist of the year for the year 2017.
      </p> */}
    </div>
  );
};

const SpeakerBio = ({ name }: { name: string }) => {
  if (name === "Nii Antiaye Quarshie") {
    return <NiiBio />;
  }
  if (name === "Rev. Akua Ofori-Boateng") {
    return <AkuaBio />;
  }
  if (name === "Joel Nii Tackie") {
    return <JoelBio />;
  }
  if (name === "Bernard Avle") {
    return <BernardBio />;
  }
  return null;
};

function Speaker(props: Props) {
  const { name, role, image } = props;

  return (
    <div className="speakers-section__speaker flex flex-col lg:flex-row justify-start items-center lg:items-start">
      <div className="grow-0 shrink-0 ">
        <Image
          src={image}
          width={200}
          height={200}
          alt={name}
          className=" rounded-bl-3xl rounded-br-3xl lg:rounded-none"
        />
        <div className="title lg:px-3 text-center text-sm pt-2">{name}</div>
        <div className="role lg:px-3 text-center text-sm pt-1 text-wrap max-w-52">
          {role}
        </div>
      </div>
      <div>
        <div className=" text-red-950 py-5 text-base text lg:px-4">
          <SpeakerBio name={name} />
        </div>
      </div>
    </div>
  );
}

export default Speaker;
