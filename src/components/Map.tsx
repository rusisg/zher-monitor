import { useState } from 'react';
import { MapContainer, TileLayer, ZoomControl, LayersControl, Marker, useMapEvents } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import { Layers } from 'lucide-react';
import L from 'leaflet';

import AnalyticsPanel from './AnalyticsPanel';
import 'leaflet/dist/leaflet.css';

// Фикс иконки маркера
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MAKAT_CENTER: [number, number] = [47.6465, 53.3188]; // Центр Маката/Сагиза

// --- ЦВЕТОВЫЕ ШКАЛЫ ДЛЯ ВАШИХ РЕАЛЬНЫХ ФАЙЛОВ ---

// const colorScaleLULC = (value: number) => {
//   switch (Math.round(value)) {
//     case 0: return '#419BDF'; // Вода
//     case 1: return '#397D49'; // Лес
//     case 2: return '#88B053'; // Трава
//     case 4: return '#E49635'; // Посевы
//     case 6: return '#C4281B'; // Застройка
//     case 7: return '#A59B8F'; // Голая земля
//     default: return 'transparent'; 
//   }
// };

// const colorScaleNDVI = (value: number) => {
//   if (value < 0) return 'transparent';
//   if (value < 0.15) return '#d73027'; // Деградация / Голая почва
//   if (value < 0.3) return '#fdae61';  
//   if (value < 0.5) return '#a6d96a';  
//   return '#1a9850';                   // Плотная зелень
// };

// const colorScaleSAVI = (value: number) => {
//   // SAVI идеален для пустынь (убирает влияние голой земли)
//   if (value <= 0) return 'transparent';
//   if (value < 0.15) return '#d73027'; // Сильная деградация
//   if (value < 0.3) return '#fdae61';  // Угроза деградации
//   if (value < 0.5) return '#a6d96a';  // Норма
//   return '#1a9850';                   // Хорошая растительность
// };

// const colorScaleVCI = (value: number) => {
//   // VCI измеряется в % (от 0 до 100). Показывает уровень засухи.
//   if (value < 0) return 'transparent';
//   if (value <= 20) return '#d73027'; // Экстремальная засуха
//   if (value <= 40) return '#fdae61'; // Умеренная засуха
//   if (value <= 60) return '#ffffbf'; // Нормальные условия
//   return '#1a9850'; // Благоприятные условия
// };

// const colorScalePH = (value: number) => {
//   if (value < 1) return 'transparent';
//   if (value < 6.5) return '#d73027'; // Кислая
//   if (value < 7.5) return '#1a9850'; // Нейтральная
//   return '#4575b4'; // Щелочная / Соленая
// };

// const colorScaleTexture = (value: number) => {
//   if (value < 1) return 'transparent';
//   const colors = ['transparent', '#d4b37d', '#b5935c', '#8b6934', '#664d23', '#a88c65'];
//   return colors[Math.round(value) % colors.length] || '#8b6934';
// };

// Слушатель кликов по карте
function MapClickObserver({ setClickedPos }: { setClickedPos: (pos: any) => void }) {
  useMapEvents({
    click(e) {
      setClickedPos(e.latlng);
    },
  });
  return null;
}

