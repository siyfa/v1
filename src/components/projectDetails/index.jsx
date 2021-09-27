import "./main.scss";

export default function ProjectDetails({ item, show }) {
  return (
    <div className="projectShow">
      <h1 onClick={show}>X</h1>
      <div className="container">
        <div className="right">
          <img src={item.img} alt="" />
        </div>
        <div className="left">
          <div className="projectDetails">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="icon">
              {item.url && (
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img src="assets/globe.png" alt="" />
                </a>
              )}
              {item.github && (
                <a href={item.github} target="_blank" rel="noreferrer">
                  <img src="assets/github.png" alt="" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
