import "./landigPage.css"
import SideBtn from "../containers/SideBtnContainer";
import ProgressWidget from "../containers/ProgressWidgetContainer";

//This is going to be the main root of the adminView
const LandingPage = () => {
    return (
        <div className="main-page">
            <div className="navbar">navbar</div>
            <div className="main-content">
                <div className="left-bar side-bars">
                    <SideBtn/>
                </div>
                <div className="content-bar">
                    <ProgressWidget/>
                </div>
                <div className="right-bar side-bars">rightBar</div>
            </div>
        </div>
    );
}
export default LandingPage;