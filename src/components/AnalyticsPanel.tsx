import { BarChart2, AlertTriangle, Droplets, Leaf, Activity } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

interface AnalyticsPanelProps {
  clickedPos: { lat: number; lng: number } | null;
}

export default function AnalyticsPanel({ clickedPos }: AnalyticsPanelProps) {
//   const { t } = useTranslation();

  // Если точка не выбрана, показываем заглушку
  if (!clickedPos) {
    return (
      <div className="absolute top-6 right-6 z-[1000] w-80 bg-surface rounded-lg shadow-flat border border-borderFlat overflow-hidden flex flex-col">
        <div className="bg-gray-50 px-4 py-3 border-b border-borderFlat flex items-center gap-2">
          <BarChart2 size={18} className="text-primary" />
          <h2 className="font-semibold text-textMain">Аналитика участка</h2>
        </div>
        <div className="p-8 text-center flex flex-col items-center justify-center text-textMuted">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
            <Activity size={24} className="text-gray-400" />
          </div>
          <p className="text-sm">Кликните на любую точку карты, чтобы получить экологический срез.</p>
        </div>
      </div>
    );
  }

  // В реальном проекте здесь вы бы брали точные значения пикселей из TIF файлов (например, через библиотеку geoblaze).
  // Для демо мы генерируем псевдо-реалистичные данные на основе координат, чтобы показать работу интерфейса.
  
  // Генерация "данных" для демо (меняются в зависимости от координат)
  const pseudoSeed = Math.abs(clickedPos.lat + clickedPos.lng);
  
  // Индекс растительности (NDVI): от -1 до 1. Чем меньше, тем хуже.
  const ndviValue = (Math.sin(pseudoSeed) * 0.4 + 0.1).toFixed(2);
  const ndviPercent = Math.max(0, Math.min(100, (parseFloat(ndviValue) + 1) * 50));
  
  // Индекс засоления (NDSI): от -1 до 1. Чем выше, тем хуже.
  const ndsiValue = (Math.cos(pseudoSeed) * 0.5 + 0.3).toFixed(2);
  const ndsiPercent = Math.max(0, Math.min(100, (parseFloat(ndsiValue) + 1) * 50));

  // Расчет уровня риска (чем больше соли и меньше растений - тем выше риск)
  const riskScore = Math.min(100, Math.max(0, (ndsiPercent * 1.5 - ndviPercent * 0.5 + 20)));
  
  let riskLevel = 'Низкий';
  let riskColor = 'text-primary';
  let riskBg = 'bg-primary';

  if (riskScore > 40) { riskLevel = 'Средний'; riskColor = 'text-orange-500'; riskBg = 'bg-orange-500'; }
  if (riskScore > 75) { riskLevel = 'Критический'; riskColor = 'text-danger'; riskBg = 'bg-danger'; }

  return (
    <div className="absolute top-6 right-6 z-[1000] w-80 bg-surface rounded-lg shadow-flat border border-borderFlat overflow-hidden flex flex-col transition-all">
      <div className="bg-gray-50 px-4 py-3 border-b border-borderFlat flex items-center gap-2">
        <BarChart2 size={18} className="text-primary" />
        <h2 className="font-semibold text-textMain">Срез данных</h2>
      </div>
      
      <div className="p-4">
        {/* Координаты */}
        <div className="text-xs text-textMuted mb-4 font-mono bg-gray-50 p-2 rounded border border-borderFlat">
          Lat: {clickedPos.lat.toFixed(5)}, Lng: {clickedPos.lng.toFixed(5)}
        </div>
        
        <div className="space-y-5">
          {/* Уровень риска */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-textMain font-medium">Общий риск деградации</span>
              <span className={`font-bold ${riskColor}`}>{riskLevel} ({Math.round(riskScore)}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className={`${riskBg} h-2 rounded-full transition-all duration-500`} style={{ width: `${riskScore}%` }}></div>
            </div>
          </div>

          <hr className="border-borderFlat" />
          
          {/* Показатели (NDVI / NDSI) */}
          <div className="space-y-3">
            {/* NDVI */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-textMain">
                <Leaf size={16} className="text-emerald-500" />
                Растительность (NDVI)
              </div>
              <span className="text-sm font-mono">{ndviValue}</span>
            </div>
            
            {/* NDSI */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-textMain">
                <AlertTriangle size={16} className="text-orange-500" />
                Засоление (NDSI)
              </div>
              <span className="text-sm font-mono">{ndsiValue}</span>
            </div>

            {/* pH */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-textMain">
                <Droplets size={16} className="text-blue-500" />
                Уровень pH (Почва)
              </div>
              <span className="text-sm font-mono">
                { riskScore > 75 ? '8.4 (Щелочная)' : '7.1 (Нейтраль)' }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}