import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import TopFeed from './TopFeed';
import Mails from './Mails';
import BottomFeed from './BottomFeed';

const Feed = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box
			sx={{
				flex: isMobile ? '' : '5',
				width: isMobile ? '325px' : '',
			}}
			display='flex'
			flexDirection='column'
			overflow='hidden'>
			<Stack
				direction={'column'}
				bgcolor={'#2C2C2C'}
				height={isMobile ? '94%' : '98%'}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					// padding: '0 20px',
				}}
				borderRadius={'20px'}>
				<TopFeed />
				<Box overflow={'auto'} flex={1}>
					<Mails />
				</Box>
				<BottomFeed />
			</Stack>
		</Box>
	);
};

export default Feed;
