import GrayNavButton from "../Components/GrayNavButton";
import LoginButton from "../Components/LoginButton";
import { Grid, Container, Stack } from "@mui/material";
import InputBar from "../Components/InputBar";
import { Link } from "react-router-dom";
import SmallTopBar from "../Components/SmallTopBar";
import PhoneNumber from "../Components/PhoneNumber";

function LoginPage(){
    return(
        <div className="LogInPage">
            <SmallTopBar Name={'Welcome'}></SmallTopBar>
            <Container>
                <Stack spacing={4}>
                    <Stack spacing={2}>
                        <InputBar Label={'Enter Username (email)'}></InputBar>
                        <InputBar Label={'Enter password'}></InputBar>
                    </Stack>
                    <PhoneNumber></PhoneNumber>
                    <Stack spacing={2}>
                        <Link to={'/Recommendations'}><LoginButton></LoginButton></Link>
                        <GrayNavButton Label="Get Recommendations"></GrayNavButton>
                    </Stack>
                    
                    Need an account?  
                </Stack>
                  
            </Container>
            
        </div>
    )
}

export default LoginPage;