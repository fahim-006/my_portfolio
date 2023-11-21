import AboutMe from "./AboutMe";
import Introduction from "./Introduction";
import MyEducation from "./MyEducation";
import MyResearch from "./MyResearch";
import MyWorkExperience from "./MyWorkExperience";
import Statement from "./Statement";

const MainBody = () => {
  return (
    <div>
      <Introduction />
      <AboutMe />
      <MyResearch />
      <MyEducation />
      <MyWorkExperience />
      <Statement />
    </div>
  );
};
export default MainBody;
