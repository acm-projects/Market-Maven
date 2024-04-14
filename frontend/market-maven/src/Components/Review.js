import React, { useState, useEffect } from "react";
import axios from "axios";

const Review = (props) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const res = await axios.get(`http://localhost:8080/api/users/${props.userid}`);
          setUserData(res.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      fetchUser();
    }, [props.userid]);
    
    return (
      <>
          <figure className="relative rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/10 mb-6">
              <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">{props.thereview}</p>
              </blockquote>
              <figcaption className="relative mt-4 flex items-center justify-between border-t border-slate-100 pt-2">
                  <div>
                      <div className="font-display text-base text-slate-900">{userData && userData.username}</div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                      {userData && <img alt="user" className="h-12 w-12 object-cover" src={userData.image} />}
                  </div>
              </figcaption>
          </figure> 
      </>
    );
};

export default Review;
