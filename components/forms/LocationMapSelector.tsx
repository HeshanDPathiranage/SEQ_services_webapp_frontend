'use client';

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { X, MapPin, Search } from 'lucide-react';

// Fix Leaflet's default icon issue with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LocationMapSelectorProps {
  onSelectLocation: (location: string) => void;
  onClose: () => void;
}

function MapEvents({ onLocationClick }: { onLocationClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onLocationClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

function MapUpdater({ center }: { center: [number, number] | null }) {
  const map = useMap();
  React.useEffect(() => {
    if (center) {
      map.flyTo(center, 14, { animate: true, duration: 1.5 });
    }
  }, [center, map]);
  return null;
}

import { findLocalSuburb, formatLocation, searchSuburbs } from '../../lib/locations';

export default function LocationMapSelector({ onSelectLocation, onClose }: LocationMapSelectorProps) {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);

  const formatGeocodedAddress = (addressObj: any, displayName = ''): string => {
    if (!addressObj) return displayName || 'Location not found';

    const suburb = addressObj.suburb || 
                   addressObj.neighbourhood || 
                   addressObj.city_district || 
                   addressObj.city || 
                   addressObj.town || 
                   addressObj.village || 
                   addressObj.county || '';

    const state = addressObj.state_code || (addressObj.state === 'Queensland' ? 'QLD' : addressObj.state || 'QLD');
    let postcode = addressObj.postcode || '';

    // If postcode was not provided by API, check our local Queensland / AU database
    if (!postcode && suburb) {
      const localMatch = findLocalSuburb(suburb);
      if (localMatch) {
        postcode = localMatch.postcode;
      }
    }

    if (suburb && postcode) {
      return `${suburb}, ${state} ${postcode}`;
    }
    if (suburb) {
      return `${suburb}, ${state}`;
    }
    return displayName || 'Location not found';
  };

  const handleMapClick = async (lat: number, lng: number) => {
    setPosition({ lat, lng });
    setLoading(true);
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=16&addressdetails=1`);
      const data = await response.json();
      if (data && data.address) {
        setAddress(formatGeocodedAddress(data.address, data.display_name));
      } else {
        setAddress('Location not found');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      setAddress('Error fetching address');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Check local database first for fast match
    const localMatch = findLocalSuburb(searchQuery.trim());
    if (localMatch) {
      const formatted = `${localMatch.suburb}, ${localMatch.state} ${localMatch.postcode}`;
      setAddress(formatted);
    }

    setIsSearching(true);
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery + ', Australia')}&addressdetails=1&countrycodes=au`);
      const data = await response.json();
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setPosition({ lat, lng: lon });
        setMapCenter([lat, lon]);
        setAddress(formatGeocodedAddress(data[0].address, data[0].display_name));
      } else if (!localMatch) {
        setAddress('Location not found');
      }
    } catch (error) {
      console.error('Search error:', error);
      if (!localMatch) setAddress('Error searching location');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col h-[80vh] max-h-[800px] animate-in fade-in zoom-in duration-300">
        <div className="p-4 border-b border-[#E2E8F0] flex justify-between items-center bg-[#F8FAFC]">
          <h3 className="font-serif text-xl font-bold text-[#0B1221] flex items-center gap-2">
            <MapPin size={24} className="text-[#29B6F6]" /> Select Location
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-[#E2E8F0] rounded-full transition-colors">
            <X size={20} className="text-[#64748B]" />
          </button>
        </div>
        
        <form onSubmit={handleSearch} className="p-3 bg-white border-b border-[#E2E8F0] flex gap-2">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search location"
            className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#29B6F6] focus:ring-2 focus:ring-[#29B6F6]/10 text-[#0B1221] px-4 py-2 rounded-xl outline-none transition-all text-sm"
          />
          <button type="submit" disabled={isSearching} className="bg-[#0B1221] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 disabled:opacity-50">
            <Search size={16} /> {isSearching ? '...' : 'Search'}
          </button>
        </form>
        
        <div className="flex-1 relative bg-slate-100">
          <MapContainer 
            center={[-27.47, 153.02]} // Default Brisbane
            zoom={4} 
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapEvents onLocationClick={handleMapClick} />
            <MapUpdater center={mapCenter} />
            {position && <Marker position={[position.lat, position.lng]} />}
          </MapContainer>
        </div>

        <div className="p-6 bg-white border-t border-[#E2E8F0]">
          <p className="text-[11px] uppercase tracking-widest text-[#64748B] mb-2 font-bold">Selected Location</p>
          <div className="flex gap-4 items-end flex-col sm:flex-row">
            <div className="flex-1 w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-[#0B1221] font-medium min-h-[48px] flex items-center">
              {loading || isSearching ? 'Fetching location...' : (address || 'Click on the map or search to drop a pin')}
            </div>
            <button 
              disabled={!address || loading || isSearching || address === 'Location not found' || address === 'Error fetching address' || address === 'Error searching location'}
              onClick={() => {
                onSelectLocation(address);
                onClose();
              }}
              className="w-full sm:w-auto bg-gradient-to-r from-[#29B6F6] to-[#29B6F6] text-white px-8 py-3 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_8px_20px_rgba(0,82,204,0.3)] transition-all flex justify-center"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
