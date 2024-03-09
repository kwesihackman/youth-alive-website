"use client";
import React, { useState } from "react";
import axios from "axios";
const API_ENDPOINT =
  "https://kabod-backend.vercel.app/api/youth-alive/register";
// "http://localhost:8000/api/youth-alive/register";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [institution, setInstitution] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const register = async () => {
    setIsLoading(true);

    // make request using axios
    const data = {
      name,
      email,
      phone: mobile,
      institution,
    };

    try {
      const response = await axios.post(API_ENDPOINT, data);
      console.log({ response });
      setIsLoading(false);
      setIsRegistered(true);
      // onSuccess(response.data); // Handle successful response
    } catch (error) {
      setIsLoading(false);
      setIsRegistered(false);
    }

    // const response = await fetch(API_ENDPOINT, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     phone: mobile,
    //     institution,
    //   }),
    // });
    // const data = await response.json();
    // console.log({ data });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    register();
  };

  return (
    <div className="registration_wrapper">
      <div className="lgx-registration-form-box lgx-about-registration-box p-5">
        <div className=" text-2xl ">Registration</div>
        {!isRegistered ? (
          <div className="lgx-registration-form">
            <input
              name="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="wpcf7-form-control form-control w-full mt-4"
              placeholder="Your Name ..."
              type="text"
              required
            />
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="wpcf7-form-control form-control"
              placeholder="Your E-mail ..."
              type="email"
              required
            />
            <input
              name="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="wpcf7-form-control form-control"
              placeholder="Mobile Number ..."
              type="text"
              required
            />
            <input
              name="text"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="wpcf7-form-control form-control"
              placeholder="Institution"
              type="text"
            />
            <button
              value="Register Now"
              className="wpcf7-form-control wpcf7-submit lgx-submit py-3 cursor-pointer"
              type="submit"
              onClick={handleSubmit}
            >
              {isLoading ? "Registering..." : "Register Now"}
            </button>
          </div>
        ) : (
          <div>
            Thank you for registering! Be ready to make an impact today.
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
