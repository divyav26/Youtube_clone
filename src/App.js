
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import VideoCard from './components/VideoCard';
import ChannelCard from './components/ChannelCard';

function App() {
  return (
    <>
     <BrowserRouter>
     <Box sx={{backgroundColor:'#000'}}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />}/>
          <Route path='/video/:id' element={<VideoDetail />}/>
          <Route path='/channel/:id' element={<ChannelDetail />}/>
          <Route path='/search/:searchTerm' element={<SearchFeed />}/>
          <Route path='/searchbar' element={<SearchBar />}/>
          <Route path='/sidebar' element={<Sidebar />}/>
          <Route path='/videos' element={<Videos />}/>
          <Route path='/videocard' element={<VideoCard />}/>
          <Route path='/channelcard' element={<ChannelCard />}/>
        </Routes>
     </Box>
     </BrowserRouter> 
    </>
  );
}

export default App;
