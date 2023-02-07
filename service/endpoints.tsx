export const BASE_DOMAIN = 'galogram.ru'
export const PATH = `https://${BASE_DOMAIN}/api/v1`;


const endpoints = {
    //auth
    signup: `${PATH}/auth/userRegistration/`,
    login: `${PATH}/auth/userLogin/`,
    logout: `${PATH}/auth/userLogout/`,
    updatePassword: `${PATH}/auth/setPassword/`,


    //users
    getProfileInfoByToken: `${PATH}/users/getProfileInfoByToken/`,
    updateProfileInfo: `${PATH}/users/updateProfileInfo/`,
    updateAvatar: `${PATH}/users/updateProfileAvatar/`,
    deleteAvatar: `${PATH}/users/deleteProfileAvatar/`,
    getUserFollowers: `${PATH}/users/getUserFollowersForToken/`,
    getUserFollowings: `${PATH}/users/getUserFollowingForToken/`,
    getUser: `${PATH}/users/getProfileInfoByParams/`,
    followUser: `${PATH}/users/subscribeToUser/`,
    unfollowUser: `${PATH}/users/unsubscribeToUser/`,
    getFollowers: `${PATH}/users/getFollowersUser/`,
    getFollowings: `${PATH}/users/getFollowingsUser/`,
    getComments: `${PATH}/posts/getCommentaries/`,


    //posts
    createPost: `${PATH}/posts/createPublications/`,
    getPosts: `${PATH}/posts/getPublications/`,
    getPost: `${PATH}/posts/getPublication/`,
    getSavedPosts: `${PATH}/posts/getSavingPublications/`,
    addComment: `${PATH}/posts/addComment/`,
    replyComment: `${PATH}/posts/addReplyComment/`,
    likePost: `${PATH}/posts/likePublication/`,
    savePost: `${PATH}/posts/savePublicationForUser/`,
    deletePost: `${PATH}/posts/deletePublication/`,
    getFeed: `${PATH}/posts/getFeedPublications/`,


    //stories
    getStories: `${PATH}/stories/getStories/`,
    createStories: `${PATH}/stories/createStories/`,
    reactToStories: `${PATH}/stories/addReaction/`,
    getFeedStories: `${PATH}/stories/getFeedStories/`,


    //messages
    sendMessage: `${PATH}/messages/sendMessage/`,
    messageFileUpload: `${PATH}/messages/uploadMessageAttachments/`,
    getDialogs: `${PATH}/messages/getDialogs/`,
    getChat: `${PATH}/messages/getMessages/`,
    deleteMessage: `${PATH}/messages/deleteMessage`,


    //socket
    socketUrl: `wss://${BASE_DOMAIN}/ws/baseSocket`,
    

    //search
    search: `${PATH}/search/baseSearch/`,


    //storage
    addFileToStorage: `${PATH}/storage/uploadContent/`,
}

export default endpoints;