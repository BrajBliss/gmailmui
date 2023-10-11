import {
	Box,
	Checkbox,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const Mail = (props) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const [starred, setStarred] = useState(false);

	const handleStarClick = () => {
		setStarred(!starred);
	};
	return (
		<ListItem disablePadding>
			<ListItemButton
				sx={{
					display: 'flex',
					flexDirection: isMobile && 'column',
					alignItems: 'center',
					justifyContent: 'space-between',
					backgroundColor: props.read ? '#161616' : '#2C2C2C',
				}}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: isMobile
							? 'space-between'
							: 'space-around',
						gap: isMobile ? '1rem' : '',
					}}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Checkbox size='small' />
						<ListItemIcon onClick={handleStarClick}>
							{starred ? (
								<StarOutlinedIcon
									sx={{
										color: 'gold',
										fontSize: '20px',
									}}
								/>
							) : (
								<StarOutlineOutlinedIcon
									sx={{
										fontSize: '20px',
									}}
								/>
							)}
						</ListItemIcon>
					</Box>
					<Typography
						sx={{
							fontWeight: props.read ? 'normal' : 'bold',
							marginLeft: '-1.2rem',
							color: props.read ? '#BABABA' : '',
						}}>
						Community Mailer
					</Typography>
					{isMobile && <Typography>14:23</Typography>}
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: isMobile && 'column',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: isMobile ? '' : '1rem',
					}}>
					<Typography
						sx={{
							fontWeight: props.read ? 'normal' : 'bold',
							color: props.read ? '#BABABA' : '',
						}}>
						This is the subject line which is in bold
					</Typography>
					{!isMobile && (
						<Typography
							sx={{
								color: '#787778',
							}}>
							-
						</Typography>
					)}
					<Typography
						sx={{
							color: '#8B8B8B',
						}}>
						{isMobile
							? 'This snipped should cut off right here...'
							: 'This is the snippet of the mail which is supposed to cut off right here...'}
					</Typography>
				</Box>
				{!isMobile && <Typography>14:23</Typography>}
			</ListItemButton>
		</ListItem>
	);
};

export default Mail;
