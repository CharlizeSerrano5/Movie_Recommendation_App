import { Container, Stack } from '@mui/material'
import InputBar from '../Components/InputBar'
import LoginButton from '../Components/LoginButton'
import GrayNavButton from '../Components/GrayNavButton'
import PhoneNumber from '../Components/PhoneNumber'
import SmallTopBar from '../Components/SmallTopBar'
function SignUpPage(){
    return(
        <div className="SignUp">
            <SmallTopBar Name={'Welcome'}></SmallTopBar>
            <Container>
                <Stack spacing={4}>
                        <InputBar Label={'Enter Username(email)'}></InputBar>
                        <InputBar Label={'Enter Stage name'}></InputBar>
                        <InputBar Label={'Enter password'}></InputBar>
                        <InputBar Label={'Re-enter password'}></InputBar>
                </Stack>
                <PhoneNumber></PhoneNumber>
                <InputBar Label={'Enter phone number'}></InputBar>
                <LoginButton></LoginButton>
                <GrayNavButton Label={'Get Recommendations'}></GrayNavButton>
                Already have an account?
            </Container>
            
        </div>
    )
}

export default SignUpPage