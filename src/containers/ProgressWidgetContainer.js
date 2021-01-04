import ProgressWidget from "../components/ProgressWidget";
import {AccountCircle} from "@material-ui/icons";

const ProgressWidgetContainer = () => {

    return (
        <div>
            <ProgressWidget icon={<AccountCircle/>}/>
        </div>
    )
};


export default ProgressWidgetContainer;