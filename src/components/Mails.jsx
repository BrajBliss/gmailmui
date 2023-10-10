import { List, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import Mail from './Mail';

const theme = createTheme({
	typography: {
		fontFamily: '"Inter", sans-serif',
		allVariants: {
			color: '#fff',
		},
		fontSize: 13,
	},
	components: {
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					color: '#CECECE',
				},
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					borderTopRightRadius: '0',
					borderBottomRightRadius: '0',
					'&:hover': {
						backgroundColor: '#414141',
					},
				},
			},
		},
	},
	palette: {
		background: {
			default: '#111111',
		},
	},
});

// CHECKBOX STAR SenderName UnreadCount Subject Snippet Time

const Mails = () => {
	return (
		<ThemeProvider theme={theme}>
			<List>
				<Mail />
				<Mail />
				<Mail />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
				<Mail read />
			</List>
		</ThemeProvider>
	);
};

export default Mails;
