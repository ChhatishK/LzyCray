
import AppRoutes from "./routes"
import Navbar from "./components/common/Navbar"

function App() {
  return (
    <div className='w-screen min-h-screen overflow-x-hidden'>
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App