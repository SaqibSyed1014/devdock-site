export const blogSharing = (socialPlatform :'linkedin' | 'facebook' | 'X') :void => {
    const currentBlogURL = encodeURIComponent(window.location.href);
    let url :string = '';
    switch (socialPlatform) {
        case "linkedin":
            url = `https://www.linkedin.com/sharing/share-offsite/?url=${currentBlogURL}`;
            break;
        case "facebook":
            url = `https://www.facebook.com/dialog/share?app_id=811715347841833&display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F}&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer`
            break;
        case "X":
            url = `https://x.com/intent/post?text=Check out this blog!:&url=${currentBlogURL}%0A%0A&hashtags=DevDock,DevDock Blogs`;
            break;
    }
    window.open(url, '_target');
}
