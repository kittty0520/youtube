import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import VideoDetail from './pages/VideoDetail';
import Videos from './pages/Videos';
import Root from './pages/Root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Videos /> },
			{ path: '/videos', element: <Videos /> },
			{ path: '/videos/:keyword', element: <Videos /> },
			{ path: '/videos/watch/:videoId', element: <VideoDetail /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
