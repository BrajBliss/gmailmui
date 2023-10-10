import {
	Box,
	Collapse,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	styled,
} from '@mui/material';
import React, { useState } from 'react';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import StarBorderSharpIcon from '@mui/icons-material/StarBorderSharp';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const Sidebar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<Box
			overflow='hidden'
			flex={1}
			// height={'100%'}
			display='flex'
			flexDirection='column'>
			<IconButton
				size='large'
				aria-label='compose'
				disablePadding
				sx={{
					position: 'sticky',
					top: 0,
					zIndex: '100',
					flexDirection: 'row',
					left: '10px',
					padding: '0 15px',
					alignItems: 'center',
					justifyContent: 'space-around',
					width: '155px',
					height: '60px',
					backgroundColor: '#fff',
					borderRadius: '18px',
					':hover': {
						backgroundColor: '#fff',
					},
				}}>
				<CreateOutlinedIcon
					sx={{
						color: '#5F6368',
						fontSize: '27px',
					}}
				/>
				<Typography variant='h6' fontSize={'16px'} color={'#5F6368'}>
					Compose
				</Typography>
			</IconButton>
			<Box overflow={'auto'}>
				<List
					overflow={'auto'}
					flex={1}
					sx={{
						width: '100%',
					}}>
					<ListItem
						disablePadding
						sx={{
							paddingRight: '10px',
						}}>
						<ListItemButton>
							<ListItemIcon>
								<InboxRoundedIcon />
							</ListItemIcon>
							<ListItemText primary='Inbox' />
						</ListItemButton>
					</ListItem>
					<ListItem
						disablePadding
						sx={{
							paddingRight: '10px',
						}}>
						<ListItemButton>
							<ListItemIcon>
								<StarBorderSharpIcon />
							</ListItemIcon>
							<ListItemText primary='Starred' />
						</ListItemButton>
					</ListItem>
					<ListItem
						disablePadding
						sx={{
							paddingRight: '10px',
						}}>
						<ListItemButton>
							<ListItemIcon>
								<SendOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary='Sent' />
						</ListItemButton>
					</ListItem>
					<ListItem
						disablePadding
						sx={{
							paddingRight: '10px',
						}}>
						<ListItemButton>
							<ListItemIcon>
								<InsertDriveFileOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary='Drafts' />
						</ListItemButton>
					</ListItem>
					<ListItem
						disablePadding
						sx={{
							paddingRight: '10px',
						}}>
						<ListItemButton>
							<ListItemIcon>
								<ReportGmailerrorredOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary='Spam' />
						</ListItemButton>
					</ListItem>
					<ListItem
						disablePadding
						sx={{
							paddingRight: '10px',
						}}>
						<ListItemButton>
							<ListItemIcon>
								<DeleteOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary='Bin' />
						</ListItemButton>
					</ListItem>
					<ListItem
						disablePadding
						sx={{
							paddingRight: '10px',
						}}>
						<ListItemButton onClick={handleClick}>
							<ListItemIcon>
								{open ? (
									<KeyboardArrowUpOutlinedIcon />
								) : (
									<KeyboardArrowDownOutlinedIcon />
								)}
							</ListItemIcon>
							<ListItemText primary={open ? 'Less' : 'More'} />
						</ListItemButton>
					</ListItem>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<List
							disablePadding
							sx={{
								paddingRight: '10px',
							}}>
							<ListItem
								disablePadding
								sx={{
									paddingRight: '10px',
								}}>
								<ListItemButton>
									<ListItemIcon>
										<QueryBuilderOutlinedIcon />
									</ListItemIcon>
									<ListItemText primary='Snoozed' />
								</ListItemButton>
							</ListItem>
							<ListItem
								disablePadding
								sx={{
									paddingRight: '10px',
								}}>
								<ListItemButton>
									<ListItemIcon>
										<LabelOutlinedIcon />
									</ListItemIcon>
									<ListItemText primary='Important' />
								</ListItemButton>
							</ListItem>
							<ListItem
								disablePadding
								sx={{
									paddingRight: '10px',
								}}>
								<ListItemButton>
									<ListItemIcon>
										<ChatOutlinedIcon />
									</ListItemIcon>
									<ListItemText primary='Chats' />
								</ListItemButton>
							</ListItem>
							<ListItem
								disablePadding
								sx={{
									paddingRight: '10px',
								}}>
								<ListItemButton>
									<ListItemIcon>
										<ScheduleSendOutlinedIcon />
									</ListItemIcon>
									<ListItemText primary='Scheduled' />
								</ListItemButton>
							</ListItem>

							<ListItem
								disablePadding
								sx={{
									paddingRight: '10px',
								}}>
								<ListItemButton>
									<ListItemIcon>
										<SettingsOutlinedIcon />
									</ListItemIcon>
									<ListItemText primary='Manage labels' />
								</ListItemButton>
							</ListItem>
							<ListItem
								disablePadding
								sx={{
									paddingRight: '10px',
								}}>
								<ListItemButton>
									<ListItemIcon>
										<AddOutlinedIcon />
									</ListItemIcon>
									<ListItemText primary='Create new label' />
								</ListItemButton>
							</ListItem>
						</List>
					</Collapse>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
