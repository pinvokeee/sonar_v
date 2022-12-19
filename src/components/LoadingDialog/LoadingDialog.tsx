import { Box, CircularProgress, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material"

export interface LoadingDialogProps 
{
    isOpen : boolean,
}

export const LoadingDialog = (props : LoadingDialogProps) =>
{
    return (
        <Dialog open={props.isOpen}>
            <DialogTitle id="alert-dialog-title">読み込み中</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex' }}>
                    <Typography>しばらくお待ち下さい...</Typography>
                    <CircularProgress />
                </Box>
            </DialogContent>
        </Dialog>
    )
}