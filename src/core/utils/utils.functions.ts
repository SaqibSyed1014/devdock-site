export const blogSharing = (socialPlatform :'linkedin' | 'facebook' | 'X', metaTitle :string) :void => {
    const currentBlogURL = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(metaTitle.split('|')[1]);
    let url :string = '';
    switch (socialPlatform) {
        case "linkedin":
            url = `https://www.linkedin.com/sharing/share-offsite/?url=${currentBlogURL}`;
            break;
        case "facebook":
            url = `https://www.facebook.com/dialog/share?app_id=811715347841833&display=popup&href=${currentBlogURL}&redirect_uri=${currentBlogURL}`
            break;
        case "X":
            url = `https://twitter.com/intent/tweet?text=${(title)}%0A&url=${currentBlogURL}%0A%0A&hashtags=DevDock,DevDock_Blogs`
            break;
    }
    window.open(url, '_blank', 'width=550,height=420');
}
