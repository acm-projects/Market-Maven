import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Review = (props) => {
    const [username, setUsername] = useState("");

    useEffect(() => {
      const fetchUser = async () => {
        const res = await axios.get(`http://localhost:8080/api/users/${props.userid}`);
        setUsername(res.data.username);
      };
  
      fetchUser();
    }, []);

    return (
    <>
        <figure class="relative rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/10 mb-6">
            <blockquote class="relative">
                <p class="text-lg tracking-tight text-slate-900">{props.thereview}</p>
            </blockquote>
            <figcaption class="relative mt-4 flex items-center justify-between border-t border-slate-100 pt-2">
                <div>
                    <div class="font-display text-base text-slate-900">{username}</div>
                </div>
                <div class="overflow-hidden rounded-full bg-slate-50">
                    <img alt="image" class="h-12 w-12 object-cover" src="https://randomuser.me/api/portraits/men/15.jpg"/>
                </div>
            </figcaption>
        </figure> 
    </>
  );
};

export default Review;
