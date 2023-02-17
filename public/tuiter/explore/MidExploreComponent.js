import PostSummaryList from "../PostSummaryList/index.js";

const MidExploreComponent = () => {
    return(`
     <div class="wd-search-field mt-2 mb-3">
                    <div class="wd-search">
                        <i class="fa fa-search" aria-hidden="true" style="color:lightgray"></i>
                        <input placeholder=" Search Tuiter" style="color:white">
                    </div>
                    <i class="fa fa-thin fa-gear fa-2x" style="color:rgb(88,148,205)"></i>
     </div>
                <ul class="nav nav-tabs">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link active" data-bs-toggle="tab" href="#home" aria-selected="true" role="tab">For you</a>
                  </li>
                    <li class="nav-item pb-2">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item pb-2">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item pb-2">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item pb-2 d-md-inline d-none">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>
           ${PostSummaryList()}
    `);
}
export default MidExploreComponent;

