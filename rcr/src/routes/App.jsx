import './App.css'
import Dashboard from '../components/Dashboard';
import BlogStoreContextProvider from '../store/BlogStore';



function App() {

  return (
    <BlogStoreContextProvider >
      <Dashboard />
    </BlogStoreContextProvider>
  )
}

export default App
