import { useState } from "react";
import { send } from "emailjs-com";

import "./main.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const toSend = {
      from_name: fullname,
      to_name: "Siyfa",
      message: body,
      reply_to: email,
    };
    send(
      "service_u96ke6l",
      "template_vc4rh1b",
      toSend,
      "user_f5TzIJF2uDHddB4Rc2pjg"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setMessage(!message);
    setLoading(false);
    setFullname(" ");
    setEmail(" ");
    setBody(" ");
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form
          onSubmit={handleSubmit}
          action="mailto:siyanbolafaruk@gmail.com"
          method="POST"
          autoComplete
        >
          <input
            type="text"
            placeholder="Enter Full Name"
            required
            autoComplete
            minLength="3"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email address"
            required
            autoComplete
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name=""
            id=""
            placeholder="Enter Message"
            required
            autoComplete
            minLength="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button type="submit">{loading ? "Sending..." : "Send"}</button>
          {message && <span>Thanks, I'll reply it ASAP :)</span>}
        </form>
        <div className="other">
          <div>
            <a href="https://github.com/siyfa" target="_blank" rel="noreferrer">
              <img src="assets/github.png" alt="" />
            </a>
            <a
              href="https://www.twitter.com/siiyfa"
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/twitter.png" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/siyanbola-faruk-70baa4132/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/linkedin.png" alt="" />
            </a>
            <a
              href="https://wa.me/2348138993680"
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/mobile.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
