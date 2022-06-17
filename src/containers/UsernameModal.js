import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#6745cc',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: '#6745cc',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6745cc',
        },
    },
});

export default function UsernameModal() {
    const [username, setUsername] = useState("");
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [validationError, setValidationError] = useState(null);

    const navigate = useNavigate();

    const updateUsername = () => {
        if (!username) {
            setOpenSnackBar(true);
            setValidationError('Username is a required field');
        } else {
            setOpenSnackBar(false);
            sessionStorage.setItem("username", username);
            navigate('/posts');
        }
    };

    return (
        <Box>
            <Dialog open={true} fullWidth maxWidth="xs">
                <DialogTitle>Enter Username</DialogTitle>
                <DialogContent>
                    <CssTextField autoFocus margin="dense" id="name" label="Username" type="text" fullWidth variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} sx={{ background: '#f7f7fa', color: '#495057' }} />
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', pb: '24px' }}>
                    <Button onClick={updateUsername} variant="contained" sx={{
                        backgroundColor: '#6745cc',
                        fontWeight: 600,
                        textTransform: 'capitalize',
                        '&:hover': {
                            backgroundColor: '#6745cc',
                        }
                    }}>Update</Button>
                </DialogActions>
            </Dialog>
            {validationError && <Snackbar autoHideDuration={3000} open={openSnackBar} message={validationError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} onClose={() => setOpenSnackBar(false)} />}
        </Box>
    );
}
