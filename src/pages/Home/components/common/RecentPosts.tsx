// hooks
import { useEffect, useState } from "react";

// utils
import axios from "axios";

// constants
import { API_ENPOINTS, API_URL } from "../../../../constants/api";

// types
import type { IPost } from "../../../../constants/interfaces";

// components
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "../../../../components/common/Loader";
import { RecentPost } from "./RecentPost";
import { PostsTitle } from "./PostsTitle";
import { Container } from "../../../../components/helpers/Container";

export const RecentPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/${API_ENPOINTS.posts}?limit=6&skip=2`)
      .then((res) => {
        setPosts(res.data.posts);
        console.log(res.data.posts);
      })
      .catch((e) => {
        toast.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="pt-[60px] pb-[108px]">
      <Container>
        <PostsTitle text="Most Recent" />
        <div className="grid md:grid-cols-3 gap-6 mt-[33px]">
          {posts.map((post: IPost) => (
            <RecentPost key={post.id} data={post} />
          ))}
        </div>
        {loading && <Loader />}
      </Container>
      <Toaster />
    </section>
  );
};
