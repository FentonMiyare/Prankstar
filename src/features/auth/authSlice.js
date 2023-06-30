import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'users',
	initialState: {
		id: null,
		email: null,
		// token: null,
	},
	reducers: {
		// actions:
		setUser(state, action) {
			state.id = action.payload.id;
			state.email = action.payload.email;
			// state.token = action.payload.token;
		},
		removeUser(state) {
			state.id = null;
			state.email = null;
			// state.token = null;
		},
	},
});

export const selectAllUsers = (state) => state.users;

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
