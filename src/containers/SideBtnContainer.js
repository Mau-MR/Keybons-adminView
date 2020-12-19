import {Dashboard, DateRange, Equalizer, Security, Pageview, Favorite} from "@material-ui/icons"
import SideBtn from "../components/SideBtn";
import {Component} from "react";

//This is going to keep a bunch of personalized sidebtns

class SideBtnContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedButton: 0
        }
        //match between icons and titles of the buttons
        //Just in case of optimization
        this.btnElements = {
            Dashboard,
            DateRange: "Calendario",
            Equalizer: "Estadisticas",
            Security: "Seguridad",
            Pageview: "Inventario",
            Favorite: "Clientes"
        }
    }


    const
    selectBtn = (index) => {
        this.setState(
            {
                clickedButton: index
            }
        )
    }
    const
    generateBtns = () => {
        //TODO: Find a way to generate the buttons dynamically
    }

    render() {
        const {clickedButton} = this.state;
        return (<div>
                <SideBtn icon={<Dashboard/>} title={"Dashboard"} action={this.selectBtn} index={0}
                         selectBtnIndex={clickedButton}/>
                <SideBtn icon={<DateRange/>} title={"Calendario"} action={this.selectBtn} index={1}
                         selectBtnIndex={clickedButton}/>
                <SideBtn icon={<Equalizer/>} title={"Estadisticas"} action={this.selectBtn} index={2}
                         selectBtnIndex={clickedButton}/>
                <SideBtn icon={<Security/>} title={"Seguridad"} action={this.selectBtn} index={3}
                         selectBtnIndex={clickedButton}/>
                <SideBtn icon={<Pageview/>} title={"Inventario"} action={this.selectBtn} index={4}
                         selectBtnIndex={clickedButton}/>
                <SideBtn icon={<Favorite/>} title={"Clientes"} action={this.selectBtn} index={5}
                         selectBtnIndex={clickedButton}/>
            </div>
        );
    }
}

export default SideBtnContainer;