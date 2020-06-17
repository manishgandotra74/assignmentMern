import axios from 'axios'

const insertUpdateUser = async (params) => {
    return axios.post("http://localhost:4000/user/insertUpdateUser", params)
};
const getUsers = async (id) => {
    return axios.get("http://localhost:4000/user/getUsers/"+ id)
};
const deleteUser = async (id) => {
    return axios.put("http://localhost:4000/user/deleteUser/"+ id)
};
export default {
    insertUpdateUser,
    getUsers,
    deleteUser
}