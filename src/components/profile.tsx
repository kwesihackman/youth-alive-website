import React, { useState } from "react";

type Props = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const Profile = (props: Props) => {
  const [count, setCount] = useState();

  console.log(count);
  return <div>Profile</div>;
};

export default Profile;
