// authors
export const GET_ALL_AUTHORS = "/admin/author/";
export const GET_SINGLE_AUTHOR = (id) => `/admin/author/find/${id}`;
export const CREATE_AUTHOR = "/admin/author/create";
export const DELETE_AUTHOR = (id) => `/admin/author/delete/${id}`;
export const EDIT_AUTHOR = (id) => `/admin/author/update/${id}`;
// novels
export const GET_ALL_NOVELS = "/admin/novel/";
export const CREATE_NOVEL = "/admin/novel/create";
export const GET_SINGLE_NOVEL = (id) => `/admin/novel/find/${id}`;
export const EDIT_NOVEL = (id) => `/admin/novel/update/${id}`;
export const DELETE_NOVEL = (id) => `/admin/novel/delete/${id}`;
// reviews
export const GET_ALL_REVIEWS = "/admin/review/";
export const GET_REVIEWS_STATS = "/admin/review/stats";
export const GET_REVIEWS_BY_STATUS = (query) =>
  `/admin/review/?status=${query}`;
export const APPROVE_REVIEW = (id) => `/admin/review/approve/${id}`;
export const DISAPPROVE_REVIEW = (id) => `/admin/review/disapprove/${id}`;
export const DELETE_REVIEW = (id) => `/admin/review/delete/${id}`;
// states
export const GET_DASHBOARD_STATS = "/admin/stats";
export const GET_USER_STATS = "/admin/users/stats";
// users
export const GET_ALL_USERS = "/admin/users";
