import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import MainBody from "./Body/MainBody";
import Footer from "./Footer/Footer";

const scrollToTargetAboutMe = () => {
  // Scroll to the target div when the button is clicked
  document
    .getElementById("targetAboutMe")
    .scrollIntoView({ behavior: "smooth" });
};
function App() {
  return (
    <div className="App">
      <Header scrollToTarget={scrollToTargetAboutMe} />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
