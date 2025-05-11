import { useEffect, useState } from "react";
import type { IPost, IUser } from "../../../../constants/interfaces";
import axios from "axios";
import { API_URL } from "../../../../constants/api";
import { Link } from "react-router-dom";

export const RecentPost = ({ data }: { data: IPost }) => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    axios.get(`${API_URL}/users/${data.userId}`).then((res) => {
      setUser(res.data);
    });
  }, [data.userId]);

  return (
    <Link to={"/post/" + data.id} className="bg-white">
      <div className="relative h-[220px] mb-4">
        <img
          src={
            "https://picsum.photos/1080/1920?random=" +
            Math.floor(Math.random() * 1000)
          }
          alt="Hot air balloons"
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="text-xl font-serif mb-2 mx-[13px]">{data.title}</h3>
      <p className="text-[#768088] text-sm mb-4 mx-[13px]">
        {data.body.slice(0, 50)}...
      </p>
      <div className="flex items-center bg-[#fcfcfc] py-[7px] px-[13px] border-t-1 border-[#EFEFEF]">
        <img
          src={user?.image}
          alt={user?.username}
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-xs text-[#768088] mr-auto">
          {user?.firstName} + {user?.lastName}
        </span>
        <span className="text-xs text-[#768088]">
          {new Date(
            Date.now() -
              Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365 * 10)
          ).toLocaleDateString()}
        </span>
      </div>
    </Link>
  );
};
