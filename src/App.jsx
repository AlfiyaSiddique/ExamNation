import { Button } from "@mui/material";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Hello, Vite + Tailwind + MUI! 🚀</h1>
      <Button variant="contained" color="primary" className="mt-4">
        MUI Button
      </Button>
    </div>
  );
}

export default App;
