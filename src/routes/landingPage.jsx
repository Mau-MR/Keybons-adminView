import "./landigPage.css";
import SideBtn from "../containers/SideBtnContainer";
import EmployeePerformance from "../components/employeePerformance";

//This is going to be the main root of the adminView
const LandingPage = () => {
  return (
    <div className="main-page">
      <div className="navbar">navbar</div>
      <div className="main-content">
        <div className="left-bar side-bars">
          <SideBtn />
        </div>
        <div className="content-bar">
          <EmployeePerformance
            name="Mauricio E."
            surname="Merida Rivera"
            percentage={50}
            qty={35}
            color="rgba(79,36,175,1)"
          />
        </div>
        <div className="right-bar side-bars">rightBar</div>
      </div>
    </div>
  );
};
export default LandingPage;
