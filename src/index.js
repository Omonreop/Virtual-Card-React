import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

const socialMedia = [
  {
    icon: "fa-facebook",
    href: "https://www.facebook.com/",
  },
  {
    icon: "fa-instagram",
    href: "https://www.instagram.com/",
  },
  {
    icon: "fa-twitter",
    href: "https://www.twitter.com/",
  },
  {
    icon: "fa-linkedin",
    href: "https://www.linkedin.com/",
  },
  {
    icon: "fa-github",
    href: "https://www.github.com/",
  },
];

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <HighLight />
      </div>
    </div>
  );
}

function SocialButton({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={`fa ${icon}`}></i>
    </button>
  );
}

function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);
  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((data, index) => (
          <SocialButton icon={data.icon} link={data.href} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((data, index) => (
          <SocialButton icon={data.icon} link={data.href} />
        ))}
      </div>
    </>
  );
}

function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Laura Eve</div>
      </div>
      <div className="title">Web Engineer</div>
    </div>
  );
}

function Biodata() {
  return (
    <div className="desc">
      <p>
        My name is <b>Laura Eve</b> and I am an Engineer
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio earum
        laborum nihil? Modi, minus.
      </p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <button>
      <div className="height">{text}</div>
    </button>
  );
}

function HighLight() {
  return (
    <div className="buttons">
      <Badge text="PhD" />
      <Badge text="Front-End" />
      <Badge text="Back-End" />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
