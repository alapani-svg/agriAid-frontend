import './App.css'
import logo from './assets/logos/agriAid-logo.png'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <img
        src={logo}
        alt="AgriAid Logo"
        className="w-52 h-52 object-contain"
      />

      <h1 className="mt-6 text-5xl font-bold text-green-700">
        AgriAid
      </h1>

      <p className="mt-3 text-lg text-gray-600">
        Smart Agriculture Management Platform
      </p>
    </div>
  )
}

export default App