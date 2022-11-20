import baby from "../images/baby.png";

export default function Header() {
  return (
    <div className="header">
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <img src={baby} className="baby-picture" />
      <button className="website-button" onClick={goToMyWebsite}>
        Go To my Website
      </button>
    </div>
  );

  function goToMyWebsite() {
    window.open("https://marcelobrasil.ca/");
  }
}
