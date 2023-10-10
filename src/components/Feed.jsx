import { Box, Stack } from '@mui/material';
import React from 'react';
import TopFeed from './TopFeed';
import Mails from './Mails';
import BottomFeed from './BottomFeed';

const Feed = () => {
	return (
		<Box flex={5} display='flex' flexDirection='column' overflow='hidden'>
			<Stack
				direction={'column'}
				bgcolor={'#2C2C2C'}
				height={'98%'}
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
