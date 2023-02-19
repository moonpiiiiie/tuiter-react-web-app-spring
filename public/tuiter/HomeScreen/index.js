import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../HomePostList/index.js";
import MidExploreComponent from "../explore/MidExploreComponent.js";

function homeComponent() {
   $('#wd-homescreen').append(`
       <h2>Home Screen</h2>
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar("HomeScreen")}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 text-white">
   ${PostList()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    ${PostSummaryList()}
   </div>
  </div>
   `);
   $("#HomeScreen").addClass("active");
}
$(homeComponent);