import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Paper,
	TextField,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import React from 'react';

const Compose = ({ open, handleClose }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			hideBackdrop={true}
			PaperComponent={({ children }) => (
				<Paper
					elevation={3}
					sx={{
						position: 'fixed', // Fixed position
						bottom: 16, // Position from bottom
						right: 16, // Position from right
						maxWidth: isMobile ? 250 : 500, // Set a max width if needed
						width: 'auto', // Automatic width based on content
					}}>
					{children}
				</Paper>
			)}>
			<DialogTitle
				sx={{
					color: '#000',
					height: '10px',
					fontSize: '16px',
					padding: '10px 20px',
				}}>
				New Message
			</DialogTitle>
			<DialogContent>
				<TextField
					id='to'
					label='To'
					type='email'
					fullWidth
					variant='standard'
					InputProps={{
						style: {
							fontSize: '15px',
						},
					}}
				/>
				<TextField
					id='subject'
					label='Subject'
					type='text'
					fullWidth
					variant='standard'
					InputProps={{
						style: {
							fontSize: '15px',
						},
					}}
				/>
				<TextField
					id='content'
					label='Message'
					type='text'
					fullWidth
					variant='standard'
					InputProps={{
						style: {
							fontSize: '15px',
						},
					}}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Discard</Button>
				<Button onClick={handleClose}>Send</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Compose;
