import {
	Box,
	Checkbox,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const Mail = (props) => {
	const [starred, setStarred] = useState(false);

	const handleStarClick = () => {
		setStarred(!starred);
	};
	return (
		<ListItem disablePadding>
			<ListItemButton
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					backgroundColor: props.read ? '#161616' : '#2C2C2C',
				}}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-around',
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
							fontWeight: 'bold',
							marginLeft: '-1.2rem',
						}}>
						Community Mailer
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: '1rem',
					}}>
					<Typography
						sx={{
							fontWeight: 'bold',
						}}>
						This is the subject line which is in bold
					</Typography>
					<Typography>-</Typography>
					<Typography>
						This is the snippet of the mail which is supposed to cut
						off right here...
					</Typography>
				</Box>
				<Typography>14:23</Typography>
			</ListItemButton>
		</ListItem>
	);
};

export default Mail;
