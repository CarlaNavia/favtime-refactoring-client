import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TypeService from "../../lib/type-service";
import Navbar from "../../components/common/Navbar/Navbar";
import TypesList from "../../components/services/TypesList";
import "./Home.css";

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
        <article className="home-page">
          <h2 className="home-title">What are you looking for?</h2>

          <TypesList types={types} />
          <div className="newservice-btn">
            <Link className="btn-link" to="/service/create">
              Add a service
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
export default Home;
