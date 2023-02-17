const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div>
                <img class="wd-follow-image" src=${who.avatarIcon} width="100%">
            </div>
            <div class="wd-follow-text ps-3">
                <p class="wd-text-title">${who.userName} <i class="fa-solid fa-circle-check" style="color:white"></i></p>
                <p class="wd-text-subtitle">${who.handle}</p>
            </div>
            <div>
                <button type="submit" class="btn btn-primary btn-block rounded-pill wd-follow-btn">Follow</button>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;