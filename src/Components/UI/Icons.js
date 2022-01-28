import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import classes from "./Icons.module.css";

function Icons(props) {
  return (
    <ul className={classes.icons}>
      <li>
        <a
          href="https://github.com/thehasanovv"
          target="noreferrer"
          style={{ color: props.color }}
        >
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/elnur-hasanov-359a07227/"
          target="noreferrer"
          style={{ color: props.color }}
        >
          <LinkedInIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/elnur.hasanov.senator"
          target="noreferrer"
          style={{ color: props.color }}
        >
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/elnur.hassan/"
          target="noreferrer"
          style={{ color: props.color }}
        >
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a href="mailto:hasanov.95@gmail.com" style={{ color: props.color }}>
          <MailOutlineIcon />
        </a>
      </li>
    </ul>
  );
}

export default Icons;
