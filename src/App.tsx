import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Map } from './components/Map';

function App() {
  const [mapType, setMapType] = useState<'density' | 'migration'>('density');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex overflow-hidden relative">
        <Sidebar 
          mapType={mapType} 
          onMapTypeChange={setMapType}
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main className="flex-1 relative">
          <Map mapType={mapType} />
        </main>
      </div>
    </div>
  );
}

export default App;