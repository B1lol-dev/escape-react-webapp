import { Container } from "../../../components/helpers/Container";
import { PostsTitle } from "./common/PostsTitle";
import { FeaturedPost } from "./common/FeaturedPost";
import { useEffect, useState } from "react";
import { API_ENPOINTS, API_URL } from "../../../constants/api";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Loader } from "../../../components/common/Loader";
import type { IPost } from "../../../constants/interfaces";

export const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/${API_ENPOINTS.posts}?limit=2`)
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
    <section className="bg-es-light-gray pt-[60px]">
      <Container>
        <PostsTitle text="Featured Posts" />
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {posts.map((post: IPost) => (
            <FeaturedPost key={post.id} data={post} />
          ))}
        </div>
        {loading && <Loader />}
      </Container>
      <Toaster />
    </section>
  );
};
