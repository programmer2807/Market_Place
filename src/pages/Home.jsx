import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useEffect, useState } from "react";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      let result = await fetch(API_URL);
      let data = await result.json();
      setPosts(data);
    } catch (error) {
      alert("Error in fetching the data");
    }
    setLoading(false);
  }

  useEffect(() => { fetchData(); }, []);

  return (
    <div>
      {loading ? <Spinner /> :
        posts.length > 0 ?
          (<div className="grid grid-cols-4 gap-4">
            {posts.map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>) :
          <div>
            <p>No Data Found</p>
          </div>
      }
    </div>
  );
};

export default Home;
