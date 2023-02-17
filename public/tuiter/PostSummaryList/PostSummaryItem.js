const PostSummaryItem = (post) => {
    return(`
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <div>
                            <p class="wd-text-subtitle wd-gray-text">${post.topic}</p>
                            <p class="wd-text-title">${post.userName} <i class="fa-solid fa-circle-check"></i> <span class="wd-gray-text" style="font-weight:lighter">- ${post.time} </span> </p>
                            <p class="wd-text-title">${post.title}</p>
                            <p class="wd-text-subtitle">${post.tweets}</p>
                        </div>
                        <div class="wd-mid-sm-image">
                            <img class="wd-news-image" src=${post.image}>
                        </div>
                    </div>
                </a>
    `);
}

export default PostSummaryItem;