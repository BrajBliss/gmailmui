import {
	AppBar,
	Avatar,
	Box,
	IconButton,
	InputBase,
	Toolbar,
	Tooltip,
	Typography,
	styled,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Navbar = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<AppBar
			position='sticky'
			style={{ backgroundColor: '#111111' }}
			elevation={0}>
			<Toolbar
				disableGutters
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					// padding: '0 10px',
				}}>
				<Box
					sx={{
						flex: 0.9,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						paddingLeft: '19px',
						// backgroundColor: 'red',
						height: '100%',
					}}>
					{!isMobile && (
						<Tooltip title='Main menu'>
							<IconButton
								size='large'
								edge='start'
								color='inherit'
								aria-label='menu'>
								<MenuIcon />
							</IconButton>
						</Tooltip>
					)}
					<Typography variant='h5'>Gmail</Typography>
				</Box>
				<Box
					sx={{
						flex: 5,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						// backgroundColor: 'white',
					}}>
					<Box
						sx={{
							//   padding: "0 10px",
							//   borderRadius: theme.shape.borderRadius,
							//   width: "40%",

							backgroundColor: '#474747',
							padding: '0 10px',
							borderRadius: '50px',
							width: isMobile ? '30%' : '50%',
							height: isMobile ? '40px' : '50px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginLeft: isMobile && '10px',
						}}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							{!isMobile && (
								<Tooltip title='Search'>
									<IconButton
										size='large'
										edge='start'
										color='inherit'
										aria-label='search'>
										<SearchIcon />
									</IconButton>
								</Tooltip>
							)}
							<InputBase
								placeholder='Search mail'
								style={{
									color: 'white',
								}}
							/>
						</Box>
						{!isMobile && (
							<Tooltip title='Show search options'>
								<IconButton
									size='large'
									edge='start'
									color='inherit'
									aria-label='searchOptions'>
									<TuneIcon />
								</IconButton>
							</Tooltip>
						)}
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							gap: !isMobile && '5px',
						}}>
						<Tooltip title='Help'>
							<IconButton
								size='large'
								edge='start'
								color='inherit'
								aria-label='help'>
								<HelpOutlineIcon />
							</IconButton>
						</Tooltip>

						<Tooltip title='Settings'>
							<IconButton
								size='large'
								edge='start'
								color='inherit'
								aria-label='settings'>
								<SettingsOutlinedIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title='Google apps'>
							<IconButton
								size='large'
								edge='start'
								color='inherit'
								aria-label='googleApps'>
								<AppsRoundedIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title='Google Account'>
							<IconButton
								size='large'
								edge='start'
								color='inherit'
								aria-label='googleAccount'>
								<Avatar src='https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' />
							</IconButton>
						</Tooltip>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
