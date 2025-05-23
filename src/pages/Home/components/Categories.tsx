// hooks
import { useEffect, useState } from "react";

// components
import { Container } from "../../../components/helpers/Container";
import { API_ENPOINTS, API_URL } from "../../../constants/api";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";

// utils
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/${API_ENPOINTS.postsTags}`)
      .then((res) => setCategories(res.data))
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  }, []);

  return (
    <section>
      <Container>
        <ul className="flex overflow-auto items-center gap-[91px] py-[22px]">
          {categories.map((category) => (
            <Link key={uuidv4()} to={`/category/${category}`}>
              <li className="text-es-gray text-sm">{category}</li>
            </Link>
          ))}
        </ul>
      </Container>
      <Toaster />
    </section>
  );
};
