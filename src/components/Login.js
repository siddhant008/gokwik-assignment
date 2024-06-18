import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import LoginForm from './LoginForm';
import { Box, Link, Typography, useMediaQuery } from '@mui/material';

export default function Login() {
    const matches = useMediaQuery('(min-width:600px)');
    const matches2 = useMediaQuery('(max-width:750px)');

    return (
        <Box sx={{
            height: '100vh',
            p: { xs: 4, sm: '100px' },
            backgroundColor: '#001362',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <CssBaseline />
            <Box sx={{
                display: { xs: 'none', sm: 'block' },
                bgcolor: '#fafbff',
                width: '100%',
                height: '100%',
                p: '20px 370px 80px 20px',

            }}>
                <Box sx={{ bgcolor: '#fff', height: '100%', width: '100%' }}>
                    {/* Image or other components */}
                </Box>
                <Box sx={{
                    mt: 3,
                    ml: 2,
                    minWidth: '90px',
                    display: matches && matches2 ? 'none' : 'inherit',
                }}>
                    <Typography variant='caption'>
                        Need help? <Link href="#" underline='none'>Contact Us.</Link>
                    </Typography>
                </Box>
            </Box>
            <Box component={Paper} elevation={6} square
                sx={{
                    minWidth: '320px',
                    width: { xs: '-webkit-fill-available', sm: 'auto' },
                    height: '-webkit-fill-available',
                    position: { xs: 'inherit', sm: 'absolute' },
                    right: 150, bottom: 80, top: 80
                }}>
                <LoginForm />
            </Box>
        </Box >
    );
}