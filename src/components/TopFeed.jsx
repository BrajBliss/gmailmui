import React from 'react';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import HorizontalSplitSharpIcon from '@mui/icons-material/HorizontalSplitSharp';
import KeyboardAltSharpIcon from '@mui/icons-material/KeyboardAltSharp';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import {
	Box,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

const TopFeed = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Toolbar
			disableGutters
			sx={{
				height: '50px',
				flexDirection: 'row',
				justifyContent: 'space-between',
				position: 'sticky',
				top: 0,
				zIndex: '100',
				padding: '0 20px',
			}}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '10px',
				}}>
				<Tooltip title='Select'>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Box
							sx={{
								padding: '5px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: '30px',
								':hover': {
									backgroundColor: '#4A4A4A',
									transition: '0.3s ease-in-out',
									borderRadius: '5px',
								},
							}}>
							<CheckBoxOutlineBlankOutlinedIcon
								sx={{
									fontSize: '19px',
								}}
							/>
						</Box>
						<Box
							sx={{
								ml: '-5px',
								padding: '5px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: '30px',
								width: '10px',
								':hover': {
									backgroundColor: '#4A4A4A',
									transition: '0.3s ease-in-out',
									borderRadius: '5px',
								},
							}}>
							<ArrowDropDownOutlinedIcon
								sx={{
									fontSize: '20px',
								}}
							/>
						</Box>
					</Box>
				</Tooltip>
				<Tooltip title='Refresh'>
					<IconButton
						sx={{
							':hover': {
								backgroundColor: '#4A4A4A',
								transition: '0.3s ease-in-out',
							},
						}}>
						<RefreshOutlinedIcon
							sx={{
								fontSize: '20px',
							}}
						/>
					</IconButton>
				</Tooltip>
				<Tooltip title='More'>
					<IconButton
						sx={{
							':hover': {
								backgroundColor: '#4A4A4A',
								transition: '0.3s ease-in-out',
							},
						}}>
						<MoreVertOutlinedIcon
							sx={{
								fontSize: '18px',
							}}
						/>
					</IconButton>
				</Tooltip>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				{!isMobile && (
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							padding: '10px',
							cursor: 'pointer',
							':hover': {
								backgroundColor: '#4A4A4A',
								transition: '0.3s ease-in-out',
								borderRadius: '5px',
							},
						}}>
						<Typography
							sx={{
								fontSize: '13px',
								color: '#BABABA',
							}}>
							1-50 of 166
						</Typography>
					</Box>
				)}

				<Tooltip title='Newer'>
					<IconButton
						disableRipple
						disableFocusRipple
						// sx={{
						// 	':hover': {
						// 		backgroundColor: '#4A4A4A',
						// 	},
						// }}
					>
						<KeyboardArrowLeftOutlinedIcon
							sx={{
								fontSize: '20px',
								color: '#606060',
							}}
						/>
					</IconButton>
				</Tooltip>

				<Tooltip title='Older'>
					<IconButton
						sx={{
							':hover': {
								backgroundColor: '#4A4A4A',
							},
						}}>
						<KeyboardArrowRightOutlinedIcon
							sx={{
								fontSize: '20px',
							}}
						/>
					</IconButton>
				</Tooltip>

				{!isMobile && (
					<Tooltip title='Toggle split pane mode'>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<Box
								sx={{
									padding: '5px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: '30px',
									':hover': {
										backgroundColor: '#4A4A4A',
										transition: '0.3s ease-in-out',
										borderRadius: '5px',
									},
								}}>
								<HorizontalSplitSharpIcon
									sx={{
										fontSize: '20px',
									}}
								/>
							</Box>
							<Box
								sx={{
									ml: '-5px',
									padding: '5px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: '30px',
									width: '10px',
									':hover': {
										backgroundColor: '#4A4A4A',
										transition: '0.3s ease-in-out',
										borderRadius: '5px',
									},
								}}>
								<ArrowDropDownOutlinedIcon
									sx={{
										fontSize: '20px',
									}}
								/>
							</Box>
						</Box>
					</Tooltip>
				)}

				{!isMobile && (
					<Tooltip title='Input tools on/off (Ctrl-Shift-K)'>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<Box
								sx={{
									padding: '5px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: '30px',
									':hover': {
										backgroundColor: '#4A4A4A',
										transition: '0.3s ease-in-out',
										borderRadius: '5px',
									},
								}}>
								<KeyboardAltSharpIcon
									sx={{
										fontSize: '20px',
									}}
								/>
							</Box>
							<Box
								sx={{
									ml: '-5px',
									padding: '5px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: '30px',
									width: '10px',
									':hover': {
										backgroundColor: '#4A4A4A',
										transition: '0.3s ease-in-out',
										borderRadius: '5px',
									},
								}}>
								<ArrowDropDownOutlinedIcon
									sx={{
										fontSize: '20px',
									}}
								/>
							</Box>
						</Box>
					</Tooltip>
				)}
			</Box>
		</Toolbar>
	);
};

export default TopFeed;
