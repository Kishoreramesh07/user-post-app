import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar} from '@mui/material';

export default function UsernameModal() {
    const [username, setUsername] = useState("");
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [validationError, setValidationError] = useState(null);

    const navigate = useNavigate();

    const updateUsername = () => {
        if(!validationError){
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
                <DialogTitle>Update Username</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" id="name" label="Username" type="text" fullWidth variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', pb: '24px'}}>
                    <Button onClick={updateUsername} variant="contained">Update</Button>
                </DialogActions>
            </Dialog>
            {validationError && <Snackbar autoHideDuration={3000} open={openSnackBar} message={validationError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} onClose={() => setOpenSnackBar(false)} />}
        </Box>
    );
}
