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
