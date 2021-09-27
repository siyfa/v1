import "./main.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mr Pere Joshep",
      title: "Asha Ambassador",
      instagram: "https://www.instagram.com/abinipere/",
      img: "assets/people/paul.jpg",
      icon: "assets/instagram.png",
      desc: "I'd like to thank you Mr. Faruk for the fantastic job you did with my organisation's website. Truly, you're good at what you do, and I won't fail to recommend you in any capacity. Our site looks new, and all functionalities as expected are working perfectly fine. I appreciate you and look forward to working with you again.",
      featured: false,
    },
    {
      id: 2,
      name: "Mr Onaih Paul",
      title: "Designer at Parkview Astoria Hotel, Ikoyi",
      instagram: "https://www.instagram.com/reginaldpaulite",
      img: "assets/people/jo.jpg",
      icon: "assets/instagram.png",
      desc: "Collaborated few times on projects and he's such a focus team member that has desires for what he's doing. I enjoy every moments of working with him and looking forward to more collaborations. ",
      featured: true,
    },
    {
      id: 3,
      name: "Miss Abosede",
      title: "Program Manager at Fhenpin Limited",
      instagram: "https://www.instagram.com/mojisinuola_fagbayi/",
      img: "assets/people/bose.jpg",
      icon: "assets/instagram.png",
      desc: "Mr Faruk has challended my growth as an individual and as a creative designer at my place of work. He mentored me on graphics skills and how to be creative with it. I have been able to thrive in my feild with pushes and aids he has given me. I appreciate him.",
      featured: false,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "cards featured" : "cards"}>
            <div className="top">
              <img src="assets/right-arrow.png" alt="" className="left" />
              <img src={d.img} alt="" className="user" />
              <a href={d.instagram} target="_blank" rel="noreferrer">
                <img src={d.icon} alt="" className="right" />
              </a>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
