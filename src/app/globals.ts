
// ____________ Account____________
export const createAccountUrl = 'http://localhost:8080/account/create_account';
export const loginUrl = 'http://localhost:8080/account/login';
export const logoutUrl = 'http://localhost:8080/account/logout';
export const updateAccount = 'http://localhost:8080/account/update_account';
export const getProfile = 'http://localhost:8080/account/profile';

// ____________ Videos____________
export const accountVideos = 'http://localhost:8081/account/video';
export const getVideos = 'http://localhost:8081/video';
export const saveVideo = 'http://localhost:8081/video';

// ____________ Comments____________
export const saveComment = 'http://localhost:8080/video/comment';
export const saveCommentReply = 'http://localhost:8080/video/reply';
export const getCommentsFunction = function (date: Date): string {
  return `http://localhost:8080/video/comment/{${date}}`;
}
