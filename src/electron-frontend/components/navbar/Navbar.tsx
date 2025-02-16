import "./navbar.css";
import "../../flex.css";
import IonIcon from "@reacticons/ionicons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container column">
      <div
        className="navbar-button"
        onClick={() => {
          navigate("/");
        }}
      >
        <IonIcon name="home-outline" />
      </div>
      <div
        className="navbar-button"
        onClick={() => {
          navigate("/docs");
        }}
      >
        <IonIcon name="book-outline" />
      </div>
      <div
        className="navbar-button"
        onClick={() => {
          navigate("/dev");
        }}
      >
        <IonIcon name="code-slash-outline" />
      </div>
      <div
        className="navbar-button"
        onClick={() => {
          navigate("/internet");
        }}
      >
        <IonIcon name="wifi-outline" />
      </div>
      <div
        className="navbar-button"
        onClick={() => {
          navigate("/pages");
        }}
      >
        <IonIcon name="document-text-outline" />
      </div>
      <div
        className="navbar-button"
        onClick={() => {
          navigate("/settings");
        }}
      >
        <IonIcon name="settings-outline" />
      </div>
      <div
        className="navbar-button end-button"
        onClick={() => {
          navigate("/about");
        }}
      >
        <IonIcon name="people-outline" />
      </div>
    </div>
  );
};

export default Navbar;
