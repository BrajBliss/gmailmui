import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	Paper,
	TextField,
	ThemeProvider,
	Tooltip,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import MinimizeOutlinedIcon from '@mui/icons-material/MinimizeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import TextFormatOutlinedIcon from '@mui/icons-material/TextFormatOutlined';
import AutoFixNormalOutlinedIcon from '@mui/icons-material/AutoFixNormalOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const Compose = ({ open, handleClose }) => {
	const modules = {
		toolbar: {
			container: [
				[{ font: [] }],
				[{ header: [1, 2, 3, 4, 5, 6, false] }],
				['bold', 'italic', 'underline', 'strike'],
				['blockquote', 'code-block'],
				[{ list: 'ordered' }, { list: 'bullet' }],
				[{ color: [] }, { background: [] }],
				[{ align: [] }],
				['clean'], // remove formatting button
			],
		},
	};

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const [isExpanded, setIsExpanded] = useState(false);
	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	const [formatterOpen, setFormatterOpen] = useState(false);
	const toggleFormatter = () => {
		setFormatterOpen(!formatterOpen);
	};

	return (
		<ThemeProvider theme={theme}>
			<Dialog
				open={open}
				onClose={handleClose}
				hideBackdrop={true}
				PaperComponent={({ children }) => (
					<Paper
						elevation={3}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							padding: '0',
							position: 'fixed',
							bottom: !isExpanded && 0,
							right: !isExpanded && 16,
							width: isExpanded ? '80%' : 'auto',
							maxWidth: isExpanded ? '80%' : isMobile ? 300 : 450,
							height: isExpanded
								? isMobile
									? '80vh'
									: '90vh'
								: '460px',
							borderTopRightRadius: '15px',
							borderTopLeftRadius: '15px',
						}}>
						{children}
					</Paper>
				)}>
				<DialogTitle
					sx={{
						color: '#000',
						height: '18px',
						fontSize: '14px',
						padding: '8px 12px',
						backgroundColor: '#F2F2F2',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						borderTopLeftRadius: '15px',
						borderTopRightRadius: '15px',
					}}>
					New Message
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-around',
							'& > *': {
								mr: '-5px',
							},
						}}>
						<Tooltip title='Minimise'>
							<IconButton onClick={handleClose}>
								<MinimizeOutlinedIcon
									sx={{
										fontSize: '15px',
										color: '#444746',
									}}
								/>
							</IconButton>
						</Tooltip>
						<Tooltip title='Full screen (Shift for pop-out)'>
							<IconButton onClick={toggleExpand}>
								{isExpanded ? (
									<CloseFullscreenOutlinedIcon
										sx={{
											fontSize: '15px',
											color: '#444746',
										}}
									/>
								) : (
									<OpenInFullOutlinedIcon
										sx={{
											fontSize: '15px',
											color: '#444746',
										}}
									/>
								)}
							</IconButton>
						</Tooltip>

						<Tooltip title='Save & close'>
							<IconButton onClick={handleClose}>
								<CloseOutlinedIcon
									sx={{
										fontSize: '15px',
										color: '#444746',
									}}
								/>
							</IconButton>
						</Tooltip>
					</Box>
				</DialogTitle>
				<DialogContent
					sx={{
						padding: '8px 12px',
					}}>
					<TextField
						focused
						color='customBottomBorderColor'
						placeholder='To'
						variant='standard'
						fullWidth
						margin='normal'
						id='to'
						type='email'
						InputProps={{
							style: {
								fontSize: '14px',
								color: '#000',
							},
						}}
					/>
					<TextField
						focused
						color='customBottomBorderColor'
						placeholder='Subject'
						fullWidth
						margin='normal'
						id='subject'
						type='text'
						variant='standard'
						InputProps={{
							style: {
								fontSize: '14px',
								color: '#000',
							},
						}}
					/>
					{/* Other inputs and controls like 'Cc', 'Bcc' etc. here */}
					{!formatterOpen ? (
						<TextField
							focused
							color='plainWhiteColor'
							multiline
							rows={10}
							fullWidth
							margin='normal'
							id='content'
							type='text'
							variant='outlined'
							InputProps={{
								style: {
									fontSize: '14px',
									color: '#000',
									padding: '0 3px',
								},
							}}
							sx={{
								'&:hover': {
									borderBottom: 'none',
								},

								'.MuiInput-underline:before, .MuiInput-underline:after':
									{
										borderBottom: 'none',
									},
								'.MuiOutlinedInput-notchedOutline': {
									border: 'none',
								},
							}}
						/>
					) : (
						<ReactQuill
							modules={modules}
							style={{
								height: isExpanded
									? isMobile
										? '60%'
										: '75% '
									: '50%',
								width: 'auto',
								fontSize: '14px',
								color: '#000',
								padding: '0 3px',
								border: 'none',
								borderBottom: 'none',
								margin: '8px 0 0 0',
							}}
						/>
					)}
				</DialogContent>
				<Box
					style={{
						// marginTop: '30px',
						padding: '8px 12px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						// flexDirection: isMobile && 'column',
					}}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}>
						<Tooltip title='Send (Ctrl-Enter)'>
							<Button
								onClick={handleClose}
								sx={{
									backgroundColor: '#0b57d0',
									color: '#fff',
									borderRadius: '15px',
									height: '35px',
									width: '60px',
									textTransform: 'capitalize',
									'&:hover': {
										backgroundColor: '#206be2',
									},
								}}>
								Send
							</Button>
						</Tooltip>
						<Box
							sx={{
								display: 'flex',

								alignItems: 'center',
								justifyContent: 'space-between',
								'& > *': {
									mr: '-3px',
								},
							}}>
							<Tooltip title='Formatting options'>
								<IconButton onClick={toggleFormatter}>
									<TextFormatOutlinedIcon
										sx={{
											fontSize: '22px',
											color: '#444746',
										}}
									/>
								</IconButton>
							</Tooltip>
							<Tooltip title='Help me write (Workspace Labs)'>
								<IconButton onClick={handleClose}>
									<AutoFixNormalOutlinedIcon
										sx={{
											fontSize: '22px',
											color: '#444746',
										}}
									/>
								</IconButton>
							</Tooltip>
							{!isMobile && (
								<Tooltip title='Attach files'>
									<IconButton onClick={handleClose}>
										<AttachFileOutlinedIcon
											sx={{
												fontSize: '22px',
												color: '#444746',
											}}
										/>
									</IconButton>
								</Tooltip>
							)}
							{!isMobile && (
								<Tooltip title='Insert link (Ctrl-K)'>
									<IconButton onClick={handleClose}>
										<LinkOutlinedIcon
											sx={{
												fontSize: '22px',
												color: '#444746',
											}}
										/>
									</IconButton>
								</Tooltip>
							)}
							{!isMobile && (
								<Tooltip title='Insert emoji (Ctrl-Shift-2)'>
									<IconButton onClick={handleClose}>
										<EmojiEmotionsOutlinedIcon
											sx={{
												fontSize: '22px',
												color: '#444746',
											}}
										/>
									</IconButton>
								</Tooltip>
							)}
							<Tooltip title='Insert files using Drive'>
								<IconButton onClick={handleClose}>
									<AddToDriveIcon
										sx={{
											fontSize: '22px',
											color: '#444746',
										}}
									/>
								</IconButton>
							</Tooltip>
							<Tooltip title='Insert photo'>
								<IconButton onClick={handleClose}>
									<PhotoOutlinedIcon
										sx={{
											fontSize: '22px',
											color: '#444746',
										}}
									/>
								</IconButton>
							</Tooltip>
							{!isMobile && (
								<Tooltip title='More options'>
									<IconButton onClick={handleClose}>
										<MoreVertOutlinedIcon
											sx={{
												fontSize: '22px',
												color: '#444746',
											}}
										/>
									</IconButton>
								</Tooltip>
							)}
						</Box>
					</Box>
					<Tooltip title='Discard draft (Ctrl-Shift-D)'>
						<IconButton onClick={handleClose}>
							<DeleteOutlinedIcon
								sx={{
									fontSize: '22px',
									color: '#444746',
								}}
							/>
						</IconButton>
					</Tooltip>
				</Box>
			</Dialog>
		</ThemeProvider>
	);
};

export default Compose;
