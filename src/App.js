import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Plugins from './components/Plugins';
import './app.css';

const theme = createTheme({
	typography: {
		fontFamily: '"Inter", sans-serif',
		allVariants: {
			color: '#fff',
		},
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
					borderTopRightRadius: '50px',
					borderBottomRightRadius: '50px',
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

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box
				overflow='hidden'
				bgcolor={'background.default'}
				height={'100vh'}
				display='flex'
				flexDirection='column'>
				<Navbar />
				<Stack
					direction={'row'}
					flex={1}
					display='flex'
					overflow={'hidden'}>
					<Sidebar />
					<Feed />
					<Plugins />
				</Stack>
			</Box>
		</ThemeProvider>
	);
}

export default App;
