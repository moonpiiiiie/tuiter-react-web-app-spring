import PostSummaryList from "../post-summary-list";
import NavigationSidebar from "../navigation-sidebar";
import HomePostList from "./home-posts-list";
function HomeComponent() {
 return(
        <div style={{"position": "relative"}}>
          <HomePostList/>
        </div>


 );
};
export default HomeComponent;