export default function Map() {
  const { t } = useTranslation();

  // Состояния строго под ваши файлы
  const [showVCI, setShowVCI] = useState(false);
  const [showSAVI, setShowSAVI] = useState(false);
  const [showNDVI, setShowNDVI] = useState(false);
  const [showLULC, setShowLULC] = useState(false);
  const [showPH, setShowPH] = useState(false);
  const [showTexture, setShowTexture] = useState(false);

  const [clickedPos, setClickedPos] = useState<{ lat: number; lng: number } | null>(null);

  return (
    <div className="relative w-full h-full">
      <MapContainer 
        center={MAKAT_CENTER} 
        zoom={10} 
        className="w-full h-full z-0"
        zoomControl={false}
      >
        <ZoomControl position="bottomright" />
        <MapClickObserver setClickedPos={setClickedPos} />

        <LayersControl position="bottomleft">
          <LayersControl.BaseLayer checked name="Google Satellite">
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
              attribution="&copy; Google"
              maxZoom={20}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        {clickedPos && <Marker position={clickedPos} icon={customIcon} />}
      </MapContainer>

      {/* --- ЛЕВАЯ ПАНЕЛЬ СЛОЕВ --- */}
      <div className="absolute top-6 left-6 z-[1000] w-80 max-h-[85vh] overflow-y-auto bg-surface rounded-lg shadow-flat border border-borderFlat flex flex-col custom-scrollbar">
        <div className="bg-gray-50 px-4 py-3 border-b border-borderFlat flex items-center gap-2 sticky top-0 z-10">
          <Layers size={18} className="text-primary" />
          <h2 className="font-semibold text-textMain">{t('filter_title')}</h2>
        </div>
        
        <div className="p-4 flex flex-col gap-5">
          
          {/* VCI (Засуха) */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={showVCI} onChange={() => setShowVCI(!showVCI)} className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" />
              <span className="text-textMain text-sm font-bold">VCI (Индекс Засухи - Сагиз)</span>
            </label>
            {showVCI && (
              <div className="mt-2 ml-7 text-xs flex flex-col gap-1.5 animate-fadeIn">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#d73027] rounded-[2px]"></div> Экстремальная засуха (&lt;20%)</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#fdae61] rounded-[2px]"></div> Умеренная засуха (&lt;40%)</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#ffffbf] rounded-[2px]"></div> Норма</div>
              </div>
            )}
          </div>

          {/* SAVI (Улучшенная растительность) */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={showSAVI} onChange={() => setShowSAVI(!showSAVI)} className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" />
              <span className="text-textMain text-sm font-medium">SAVI (С поправкой на почву)</span>
            </label>
            {showSAVI && (
              <div className="mt-2 ml-7 text-xs flex flex-col gap-1.5 animate-fadeIn">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#d73027] rounded-[2px]"></div> Сильная деградация</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#fdae61] rounded-[2px]"></div> Угроза деградации</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#1a9850] rounded-[2px]"></div> Нормальная растительность</div>
              </div>
            )}
          </div>

          {/* NDVI */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={showNDVI} onChange={() => setShowNDVI(!showNDVI)} className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" />
              <span className="text-textMain text-sm font-medium">NDVI (Растительность - Сагиз)</span>
            </label>
            {showNDVI && (
              <div className="mt-2 ml-7 text-xs flex flex-col gap-1.5 animate-fadeIn">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#d73027] rounded-[2px]"></div> Голая почва</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#a6d96a] rounded-[2px]"></div> Умеренная зелень</div>
              </div>
            )}
          </div>

          {/* LULC */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={showLULC} onChange={() => setShowLULC(!showLULC)} className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" />
              <span className="text-textMain text-sm font-medium">Классификация земель (Макат)</span>
            </label>
            {showLULC && (
              <div className="mt-2 ml-7 text-xs flex flex-col gap-1.5 animate-fadeIn">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#C4281B] rounded-[2px]"></div> Застройка</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#A59B8F] rounded-[2px]"></div> Голая земля</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#88B053] rounded-[2px]"></div> Растительность</div>
              </div>
            )}
          </div>

          {/* pH */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={showPH} onChange={() => setShowPH(!showPH)} className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" />
              <span className="text-textMain text-sm font-medium">Кислотность (pH почвы)</span>
            </label>
            {showPH && (
              <div className="mt-2 ml-7 text-xs flex flex-col gap-1.5 animate-fadeIn">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#4575b4] rounded-[2px]"></div> Щелочная / Засоленная</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#1a9850] rounded-[2px]"></div> Нейтральная</div>
              </div>
            )}
          </div>

          {/* Текстура */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={showTexture} onChange={() => setShowTexture(!showTexture)} className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" />
              <span className="text-textMain text-sm font-medium">Текстура почвы</span>
            </label>
          </div>

        </div>
      </div>

      <AnalyticsPanel clickedPos={clickedPos} />
    </div>
  );
}