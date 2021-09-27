import { useState } from "react";
import "./main.scss";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Web Design",
      desc: "I do not just have keen interest in designing a beautiful ui for websites, I also make them look responsive on all devices. This has been proven on the websites I have worked on alone and those I colloborated with teams.",
      img: "assets/frontend.png",
      html: "assets/tools/html.png",
      css: "assets/tools/css.png",
      sass: "assets/tools/sass.png",
      bootstrap: "assets/tools/bootstrap.png",
      angular: "assets/tools/angular.png",
      javascript: "assets/tools/javascript.png",
      material: "assets/tools/material-ui.png",
      react: "assets/tools/react.png",
    },
    {
      id: "2",
      title: "Web Developer",
      desc: "I handle frontend projects combined with backend integration to meet the product mvp. Basically, I use MERN stack technologies to deliver for clients and personal projects. Web protocols, SEO, hosting that are other integration needed to make websites go live and meet its audiences are part of services render.",
      img: "./assets/webdev.png",
      node: "assets/tools/nodejs.png",
      mongodb: "assets/tools/mongodb.png",
      express: "assets/tools/express.png",
      react: "assets/tools/react.png",
      angular: "assets/tools/angular.png",
      firebase: "assets/tools/firebase.png",
      javascript: "assets/tools/javascript.png",
    },
    {
      id: "3",
      title: "Graphics Designer",
      desc: "Experience with using adobe tools and others to create perfect graphics that represent client's media message and images.",
      img: "./assets/websitebuilder.png",
      canva: "assets/tools/canva.png",
      photoshop: "assets/tools/photoshop.png",
      corel: "assets/tools/coreldraw.png",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d, i) => (
          <div className="container" key={i}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <div className="icons">
                    {d.node && <img src={d.node} alt="" />}
                    {d.express && (
                      <img className="iconImg" src={d.express} alt="" />
                    )}
                    {d.mongodb && <img src={d.mongodb} alt="" />}
                    {d.html && <img src={d.html} alt="" />}
                    {d.css && <img src={d.css} alt="" />}
                    {d.javascript && <img src={d.javascript} alt="" />}
                    {d.react && (
                      <img src={d.react} alt="" className="iconImg" />
                    )}
                    {d.angular && <img src={d.angular} alt="" />}
                    {d.sass && <img src={d.sass} alt="" />}
                    {d.bootstrap && <img src={d.bootstrap} alt="" />}
                    {d.firebase && <img src={d.firebase} alt="" />}
                    {d.canva && (
                      <img src={d.canva} alt="" className="iconImg" />
                    )}
                    {d.photoshop && <img src={d.photoshop} alt="" />}
                    {d.corel && (
                      <img src={d.corel} alt="" className="iconImg" />
                    )}
                    {d.material && (
                      <img className="iconImg" src={d.material} alt="" />
                    )}
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
