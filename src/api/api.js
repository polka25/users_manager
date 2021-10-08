import api from "./users";

const baseUrl = "/users/";

export const fetchUsers = () => {
  return api.get(baseUrl);
};

export const fetchUser = (userId) => {
  const fullUrl = `${baseUrl}/${userId}`;
  return api.get(fullUrl);
};

export const addUser = (newUser) => {
  return api.post(baseUrl, newUser);
};

export const deleteUser = (id) => {
  return api.delete(`${baseUrl}/${id}`);
};

export const editUser = (editedUser) => {
    const fullUrl = `${baseUrl}/${editedUser.id}`;
    return api.put(fullUrl,editedUser);
  };