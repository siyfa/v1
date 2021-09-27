//styles
import "./main.scss";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            siyfa
          </a>
          <div className="itemContainer">
            <PersonRoundedIcon className="icon" />
            <span>+234 813 899 36 80</span>
          </div>
          <div className="itemContainer">
            <MailRoundedIcon className="icon" />
            <span>siyanbolafaruk@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
