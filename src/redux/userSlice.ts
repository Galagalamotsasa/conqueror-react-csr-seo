import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface UserState {
    user: any;
};

const initialState: UserState = {
    user: null
};

// 생성되는 슬라이스 객체
const userSlice = createSlice({
    name: "user",
    // state의 초기값을 지정
    initialState,
    // dispatch로 받아오는 액션에 따라 실행하는 리듀서 메서드
    reducers: {
        // setUser라는 액션을 받아 아래와 같이 state 변경
        setUser: (state, action) => {
            state.user = action.payload
        },
        removeUser: (state, action) => {
            state.user = action.payload
        },
    },
    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //         return {
    //             ...state
    //         };
    //     }
    // }
});


export const { setUser } = userSlice.actions;
export const selectUser = (state:RootState) => state.user;
export default userSlice.reducer;

// export type userStoreType = UserState;
// export const { setUser } = userSlice.actions;
// export default userSlice.reducer;