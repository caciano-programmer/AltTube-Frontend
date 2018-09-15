
// ____________ Account____________
export const createAccountUrl = 'http://localhost:8080/account/create_account';
export const loginUrl = 'http://localhost:8080/account/login';
export const logoutUrl = 'http://localhost:8080/account/logout';
export const updateAccount = 'http://localhost:8080/account/update_account';
export const getProfile = 'http://localhost:8080/account/profile';

// ____________ Videos____________
export const saveVideo = 'http://localhost:8081/video';
export const accountVideos = function (id: number): string {
  return `http://localhost:8081/account/videos/id/${id}`;
};
export const getVideosByCategory = function (category: string): string {
  return `http://localhost:8081/video/category/${category}`;
};
export const getVideosByKeyword = function (keyword: string): string {
  return `http://localhost:8081/video/keyword/${keyword}`;
};

// ____________ Comments____________
export const saveComment = 'http://localhost:8080/video/comment';
export const saveCommentReply = 'http://localhost:8080/video/reply';
export const getCommentsFunction = function (date: Date): string {
  return `http://localhost:8080/video/comment/${{date}}`;
}
