const NavigationSidebar = (d) => {
    $(document).ready(function () {
        $('#' + d).addClass('active');
    });
 return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter">
       </i>
     </a>
     <a href="../HomeScreen/index.html" id="HomeScreen" class="list-group-item list-group-item-action">
        <i class="fa-regular fa-building"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none d-none">Home</span>
     </a>
     <a href="../explore/index.html" id="ExploreScreen"  class="list-group-item list-group-item-action">
        <i class="fa-solid fa-hashtag"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none d-none">Explore</span>
     </a>
     <a href="../notifications.html" class="list-group-item list-group-item-action">
        <i class="fa-regular fa-bell"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none d-none">Notifications</span>
     </a>
     <a href="../messages.html" class="list-group-item list-group-item-action">
        <i class="fa-regular fa-envelope"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none d-none">Messages</span>
     </a>
     <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
        <i class="fa-regular fa-bookmark"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none d-none">Bookmarks</span>
     </a>
     <a href="../lists.html" class="list-group-item list-group-item-action">
        <i class="fa fa-bars"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none d-none">Lists</span>
     </a>
     <a href="../profile.html" class="list-group-item list-group-item-action">
        <i class="fa-regular fa-user"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none d-none">Profile</span>
     </a>
     <a href="#" class="list-group-item list-group-item-action">
        <i class="fa fa-ellipsis-h"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none d-none">More</span>
     </a>

   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet
     </a>
   </div>
 `);
}
export default NavigationSidebar;