import { Box, Button, Link, TextField, Typography, useMediaQuery } from "@mui/material"
import GoogleIcon from "../assets/GoogleIcon"
import { useState } from "react";
import validate from "../utils/validation";

const LoginForm = () => {
    const matches = useMediaQuery('(min-width:0px)');
    const matches2 = useMediaQuery('(max-width:750px)');

    const [email, setEmail] = useState('')
    const [error, setError] = useState({})
    const handleNextButton = () => {
        alert(`All Good! Input -> ${email}`);
        setEmail('')
    };

    const handleEmailOrNumberInput = (e) => {
        setEmail(e.target.value)
        const errors = validate(e.target.value)
        setError(errors)
        console.log(errors)
    }

    return <Box
        sx={{
            my: 8,
            mx: 4,
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'inherit',
            overflowY: 'auto'
        }}
    >
        <Box
            sx={{
                zIndex: 999,
                mt: 1,
                display: 'flex',
                flexDirection: 'column',
                width: '-webkit-fill-available',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography variant="h6" sx={{ alignSelf: 'flex-start' }}>
                Login to Dashboard
            </Typography>
            <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email or Mobile number"
                name="email"
                autoComplete="email"
                autoFocus
                size='small'
                value={email}
                onChange={(e) => handleEmailOrNumberInput(e)}
                error={!!error.email || !!error.number}
                helperText={(error.email || error.number) &&
                    (<Typography color='error' variant="caption" sx={{ alignSelf: 'flex-start' }}>
                        {error.email || error.number}
                    </Typography>
                    )}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, textTransform: 'none' }}
                size='small'
                onClick={handleNextButton}
                disabled={!!error.email || !!error.number || !email.length}
            >
                Next
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'inherit' }}>
                <Box sx={{ height: '1px', width: '40%', border: '1px solid #8080804f' }}></Box>
                <Box sx={{ margin: 'auto' }}>
                    or
                </Box>
                <Box sx={{ height: '1px', width: '40%', border: '1px solid #8080804f' }}></Box>
            </Box>
            <Button
                size='small'
                variant="contained"
                sx={{ mt: 3, mb: 2, width: 'fit-content', textTransform: 'none' }}
                startIcon={
                    <Box sx={{ backgroundColor: 'white', width: '24px', height: '24px' }}>
                        <GoogleIcon />
                    </Box>}
            > Sign In With Google</Button>
        </Box>
        <Box sx={{
            mt: 3,
            ml: 2,
            minWidth: '90px',
            display: matches && matches2 ? 'inherit' : 'none',
        }}>
            <Typography variant='caption'>
                Need help? <Link href="#" underline='none'>Contact Us.</Link>
            </Typography>
        </Box>
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: ' center',
            justifyContent: 'flex-end',
            position: { xs: 'static', sm: 'absolute' },
            bottom: -50,
            height: 'fit-content',
            color: { xs: 'black', sm: 'white' }
        }}>
            <Typography variant='caption'>Protected by reCAPTCHA. Google</Typography>
            <Typography variant='caption'>
                <Link href="#" underline="none">
                    Privacy Policy
                </Link> & <Link href="#" underline="none">
                    Terms of Service
                </Link> apply.</Typography>
        </Box>
    </Box>
}

export default LoginForm