import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../globalContext/ContextData";
import add from "../../assets/plus.png";
import bin from "../../assets/bin.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const nav = useNavigate();
  const deteleHandler = (id) => {
    const token = localStorage.getItem("token");
    if (confirm("Do You Want to Delete ")) {
      axios
        .delete(`https://iotex-ajgn.vercel.app/projects/delete/${id}`, {
          headers: { token: token },
        })
        .then((res) => {
          toast.success(res.data, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setProjects(projects.filter((item) => item._id != id));
        })
        .catch((err) => {
          toast.error("Something went wrong", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    } else {
      toast.info("Project Deletion Canceled", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const { navState, setNavState } = useContext(GlobalContext);
  useEffect(() => {
    setNavState(0);
    const token = localStorage.getItem("token");
    if (!token) {
      nav("/");
    }
    setLoading(true);
    axios
      .get("https://iotex-ajgn.vercel.app/projects/id", {
        headers: { token: token },
      })
      .then((res) => {
        setLoading(false);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  return (
    <div className="projects">
      {projects.map((item, id) => {
        return (
          <div
          onClick={()=>{
            nav(`/dash/${item._id}`)
           }}
            key={id}
            className="project"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <h4 style={{ color: "lightgreen" }}>{item.name.toUpperCase()}</h4>
              <h4 style={{ color: "white" }}>
                DEVICES:
                <span style={{ color: "yellow" }}> {item.devices.length}</span>
              </h4>
            </div>
            <img
              src={bin}
              width={25}
              height={25}
              style={{ marginTop: "-40px", marginRight: "-15px" }}
              onClick={() => deteleHandler(item._id)}
            />
          </div>
        );
      })}
      {projects.length == 0 && !isLoading ? (
        <center style={{ margin: "30px 0px", width: "100%" }}>
          NO PROJECTS YET
        </center>
      ) : (
        ""
      )}
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "50px",
          }}
        >
          <center style={{ fontSize: "25px" }}>Loading ....</center>
        </div>
      ) : (
        ""
      )}
      <div className="addDevice">
        <p>Create New Project to add all devices in one place</p>
        <Link to="/addProject">
          <div>
            <img src={add} />
          </div>
        </Link>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
export default Project;
