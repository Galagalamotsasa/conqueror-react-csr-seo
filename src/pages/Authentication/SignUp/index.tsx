import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { signUpApi } from '@apis/index';

interface Props {
    setAuthView: (authView: boolean) => void,
}

export default function SignUp(props: Props) {
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userPasswordCheck, setUserPasswordCheck] = useState<string>('');
    const [userNickname, setUserNickname] = useState<string>('');
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
    const [userAddress, setUserAddress] = useState<string>('');
    const [userAddressDetail, setUserAddressDetail] = useState<string>('');

    const { setAuthView } = props;

    const signUpHandler = async () => {
        const data = {
            userEmail,
            userPassword,
            userPasswordCheck,
            userNickname,
            userPhoneNumber,
            userAddress,
            userAddressDetail,
        };

        const signUpResponse = await signUpApi(data);

        if (!signUpResponse) {
            alert("Failed to Sign Up.");
            return false;
        };

        if (!signUpResponse.result) {
            alert("Failed to Sign Up.");
            return false;
        };

        alert("Account created successfully!");
        setAuthView(false);
    };

  return (
    <Card sx={{ minWidth: 275, maxWidth: "50vw", padding: 4 }}>
        <Box>
            <Typography variant='h5'>Sign Up</Typography>
        </Box>
        <Box height={'50vh'}>
            <TextField fullWidth label="email address" variant="standard" type='email' onChange={(e) => setUserEmail(e.target.value)}/>
            <TextField fullWidth label="password" variant="standard" type='password' onChange={(e) => setUserPassword(e.target.value)}/>
            <TextField fullWidth label="password check" variant="standard" type='password' onChange={(e) => setUserPasswordCheck(e.target.value)}/>
            <TextField fullWidth label="nickname" variant="standard" onChange={(e) => setUserNickname(e.target.value)}/>
            <TextField fullWidth label="phone number" variant="standard" onChange={(e) => setUserPhoneNumber(e.target.value)}/>
            <TextField fullWidth label="address" variant="standard" onChange={(e) => setUserAddress(e.target.value)}/>
            <TextField fullWidth label="address detail" variant="standard" onChange={(e) => setUserAddressDetail(e.target.value)}/>
        </Box>
        <Box component={'div'}>
            <Button fullWidth onClick={() => signUpHandler()} color="primary" variant="contained">
                Sign up
            </Button>
        </Box>
        <Box component={'div'} display={'flex'} mt={2}>
            <Typography>You already have an account?</Typography>
            <Typography fontWeight={800} ml={1} onClick={() => setAuthView(false)} color={'primary'}>
                Login
            </Typography>
        </Box>
    </Card>
  )
}
