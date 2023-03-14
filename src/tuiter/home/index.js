import TuitList from "../tuits/TuitList";
import WhatsHappening from "./whats-happening";

function HomeComponent() {
 return(
        <div style={{"position": "relative"}}>
        <h4>Home</h4>
        <WhatsHappening/>
        <TuitList/>
        </div>
 );
};
export default HomeComponent;