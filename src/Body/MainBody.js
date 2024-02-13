import AboutMe from './AboutMe';
import Introduction from './Introduction';
import MyContactInfo from './MyContactInfo';
import MyEducation from './MyEducation';
import MyResearch from './MyResearch';
import MyResearchInterest from './MyResearchInterest';
import MyTechAndTools from './MyTechAndTools';
import MyWorkExperience from './MyWorkExperience';
import ResearchProject from './ResearchProject';
import Statement from './Statement';

const MainBody = () => {
  return (
    <div>
      <Introduction />
      <AboutMe />
      <MyEducation />
      <MyWorkExperience />
      <MyResearch />
      <ResearchProject />
      <MyTechAndTools />
      <MyResearchInterest />
      <MyContactInfo />
    </div>
  );
};
export default MainBody;
