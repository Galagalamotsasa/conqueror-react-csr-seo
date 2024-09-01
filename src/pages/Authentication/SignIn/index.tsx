import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';

// redux-toolkit
// import { wrapper } from "@redux/store";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { selectUser, setUser } from "@redux/userSlice";
import { signInApi } from '@apis/index';

interface Props {
    setAuthView: (authView: boolean) => void,
}

const SignIn = (props: Props) => {
    const [userEmail, setEmail] = useState<string>('');
    const [userPassword, setPassword] = useState<string>('');
    const [cookies, setCookies] = useCookies();
    const dispatch = useAppDispatch();
    const userState = useAppSelector(selectUser);
    const { setAuthView } = props;

    const signInHandler = async ()=> {
        if (userEmail.length === 0 || userPassword.length === 0) {
            alert('Check your ID or Password plz.');
            return;
        }

        const data = {
            userEmail,
            userPassword,
        }
        const signInResponse = await signInApi(data);

        if (!signInResponse) {
            alert("Login failed!"); 
            return false;
        };

        if (!signInResponse.result) {
            alert(signInResponse.message);
            return;
        }
        const { token, exprTime, userEntity } = signInResponse.data;
        const expires = new Date();
        expires.setMilliseconds(expires.getMilliseconds() + exprTime);
        
        setCookies('token', token, { expires });
        console.log(userEntity);
        dispatch(setUser(userEntity));
    };

    const LogoutHandler = () => {
        dispatch(setUser(false));
    };
  return (
    <Card sx={{ minWidth: 275, maxWidth: "50vw", padding: 4 }}>
        <Box>
            <Typography variant='h5'>Login</Typography>
        </Box>
        <Box height={'50vh'}>
            <TextField
                fullWidth
                label="email"
                type="email"
                variant='standard'
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                fullWidth
                label="passWord"
                type="passWord" 
                variant='standard'
                onChange={(e) => setPassword(e.target.value)}
            /> 
        </Box>
        <Box component={'div'}>
            <Button fullWidth onClick={() => signInHandler()} color="primary" variant="contained">Sign in</Button>
        </Box>
        <Box component={'div'} display={'flex'} mt={2}>
            <Typography>First time here?</Typography>
            <Typography fontWeight={800} ml={1} onClick={() => setAuthView(true)} color={'primary'}>
                Sign Up
            </Typography>
            {/* <Button fullWidth onClick={() => LogoutHandler()} color="primary" variant="contained">Logout</Button> */}
        </Box>
    </Card>
  );
};

// Nextjs 사용시
// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) =>
//     async ({ params }) => {
//         // 초기 상태를 설정할 수 있고, 커스텀 로직을 추가할 수 있다.
//         // 서버단에서 Redux 액션을 수행할 수 있다.
//         store.dispatch(setUser(false));
//         console.log('State on Server', store.getState());
//         return {
//             props: {}
//         }
//     }
// )

export default SignIn;