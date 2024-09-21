import React, { useState, useEffect } from "react";
import "./Project.css";
import Footer from "./Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const handleOnChange = (e) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/priyankarpal/ProjectsHut/main/DB/projects.json"
        );
        const datas = await response.json();
        setData(datas);
        setFilteredData(datas);
        console.log(datas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data
      .map((mydata) => {
        const filteredProjects = mydata?.Projects?.filter((project) =>
          project.title.toLowerCase().includes(searchVal.toLowerCase())
        );
        return { ...mydata, Projects: filteredProjects };
      })
      .filter((mydata) => mydata.Projects.length > 0);

    setFilteredData(filtered);
  }, [searchVal, data]);

  return (
    <>
      <div className="upperText">
        <h2>Search for Cool Projects</h2>
        <input
          id="inp"
          type="text"
          placeholder="Search by project name"
          onChange={handleOnChange}
          value={searchVal}
        />
      </div>
      <div className="filter-btn">
        <button>Filter</button>
      </div>
      <div className="projects-container">
        {filteredData.length > 0 ? (
          filteredData.map((mydata) => (
            <div className="project-card" key={mydata.github_username}>
              <h3>{mydata.github_username}</h3>
              {mydata?.Projects?.[0] && (
                <>
                  <h4>{mydata.Projects[0].title}</h4>
                  <button
                    id="btn"
                    onClick={() => window.open(mydata.Projects[0].github_url)}
                  >
                    Github
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <p id="err">No projects available</p>
        )}
      </div>
      <div className="connect">
        <div className="linkedin">
          <i class="fa-brands fa-linkedin"></i>{" "}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
