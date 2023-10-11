import { Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const BottomFeed = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Toolbar
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<Typography
				sx={{
					fontSize: isMobile ? '9px' : '13px',
					color: '#BABABA',
					cursor: 'pointer',
					':hover': {
						// just add underline on hover
						textDecoration: 'underline',
					},
				}}>
				14.14 GB of 15 GB (94%) used
			</Typography>
			<Typography
				sx={{
					fontSize: isMobile ? '9px' : '13px',
					color: '#BABABA',
					cursor: 'pointer',
					':hover': {
						// just add underline on hover
						textDecoration: 'underline',
					},
				}}>
				Terms · Privacy · Program Policies
			</Typography>
			<Typography
				sx={{
					fontSize: isMobile ? '9px' : '13px',
					cursor: 'pointer',
					':hover': {
						// just add underline on hover
						textDecoration: 'underline',
					},
					color: '#BABABA',
				}}>
				Last account activity: 1 hour ago
			</Typography>
		</Toolbar>
	);
};

export default BottomFeed;
