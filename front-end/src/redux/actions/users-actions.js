import API from '../apis/user-action-api';


export function getUsers(id) {
	return async function (dispatch, getState) {
		try {
			let user = await API.getUsers(id);
			return user.data;
		} catch (err) {}
	};
}
export function insertUpdateUser(params) {
	return async function (dispatch, getState) {
		try {
			let user = await API.insertUpdateUser(params);
			return user.data;
		} catch (err) {}
	};
}
export function deleteUser(id) {
	return async function (dispatch, getState) {
		try {
			let user = await API.deleteUser(id);
			return user.data;
		} catch (err) {}
	};
}

