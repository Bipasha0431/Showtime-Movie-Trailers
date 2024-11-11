import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import VideoBg from './VideoBg';

export default function MovieBox() {
    const { movieOpen, movieId } = useSelector((store) => store.movie);

    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setOpen(false));
    }


    return (
        <React.Fragment>

            <Dialog
                open={movieOpen}
                fullWidth
                maxWidth={false}
                PaperProps={{
                    style: {
                        width: '70vw',
                        height: '90vh',
                    },
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <VideoBg id={movieId} bool={true} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>

                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}
