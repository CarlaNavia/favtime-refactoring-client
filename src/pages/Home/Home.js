import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TypeService from "../../lib/type-service";
import Navbar from "../../components/common/Navbar/Navbar";
import TypesList from "../../components/services/TypesList";
import "./Home.css"

function Home() {
  const [types, setTypes] = useState([]);

  const getAllTypes = () => {
    TypeService.getAllTypes().then((result) => {
      setTypes(result);
    });
  };
  useEffect(() => {
    getAllTypes();
  }, []);

  return (
    <div>
      <Navbar />

      <main>
        <article>
          <h2 className="home-title">What are you looking for?</h2>
        </article>
        <article>
          <TypesList types={types} />
        </article>
      </main>

      <Link to="/service/create">ADD SERVICE</Link>
    </div>
  );
}
export default Home;
