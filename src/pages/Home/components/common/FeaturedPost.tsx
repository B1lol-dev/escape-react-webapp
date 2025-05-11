import { Link } from "react-router-dom";
import type { IPost, IUser } from "../../../../constants/interfaces";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../../constants/api";

interface IFeaturedPostProps {
  data: IPost;
}

export const FeaturedPost = ({ data }: IFeaturedPostProps) => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    axios.get(`${API_URL}/users/${data.userId}`).then((res) => {
      setUser(res.data);
    });
  }, [data.userId]);

  return (
    <div className="relative group overflow-hidden">
      <Link to={`/post/${data.id}`}>
        <div className="relative h-[300px]">
          <img
            src={
              "https://picsum.photos/1080/1920?random=" +
              Math.floor(Math.random() * 100)
            }
            alt="Sky lanterns"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          {Math.floor(Math.random() * 2) == 1 && (
            <div className="absolute top-4 left-4">
              <span className="bg-[#dd783f] text-white px-2 py-1 text-xs">
                ADVENTURE
              </span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl font-serif mb-2">{data.title}</h3>
            <p className="mb-4 text-sm">{data.body.slice(0, 50)}...</p>
            <div className="flex items-center">
              <img
                src={user?.image}
                alt={user?.username}
                className="w-10 h-10 rounded-full mr-2"
              />
              <span className="mr-4">
                {user?.firstName} {user?.lastName}
              </span>
              <span>
                {new Date(
                  Date.now() -
                    Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365 * 10)
                ).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
