const PostItem = (post) => {
    return(`
    <div class="d-flex w-100">
        <div class="me-2">
            <img class="wd-avatar-img" src=${post.avatarIcon}>
        </div>
        <div class="">
            <div>
                <span class="wd-author">${post.userName} <i class="fa-solid fa-circle-check"></i></span>
                <span class="wd-author-handle">${post.handleName} · ${post.time}</span>
                <span class="wd-dots-gray"><i class="fa fa-ellipsis-h"></i></span>
            </div>
            <p class="wd-post-content">
                ${post.tuitContent}
            </p>
            <div class="wd-post-description">
                <div class="wd-post-img-container">
                    <img class="wd-post-img" src=${post.tuitImage}>
                </div>
                ${post.cardTitle ?
                     `<div class="wd-post-content-container">
                         <span class="wd-post-title">${post.cardTitle}</span>
                         <p class="wd-post-des">${post.cardText}</p>
                     </div>` : ''
                  }
            </div>
            <div class="wd-icons">
                <span class="pe-4"><i class="fa-regular fa-comment me-2" style="color:rgb(83,83,83)"></i> ${post.comment}</span>
                <span class="pe-4"><i class="fa-solid fa-retweet me-2" style="color:rgb(83,83,83)"></i> ${post.retuit}</span>
                <span class="pe-4">️<i class="fa-regular fa-heart me-2" style="color:rgb(83,83,83)"></i>️ ${post.like}</span>
                <span class="pe-4"><i class="fa-solid fa-arrow-up-from-bracket me-2" style="color:rgb(83,83,83)"></i>️</span>
            </div>
        </div>
    </div>

    `);
}

export default PostItem;