import { MapIcon, Users, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  mapType: 'density' | 'migration';
  onMapTypeChange: (type: 'density' | 'migration') => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ mapType, onMapTypeChange, isOpen, onToggle }: SidebarProps) {
  return (
    <div className="relative flex">
      <motion.div 
        className="h-full bg-white shadow-lg overflow-hidden"
        initial={false}
        animate={{ 
          width: isOpen ? 256 : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          opacity: { duration: 0.2 }
        }}
      >
        <div className="w-64 p-4 space-y-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Map Controls</h2>
          </div>
          
          <button
            onClick={() => onMapTypeChange('density')}
            className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
              mapType === 'density' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
            }`}
          >
            <Users size={20} />
            <span>Population Density</span>
          </button>

          <button
            onClick={() => onMapTypeChange('migration')}
            className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
              mapType === 'migration' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
            }`}
          >
            <MapIcon size={20} />
            <span>Migration Flow</span>
          </button>
        </div>
      </motion.div>

      <motion.button
        onClick={onToggle}
        className="absolute top-4 bg-white p-2 rounded-r-lg shadow-md hover:bg-gray-50 transition-colors z-50"
        animate={{ 
          x: isOpen ? 256 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      >
        {isOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
      </motion.button>
    </div>
  );
}