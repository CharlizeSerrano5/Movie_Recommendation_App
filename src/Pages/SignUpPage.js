import { Container, Stack } from '@mui/material'
import InputBar from '../Components/InputBar'
import LoginButton from '../Components/LoginButton'
import GrayNavButton from '../Components/GrayNavButton'
function SignUpPage(){
    return(
        <div className="SignUp">
            <Container>
                <Stack>
                        <InputBar Label={'Enter Username(email)'}></InputBar>
                        <InputBar Label={'Enter Stage name'}></InputBar>
                        <InputBar Label={'Enter password'}></InputBar>
                        <InputBar Label={'Re-enter password'}></InputBar>
                </Stack>
                

                <InputBar Label={'Enter phone number'}></InputBar>
                <LoginButton></LoginButton>
                <GrayNavButton Label={'Get Recommendations'}></GrayNavButton>
                Already have an account?
            </Container>
            
        </div>
    )
}

export default SignUpPage