import { useTranslation } from 'react-i18next';
import {
  Target, Satellite, ShieldAlert, Layers, Activity,
  Server, Code, Droplets, Scale, Leaf, Landmark, Wifi, Bot, Map, ScrollText
} from 'lucide-react';
import heroImage from '../assets/hero-ecology.png';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 bg-background overflow-y-auto p-4 sm:p-6 md:p-8 custom-scrollbar">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 pb-12">
{/* ── [IMPROVED] Hero Section with Visual Integration ── */}
        <div className="bg-surface border border-borderFlat rounded-xl shadow-flat overflow-hidden mt-4 md:mt-0 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary z-10"></div>
          
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Text Content */}
            <div className="p-8 sm:p-10 md:p-12 text-left flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textMain mb-4 leading-tight">
                {t('about_hero_title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-textMuted max-w-2xl leading-relaxed mb-6">
                {t('about_hero_text')}
              </p>
            </div>

            {/* Right: Integrated Image (Descriptive Visual for Zher Monitor) */}
            {/* 🔴 ИСПРАВЛЕНИЕ ЗДЕСЬ: Добавлен класс overflow-hidden */}
            <div className="relative group overflow-hidden">
              <img 
                src={heroImage}
                alt="Digital Observatory over Makat semi-arid steppe illustrating Zher Monitor's technological integration"
                className="w-full h-full object-cover min-h-[300px] md:min-h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium leading-tight">
                  {t('image_caption_observatory', 'Цифровая обсерватория: Спутниковые данные Sentinel-2 и Landsat 8 визуализируют деградацию (SOC, NDVI) для оперативного мониторинга.')}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ── Problem + Solution ────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-surface border border-borderFlat rounded-xl shadow-flat p-5 sm:p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-textMain mb-3 md:mb-4 flex items-center gap-3">
              <Activity className="text-orange-500 shrink-0" />
              {t('about_problem_title')}
            </h2>
            <p className="text-sm md:text-base text-textMuted leading-relaxed">
              {t('about_problem_text')}
            </p>
          </div>
          <div className="bg-surface border border-borderFlat rounded-xl shadow-flat p-5 sm:p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-textMain mb-3 md:mb-4 flex items-center gap-3">
              <ShieldAlert className="text-primary shrink-0" />
              {t('about_solution_title')}
            </h2>
            <p className="text-sm md:text-base text-textMuted leading-relaxed">
              {t('about_solution_text')}
            </p>
          </div>
        </div>

        {/* ── Technologies ─────────────────────────────────── */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-textMain mb-4 md:mb-6 flex items-center gap-3 px-2">
            <Server className="text-textMuted shrink-0" />
            {t('about_how_title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-surface border border-borderFlat rounded-xl shadow-flat p-5 md:p-6">
              <Satellite className="text-blue-500 mb-3 md:mb-4" size={28} />
              <h3 className="text-base md:text-lg font-bold text-textMain mb-2">{t('about_how_card_1_title')}</h3>
              <p className="text-xs md:text-sm text-textMuted">{t('about_how_card_1_text')}</p>
            </div>
            <div className="bg-surface border border-borderFlat rounded-xl shadow-flat p-5 md:p-6">
              <Layers className="text-emerald-500 mb-3 md:mb-4" size={28} />
              <h3 className="text-base md:text-lg font-bold text-textMain mb-2">{t('about_how_card_2_title')}</h3>
              <p className="text-xs md:text-sm text-textMuted">{t('about_how_card_2_text')}</p>
            </div>
            <div className="bg-surface border border-borderFlat rounded-xl shadow-flat p-5 md:p-6 sm:col-span-2 md:col-span-1">
              <Code className="text-indigo-500 mb-3 md:mb-4" size={28} />
              <h3 className="text-base md:text-lg font-bold text-textMain mb-2">{t('about_how_card_3_title')}</h3>
              <p className="text-xs md:text-sm text-textMuted">{t('about_how_card_3_text')}</p>
            </div>
          </div>
        </div>

        {/* ── 1. Мұнай өндірісі ───────────────────────── */}
        <div className="bg-surface border border-borderFlat rounded-xl shadow-flat overflow-hidden">
          <div className="flex items-center gap-3 bg-amber-500 px-4 py-3 md:px-6 md:py-4">
            <Droplets className="text-white shrink-0" size={20} />
            <h3 className="text-white font-bold text-sm md:text-base leading-snug">
              МҰНАЙ ӨНДІРІСІ · OIL PRODUCTION — ТАРИХ ЖӘНЕ ҚАЗІРГІ ЖАҒДАЙ
            </h3>
          </div>
          <div className="p-4 md:p-6 space-y-2 text-textMuted text-xs md:text-sm leading-relaxed">
            <p>• Мақат ауданы — Қазақстандағы ең ежелгі мұнай өндіру аймақтарының бірі.</p>
            <p>• Мақат кені 1915 жылы, Доссор кені 1911 жылы ашылған — КСРО-ның алғашқы мұнай кендері.</p>
            <p>• Қазіргі операторлар: ЕмбаМұнайГаз (КМГ еншілес), CNPC Kazakhstan мүдделері.</p>
            <p>• Жылдық өндіріс: ~2–3 млн тонна мұнай эквиваленті (Атырау облысы бойынша).</p>
            <p>• Негізгі инфрақұрылым: Ескі кеңестік ұңғымалар (1 000+), трубопровод желілері, Эмба–Атырау мұнай магистралі, газ компрессорлық станциялары.</p>
          </div>
        </div>

        {/* ── 2. Жерге қатысты заңбұзушылықтар ───────────────── */}
        <div className="bg-surface border border-borderFlat rounded-xl shadow-flat overflow-hidden">
          <div className="flex items-center gap-3 bg-red-600 px-4 py-3 md:px-6 md:py-4">
            <Scale className="text-white shrink-0" size={20} />
            <h3 className="text-white font-bold text-sm md:text-base leading-snug">
              ЖЕРГЕ ҚАТЫСТЫ ЗАҢБҰЗУШЫЛЫҚТАР · LAND LAW VIOLATIONS
            </h3>
          </div>
          <div className="p-4 md:p-6 space-y-4 md:space-y-5 text-xs md:text-sm text-textMuted leading-relaxed">
            {[
              { num: '1', title: 'ТАСТАНДЫ ҰҢҒЫМАЛАР (Abandoned Wells)', body: 'Ескі кеңестік тастанды ұңғымалар жабылмай, топырақ пен жерасты суларын улайды. Жауаптылық белгісіз, рекультивация жүргізілмеген.' },
              { num: '2', title: 'ЗАҢСЫЗ ЖЕРДІ ПАЙДАЛАНУ (Unauthorized Land Use)', body: 'Жер учаскелерін тіркеусіз пайдалану: буферлік аймақтарды бұзу, жайылым жерлерін өнеркәсіп мақсатына заңсыз пайдалану.' },
              { num: '3', title: 'МҰНАЙ ТӨГІЛУІ — РЕКУЛЬТИВАЦИЯ ЖОК (Oil Spills, No Remediation)', body: 'Трубопровод коррозиясынан болатын төгілулер жер бетін ластайды. Заң бойынша: ҚР Жер кодексі 140-бап — рекультивация міндетті.' },
              { num: '4', title: 'ЖАЙЫЛЫМ ЖЕРІН БҰЗУ (Pasture Degradation)', body: 'Шамадан тыс мал жаю → топырақ эрозиясы → деградация. ҚР Жер кодексі 65-бап бойынша жайылымды рационалды пайдалану міндет.' },
              { num: '5', title: 'ЖЕР МАҚСАТЫН ЗАҢСЫЗ ӨЗГЕРТУ (Illegal Land Reclassification)', body: 'Ауылшаруашылық жерлерін өнеркәсіпке аудару рұқсатсыз жүзеге асырылады.' },
            ].map((item) => (
              <div key={item.num} className="flex gap-3 md:gap-4">
                <span className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[10px] md:text-xs font-bold mt-0.5">
                  {item.num}
                </span>
                <div>
                  <p className="font-semibold text-textMain mb-1 leading-snug">{item.title}</p>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. ЖДН — SDG 15.3.1 ────────────────────── */}
        <div className="bg-surface border border-borderFlat rounded-xl shadow-flat overflow-hidden">
          <div className="flex items-center gap-3 bg-primary px-4 py-3 md:px-6 md:py-4">
            <Leaf className="text-white shrink-0" size={20} />
            <h3 className="text-white font-bold text-sm md:text-base leading-snug">
              ЖЕР ДЕГРАДАЦИЯСЫНЫҢ НЕЙТРАЛИТЕТІ · LAND DEGRADATION NEUTRALITY — SDG 15.3.1
            </h3>
          </div>
          <div className="p-4 md:p-6 text-xs md:text-sm text-textMuted leading-relaxed space-y-3">
            <p>• ЖДН — жерлердің деградацияланбауы, сапасының сақталуы немесе жақсаруы.</p>
            <p>• БМҰ ТДМ мақсаты 15.3: 2030 жылға дейін жер деградациясын болдырмау.</p>
            <p>• Қазақстан ЖДН міндеттемесін 2018 жылы UNCCD алдында қабылдаған.</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: '🌿', label: 'NDVI', desc: 'Жер жамылғысының жай-күйі (Land Cover Change)' },
                { icon: '🌱', label: 'SOC',  desc: 'Топырақ өнімділігі (Soil Organic Carbon)' },
                { icon: '📊', label: 'LPD',  desc: 'Жердің өнімділік динамикасы (Land Productivity Dynamics)' },
              ].map((ind) => (
                <div key={ind.label} className="bg-background border border-borderFlat rounded-lg p-3 md:p-4 text-center">
                  <div className="text-xl md:text-2xl mb-1">{ind.icon}</div>
                  <div className="font-bold text-textMain text-xs md:text-sm">{ind.label}</div>
                  <div className="text-[10px] md:text-xs text-textMuted mt-1 leading-tight">{ind.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="font-semibold text-red-700 text-xs md:text-sm">⚠ Мақат ауданы ЖДН бойынша: ТЕРІС ЖАҒДАЙ · NEGATIVE TREND</p>
              <p className="text-red-600 mt-1 text-[11px] md:text-xs">Мұнай өндірісі + климат өзгерісі + шамадан тыс жайылым → жер деградациясы жалғасуда.</p>
            </div>
          </div>
        </div>

        {/* ── 4. Мемлекеттік бақылауды жаңғырту ───────────────── */}
        <div className="bg-surface border border-borderFlat rounded-xl shadow-flat overflow-hidden">
          <div className="flex items-center gap-3 bg-blue-600 px-4 py-3 md:px-6 md:py-4">
            <Landmark className="text-white shrink-0" size={20} />
            <h3 className="text-white font-bold text-sm md:text-base leading-snug">
              МЕМЛЕКЕТТІК ЖЕР БАҚЫЛАУЫН ЖАҢҒЫРТУ · MODERNIZING STATE LAND CONTROL
            </h3>
          </div>
          <div className="p-4 md:p-6 space-y-4 text-xs md:text-sm text-textMuted leading-relaxed">
            <p className="text-textMain font-medium">
              "Деградация мен құқық бұзушылықтарды жедел анықтау мақсатында жерлерді мемлекеттік бақылауды жаңғырту"
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-2">
              {[
                { icon: <Wifi size={18} className="text-blue-500" />, title: 'ДҚЗ — Спутниктік мониторинг', body: 'MODIS · Landsat 8/9 · Sentinel-2 деректерін автоматты талдау' },
                { icon: <Bot size={18} className="text-purple-500" />, title: 'Жасанди интеллект (AI)', body: 'NDVI өзгерісі, температура аномалиясы → автоматты дабыл' },
                { icon: <Map size={18} className="text-emerald-500" />, title: 'ГАЖ платформа / GeoPortal', body: 'Нақты уақытта карта + статистика + есеп беру' },
                { icon: <ScrollText size={18} className="text-amber-500" />, title: 'Заңнамалық база', body: 'ҚР Жер кодексі (2003, өзгерт. 2023) · "Жер ресурстарын басқару туралы" ҚР Заңы' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 bg-background border border-borderFlat rounded-lg p-3 md:p-4">
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-textMain text-xs md:text-sm mb-1 leading-tight">{item.title}</p>
                    <p className="text-[11px] md:text-xs text-textMuted leading-tight">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}