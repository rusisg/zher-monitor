import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Layers, Droplets, ThermometerSun, AlertTriangle, MapPin, TestTubes, Activity, Leaf } from 'lucide-react';

export default function MakatSoilProfile() {
  const { t } = useTranslation();

  // 1. РЕАЛЬНЫЕ ДАННЫЕ ИЗ ВАШИХ EXCEL ФАЙЛОВ
  const realSoilData = useMemo(() => [
    { id: 1, location: 'Уч. ТХ (р-1)', depth: '0-20', ph: 8.5, humus: 1.35, nitrogen: 0.077, phosphorus: 0.12, co2: 9.09, calcium: 12.0 },
    { id: 2, location: 'Уч. ТХ (р-1)', depth: '20-40', ph: 9.2, humus: 1.50, nitrogen: 0.086, phosphorus: 0.13, co2: 10.80, calcium: 12.8 },
    { id: 3, location: 'Уч. ХМ (р-3)', depth: '0-20', ph: 8.7, humus: 1.50, nitrogen: 0.086, phosphorus: 0.13, co2: 7.03, calcium: 12.0 },
    { id: 4, location: 'Бейнеу (р-4)', depth: '0-8', ph: 8.3, humus: 0.47, nitrogen: 0.029, phosphorus: 0.05, co2: 6.00, calcium: 2.4 },
    { id: 5, location: 'Бейнеу (р-4)', depth: '12-40', ph: 9.0, humus: 0.21, nitrogen: 0.014, phosphorus: 0.02, co2: 3.43, calcium: 2.0 },
    { id: 6, location: 'КҚ (р-5)', depth: '0-11', ph: 8.1, humus: 1.24, nitrogen: 0.077, phosphorus: 0.09, co2: 0.34, calcium: 18.4 },
    { id: 7, location: 'Қ.вод (р-6)', depth: '0-11', ph: 8.4, humus: 1.05, nitrogen: 0.065, phosphorus: 0.08, co2: 0.00, calcium: 14.2 },
  ], []);

  return (
    <div className="flex-1 bg-surface overflow-y-auto p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-10 pb-16">
        
        {/* =========================================
            БЛОК 1: Заголовок и Интро (Из старого кода)
        ========================================= */}
        <div className="bg-white rounded-2xl shadow-sm border border-borderFlat p-6 sm:p-8 md:p-12 relative overflow-hidden mt-4 md:mt-0">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-bl-[100%] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs sm:text-sm mb-4 md:mb-6 w-fit">
              <MapPin size={16} className="shrink-0" />
              {t('makat_region_tag', 'Атырауская область, Макатский район')}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textMain mb-3 md:mb-4">
              {t('makat_title', 'Экологический профиль и деградация почв')}
            </h1>
            <p className="text-textMuted text-base md:text-lg max-w-3xl leading-relaxed mb-6">
              {t('makat_desc', 'Макатский район характеризуется суровыми агроклиматическими условиями. Ниже представлены официальные данные лабораторных исследований (Протокол №201), демонстрирующие уровни pH, содержания гумуса и химических элементов на разной глубине.')}
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4 text-xs sm:text-sm">
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-2 md:px-4 md:py-2 rounded-lg text-textMain">
                <ThermometerSun size={18} className="text-warning shrink-0" /> {t('makat_tag_climate', 'Резко континентальный климат')}
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-2 md:px-4 md:py-2 rounded-lg text-textMain">
                <Droplets size={18} className="text-primary shrink-0" /> {t('makat_tag_water', 'Дефицит влаги')}
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-2 md:px-4 md:py-2 rounded-lg text-textMain">
                <Layers size={18} className="text-danger shrink-0" /> {t('makat_tag_soil', 'Высокая щелочность')}
              </span>
            </div>
          </div>
        </div>

        {/* =========================================
            БЛОК 2: Ключевые показатели (Из старого кода)
        ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-borderFlat p-5 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-danger/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
              <AlertTriangle className="text-danger" size={20} />
            </div>
            <h3 className="text-textMuted font-medium mb-1 text-sm md:text-base">Критический pH (Бейнеу)</h3>
            <div className="text-2xl md:text-3xl font-bold text-danger mb-2">9.0 <span className="text-sm md:text-lg font-normal text-textMuted">(Щелочной)</span></div>
            <p className="text-xs md:text-sm text-textMuted">Высокая щелочность блокирует усвоение питательных веществ растениями.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-borderFlat p-5 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-warning/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
              <Layers className="text-warning" size={20} />
            </div>
            <h3 className="text-textMuted font-medium mb-1 text-sm md:text-base">Скудный гумус (Бейнеу)</h3>
            <div className="text-2xl md:text-3xl font-bold text-textMain mb-2">0.21%</div>
            <p className="text-xs md:text-sm text-textMuted">Критически низкий уровень органики на глубине 12-40 см.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-borderFlat p-5 md:p-6 sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
              <TestTubes className="text-primary" size={20} />
            </div>
            <h3 className="text-textMuted font-medium mb-1 text-sm md:text-base">Объем исследования</h3>
            <div className="text-2xl md:text-3xl font-bold text-textMain mb-2">{realSoilData.length} <span className="text-sm md:text-lg font-normal text-textMuted">проб</span></div>
            <p className="text-xs md:text-sm text-textMuted">Официальные данные лабораторных испытаний почв района.</p>
          </div>
        </div>

        {/* =========================================
            БЛОК 3: Анализ по глубине (Из старого кода)
        ========================================= */}
        <div className="bg-white rounded-2xl shadow-sm border border-borderFlat p-5 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-textMain mb-4 md:mb-6">{t('makat_depth_title', 'Динамика деградации по глубине')}</h2>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
            <div className="flex-1 space-y-4">
              <p className="text-sm md:text-base text-textMuted mb-4">
                {t('makat_depth_desc', 'Анализ показывает, что ситуация ухудшается с глубиной. Поверхностный слой (0-15 см) еще сохраняет остатки органики, однако глубже начинается плотный солевой горизонт.')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs mt-0.5 shrink-0">A</div>
                  <div>
                    <strong className="block text-textMain text-sm md:text-base">{t('makat_horizon_a_title', 'Горизонт А (0-15 см):')}</strong>
                    <span className="text-xs md:text-sm text-textMuted">{t('makat_horizon_a_desc', 'Слабогумусированный слой. Содержание органики падает до 0.8%. Подвержен ветровой эрозии.')}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-xs mt-0.5 shrink-0">B</div>
                  <div>
                    <strong className="block text-textMain text-sm md:text-base">{t('makat_horizon_b_title', 'Горизонт B (15-40 см):')}</strong>
                    <span className="text-xs md:text-sm text-textMuted">{t('makat_horizon_b_desc', 'Иллювиальный горизонт. Максимальное скопление солей. pH достигает 8.8.')}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs mt-0.5 shrink-0">C</div>
                  <div>
                    <strong className="block text-textMain text-sm md:text-base">{t('makat_horizon_c_title', 'Горизонт C (глубже 40 см):')}</strong>
                    <span className="text-xs md:text-sm text-textMuted">{t('makat_horizon_c_desc', 'Материнская порода. Экстремальное засоление, почва непригодна для корневой системы.')}</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="w-full lg:w-64 flex flex-col rounded-xl overflow-hidden shadow-inner border border-borderFlat h-48 lg:h-80 shrink-0">
              <div className="h-[20%] bg-[#8B5A2B] flex items-center justify-center">
                <span className="text-white font-medium text-xs md:text-sm drop-shadow-md">{t('makat_chart_a', '0-15 см (Гумус)')}</span>
              </div>
              <div className="h-[30%] bg-[#D2B48C] flex items-center justify-center border-t border-white/20">
                <span className="text-[#5C4033] font-medium text-xs md:text-sm">{t('makat_chart_b', '15-40 см (Солонцы)')}</span>
              </div>
              <div className="h-[50%] bg-[#F5DEB3] flex items-center justify-center border-t border-[#8B5A2B]/20">
                <span className="text-[#8B5A2B] font-medium text-xs md:text-sm">{t('makat_chart_c', '40-100 см (Порода)')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            БЛОК 4: ИСПРАВЛЕННЫЕ ГРАФИКИ (ГИСТОГРАММЫ)
        ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* График 1: Уровень pH */}
          <div className="bg-white rounded-2xl shadow-sm border border-borderFlat p-5 md:p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Activity className="text-blue-500" size={20} />
                <h3 className="text-lg font-bold text-textMain">Динамика кислотности (pH)</h3>
              </div>
              <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">Опасно: &gt; 9.0</span>
            </div>
            
            {/* Контейнер графика */}
            <div className="h-48 w-full flex items-end justify-between gap-1 sm:gap-2 pb-2 border-b border-gray-200 relative mt-4">
              {/* Пунктирная линия критического уровня */}
              <div className="absolute top-[25%] left-0 w-full border-t border-dashed border-red-300 z-0"></div>

              {realSoilData.map((row, i) => {
                // Вычисляем высоту (Максимум pH на графике будет 12 для запаса)
                const heightPercentage = Math.min((row.ph / 12) * 100, 100);
                return (
                  <div key={`chart-ph-${i}`} className="w-full flex justify-center group relative h-full z-10">
                    
                    {/* Тултип (Всплывающая подсказка) */}
                    <div className="absolute -top-12 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                      pH: {row.ph}
                    </div>
                    
                    {/* Сам столбец */}
                    <div 
                      className="absolute bottom-0 w-[80%] max-w-[40px] rounded-t-md transition-all duration-300 shadow-sm"
                      style={{ 
                        height: `${heightPercentage}%`,
                        background: row.ph >= 9.0 ? 'linear-gradient(to top, #ef4444, #fca5a5)' : 'linear-gradient(to top, #3b82f6, #93c5fd)'
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
            
            {/* Подписи под графиком */}
            <div className="flex justify-between mt-2">
              {realSoilData.map((row, i) => (
                <div key={`label-ph-${i}`} className="flex-1 text-center text-[10px] sm:text-xs text-textMuted leading-tight px-1">
                  {row.location}<br/>({row.depth})
                </div>
              ))}
            </div>
          </div>

          {/* График 2: Уровень Гумуса */}
          <div className="bg-white rounded-2xl shadow-sm border border-borderFlat p-5 md:p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Leaf className="text-emerald-500" size={20} />
                <h3 className="text-lg font-bold text-textMain">Плодородие: Гумус (%)</h3>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Норма: ~1.5%</span>
            </div>
            
            {/* Контейнер графика */}
            <div className="h-48 w-full flex items-end justify-between gap-1 sm:gap-2 pb-2 border-b border-gray-200 relative mt-4">
              
              {realSoilData.map((row, i) => {
                // Вычисляем высоту (Максимум Гумуса на графике будет 2.0% для запаса)
                const heightPercentage = Math.min((row.humus / 2.0) * 100, 100);
                return (
                  <div key={`chart-hum-${i}`} className="w-full flex justify-center group relative h-full z-10">
                    
                    {/* Тултип (Всплывающая подсказка) */}
                    <div className="absolute -top-12 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                      Гумус: {row.humus}%
                    </div>
                    
                    {/* Сам столбец */}
                    <div 
                      className="absolute bottom-0 w-[80%] max-w-[40px] rounded-t-md transition-all duration-300 shadow-sm"
                      style={{ 
                        height: `${heightPercentage}%`,
                        background: 'linear-gradient(to top, #10b981, #6ee7b7)'
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
            
            {/* Подписи под графиком */}
            <div className="flex justify-between mt-2">
              {realSoilData.map((row, i) => (
                <div key={`label-hum-${i}`} className="flex-1 text-center text-[10px] sm:text-xs text-textMuted leading-tight px-1">
                  {row.location}<br/>({row.depth})
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            БЛОК 5: РЕАЛЬНАЯ ТАБЛИЦА (EXCEL ДАННЫЕ)
        ========================================= */}
        <div className="bg-white rounded-2xl shadow-sm border border-borderFlat overflow-hidden">
          <div className="px-5 py-4 md:px-6 md:py-5 border-b border-borderFlat bg-gray-50">
            <h2 className="text-lg md:text-xl font-bold text-textMain">Лабораторные данные</h2>
            <p className="text-xs md:text-sm text-textMuted mt-1">Оригинальные протоколы исследований без искажений</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-surface text-textMuted text-xs uppercase tracking-wider">
                  <th className="px-4 py-3 md:px-6 md:py-4 font-medium border-b border-borderFlat whitespace-nowrap">Участок</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-medium border-b border-borderFlat whitespace-nowrap">Глубина (см)</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-medium border-b border-borderFlat whitespace-nowrap">pH</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-medium border-b border-borderFlat whitespace-nowrap">Гумус (%)</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-medium border-b border-borderFlat whitespace-nowrap">Азот (%)</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-medium border-b border-borderFlat whitespace-nowrap">Фосфор (%)</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-medium border-b border-borderFlat whitespace-nowrap">CO2 (%)</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-medium border-b border-borderFlat whitespace-nowrap">Кальций (мг/экв)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-borderFlat">
                {realSoilData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors text-sm md:text-base">
                    <td className="px-4 py-3 md:px-6 md:py-4 font-medium text-textMain whitespace-nowrap">{row.location}</td>
                    <td className="px-4 py-3 md:px-6 md:py-4 text-textMuted whitespace-nowrap">{row.depth}</td>
                    <td className={`px-4 py-3 md:px-6 md:py-4 font-bold whitespace-nowrap ${row.ph >= 9.0 ? 'text-danger' : 'text-blue-600'}`}>
                      {row.ph}
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4 font-medium text-emerald-600 whitespace-nowrap">
                      {row.humus}
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4 text-textMain whitespace-nowrap">{row.nitrogen}</td>
                    <td className="px-4 py-3 md:px-6 md:py-4 text-textMain whitespace-nowrap">{row.phosphorus}</td>
                    <td className="px-4 py-3 md:px-6 md:py-4 text-textMain whitespace-nowrap">{row.co2}</td>
                    <td className="px-4 py-3 md:px-6 md:py-4 text-textMain whitespace-nowrap">{row.calcium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}