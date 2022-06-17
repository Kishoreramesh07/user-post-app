import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';

export default function UsernameModal() {
    const [username, setUsername] = useState("")
    const [open, setOpen] = useState(true);

    const navigate = useNavigate();

    const updateUsername = () => {
        sessionStorage.setItem("username", username);
        setOpen(false);
        navigate('/posts')
    };

    return (
        <div>
            <Dialog open={open} fullWidth maxWidth="xs">
                <DialogTitle>Update Username</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" id="name" label="Username" type="text" fullWidth variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', pb: '24px'}}>
                    <Button onClick={updateUsername} variant="contained">Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
