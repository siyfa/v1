//styles
import "./main.scss";
//components
import PortfolioList from "../PortfolioList";
import { useState } from "react";

//data
import { apiPortfolio, webPortfolio, designsPortfolio } from "../../data";
import { useEffect } from "react";
import ProjectDetails from "../projectDetails";
export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const [showProject, setShowProject] = useState(false);
  const [item, setItem] = useState({});

  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "api",
      title: "Api",
    },
    {
      id: "designs",
      title: "Graphics Designs",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "api":
        setData(apiPortfolio);
        break;
      case "designs":
        setData(designsPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  const show = (id) => {
    setShowProject(!showProject);
    const project = data.filter((d) => d.id === id);
    setItem(project[0]);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            key={item.id}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, i) => (
          <div className="item" onClick={() => show(d.id)} key={i}>
            <img src={d.img1} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      {showProject && <ProjectDetails item={item} show={show} />}
    </div>
  );
}
