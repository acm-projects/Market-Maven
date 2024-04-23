import React, { useState, useEffect } from "react";
import axios from "axios";

const Review = (props) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/users/${props.userid}`
        );
        setUserData(res.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [props.userid]);

  return (
    <>
      <figure className="relative rounded-2xl bg-white p-5 shadow-xl shadow-slate-900/10 mb-8 flex">
        <div className="overflow-hidden rounded-full bg-slate-50 mr-4">
          {userData && (
            <img alt="user" className="h-16 w-16 object-cover" src={userData.image} />
          )}
        </div>
        <div>
          {userData && (
            <div className="font-display text-base text-slate-900 font-bold mb-2" style={{ color: "#472836" }}>
              {userData.username}
            </div>
          )}
          <blockquote className="relative">
            <p className="text-lg tracking-tight text-slate-900" style={{ color: "#472836" }}>
              {props.thereview}
            </p>
          </blockquote>
        </div>
      </figure>
    </>
  );
};

export default Review;
