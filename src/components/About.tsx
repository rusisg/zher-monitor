import { useTranslation } from 'react-i18next';
import {
  Target, Satellite, ShieldAlert, Layers, Activity,
  Server, Code, Droplets, Scale, Leaf, Landmark,
  FlaskConical, Wifi, Bot, Map, ScrollText
} from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 bg-background overflow-y-auto p-8 custom-scrollbar">
      <div className="max-w-5xl mx-auto space-y-8 pb-12">

        {/* ── Hero секция ─────────────────────────────────────────────── */}
        <div className="bg-surface border border-borderFlat rounded-xl shadow-flat p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
            <Target size={32} />
          </div>
          <h1 className="text-4xl font-bold text-textMain mb-4">
            {t('about_hero_title')}
          </h1>
          <p className="text-xl text-textMuted max-w-3xl mx-auto leading-relaxed">
            {t('about_hero_text')}
          </p>
        </div>

        {/* ── Проблема + Шешім ────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-surface border border-borderFlat rounded-xl shadow-flat p-8">
            <h2 className="text-2xl font-bold text-textMain mb-4 flex items-center gap-3">
              <Activity className="text-orange-500" />
              {t('about_problem_title')}
            </h2>
            <p className="text-textMuted leading-relaxed">
              {t('about_problem_text')}
            </p>
          </div>
          <div className="bg-surface border border-borderFlat rounded-xl shadow-flat p-8">
            <h2 className="text-2xl font-bold text-textMain mb-4 flex items-center gap-3">
              <ShieldAlert className="text-primary" />
              {t('about_solution_title')}
            </h2>
            <p className="text-textMuted leading-relaxed">
              {t('about_solution_text')}
            </p>
          </div>
        </div>

        {/* ── Технологиялар ───────────────────────────────────────────── */}
        <div>
          <h2 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-3 px-2">
            <Server className="text-textMuted" />
            {t('about_how_title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface border border-borderFlat rounded-xl shadow-flat p-6">
              <Satellite className="text-blue-500 mb-4" size={28} />
              <h3 className="text-lg font-bold text-textMain mb-2">{t('about_how_card_1_title')}</h3>
              <p className="text-sm text-textMuted">{t('about_how_card_1_text')}</p>
            </div>
            <div className="bg-surface border border-borderFlat rounded-xl shadow-flat p-6">
              <Layers className="text-emerald-500 mb-4" size={28} />
              <h3 className="text-lg font-bold text-textMain mb-2">{t('about_how_card_2_title')}</h3>
              <p className="text-sm text-textMuted">{t('about_how_card_2_text')}</p>
            </div>
            <div className="bg-surface border border-borderFlat rounded-xl shadow-flat p-6">
              <Code className="text-indigo-500 mb-4" size={28} />
              <h3 className="text-lg font-bold text-textMain mb-2">{t('about_how_card_3_title')}</h3>
              <p className="text-sm text-textMuted">{t('about_how_card_3_text')}</p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            МАҚАТ АУДАНЫ — ЖЕРГЕ ҚАТЫСТЫ АҚПАРАТТЫҚ АНЫҚТАМАЛЫҚ
            Land Control Information Reference
        ══════════════════════════════════════════════════════════════ */}
        {/* ── Бөлім тақырыбы / Section heading ───────────────────────── */}
        <div className="bg-surface border border-borderFlat rounded-xl shadow-flat p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          <h2 className="text-2xl font-bold text-textMain mb-1">
            📋 МАҚАТ АУДАНЫ — ЖЕРГЕ ҚАТЫСТЫ АҚПАРАТТЫҚ АНЫҚТАМАЛЫҚ
          </h2>
          <p className="text-textMuted text-sm">
            Land Control Information Reference · Деградация мен құқық бұзушылықтарды жедел анықтауға арналған мемлекеттік бақылау жүйесі · ЖДН — Land Degradation Neutrality
          </p>
        </div>

        {/* ── Негізгі статистика / Key Stats ──────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '4 900 км²', label: 'Аудан / Area',              color: 'text-blue-600'   },
            { value: '1899 ж.',   label: 'Алғашқы мұнай / First oil', color: 'text-amber-600'  },
            { value: '8 нысан',   label: 'Мұнай кені / Oil sites',    color: 'text-red-600'    },
            { value: '~48%',      label: 'Деградация / Degraded',     color: 'text-red-600'    },
          ].map((s) => (
            <div key={s.label} className="bg-surface border border-borderFlat rounded-xl shadow-flat p-5 text-center">
              <div className={`text-2xl font-extrabold ${s.color} mb-1`}>{s.value}</div>
              <div className="text-xs text-textMuted">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── 1. Мұнай өндірісі ───────────────────────────────────────── */}
        <div className="bg-surface border border-borderFlat rounded-xl shadow-flat overflow-hidden">
          <div className="flex items-center gap-3 bg-amber-500 px-6 py-4">
            <Droplets className="text-white" size={20} />
            <h3 className="text-white font-bold text-base">
              МҰНАЙ ӨНДІРІСІ · OIL PRODUCTION — ТАРИХ ЖӘНЕ ҚАЗІРГІ ЖАҒДАЙ
            </h3>
          </div>
          <div className="p-6 space-y-2 text-textMuted text-sm leading-relaxed">
            <p>• Мақат ауданы — Қазақстандағы ең ежелгі мұнай өндіру аймақтарының бірі.</p>
            <p>• Мақат кені 1915 жылы, Доссор кені 1911 жылы ашылған — КСРО-ның алғашқы мұнай кендері.</p>
            <p>• Қазіргі операторлар: ЕмбаМұнайГаз (КМГ еншілес), CNPC Kazakhstan мүдделері.</p>
            <p>• Жылдық өндіріс: ~2–3 млн тонна мұнай эквиваленті (Атырау облысы бойынша).</p>
            <p>• Негізгі инфрақұрылым: Ескі кеңестік ұңғымалар (1 000+), трубопровод желілері, Эмба–Атырау мұнай магистралі, газ компрессорлық станциялары.</p>
          </div>
        </div>

        {/* ── 2. Жерге қатысты заңбұзушылықтар ──────────────────────── */}
        <div className="bg-surface border border-borderFlat rounded-xl shadow-flat overflow-hidden">
          <div className="flex items-center gap-3 bg-red-600 px-6 py-4">
            <Scale className="text-white" size={20} />
            <h3 className="text-white font-bold text-base">
              ЖЕРГЕ ҚАТЫСТЫ ЗАҢБҰЗУШЫЛЫҚТАР · LAND LAW VIOLATIONS
            </h3>
          </div>
          <div className="p-6 space-y-4 text-sm text-textMuted leading-relaxed">
            {[
              {
                num: '1',
                title: 'ТАСТАНДЫ ҰҢҒЫМАЛАР (Abandoned Wells)',
                body: 'Ескі кеңестік тастанды ұңғымалар жабылмай, топырақ пен жерасты суларын улайды. Жауаптылық белгісіз, рекультивация жүргізілмеген.',
              },
              {
                num: '2',
                title: 'ЗАҢСЫЗ ЖЕРДІ ПАЙДАЛАНУ (Unauthorized Land Use)',
                body: 'Жер учаскелерін тіркеусіз пайдалану: буферлік аймақтарды бұзу, жайылым жерлерін өнеркәсіп мақсатына заңсыз пайдалану.',
              },
              {
                num: '3',
                title: 'МҰНАЙ ТӨГІЛУІ — РЕКУЛЬТИВАЦИЯ ЖОК (Oil Spills, No Remediation)',
                body: 'Трубопровод коррозиясынан болатын төгілулер жер бетін ластайды. Заң бойынша: ҚР Жер кодексі 140-бап — рекультивация міндетті.',
              },
              {
                num: '4',
                title: 'ЖАЙЫЛЫМ ЖЕРІН БҰЗУ (Pasture Degradation)',
                body: 'Шамадан тыс мал жаю → топырақ эрозиясы → деградация. ҚР Жер кодексі 65-бап бойынша жайылымды рационалды пайдалану міндет.',
              },
              {
                num: '5',
                title: 'ЖЕР МАҚСАТЫН ЗАҢСЫЗ ӨЗГЕРТУ (Illegal Land Reclassification)',
                body: 'Ауылшаруашылық жерлерін өнеркәсіпке аудару рұқсатсыз жүзеге асырылады.',
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">
                  {item.num}
                </span>
                <div>
                  <p className="font-semibold text-textMain mb-1">{item.title}</p>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. ЖДН — SDG 15.3.1 ────────────────────────────────────── */}
        <div className="bg-surface border border-borderFlat rounded-xl shadow-flat overflow-hidden">
          <div className="flex items-center gap-3 bg-primary px-6 py-4">
            <Leaf className="text-white" size={20} />
            <h3 className="text-white font-bold text-base">
              ЖЕР ДЕГРАДАЦИЯСЫНЫҢ НЕЙТРАЛИТЕТІ · LAND DEGRADATION NEUTRALITY — SDG 15.3.1
            </h3>
          </div>
          <div className="p-6 text-sm text-textMuted leading-relaxed space-y-3">
            <p>• ЖДН — жерлердің деградацияланбауы, сапасының сақталуы немесе жақсаруы.</p>
            <p>• БМҰ ТДМ мақсаты 15.3: 2030 жылға дейін жер деградациясын болдырмау.</p>
            <p>• Қазақстан ЖДН міндеттемесін 2018 жылы UNCCD алдында қабылдаған.</p>
            <div className="mt-4 grid md:grid-cols-3 gap-3">
              {[
                { icon: '🌿', label: 'NDVI', desc: 'Жер жамылғысының жай-күйі (Land Cover Change)' },
                { icon: '🌱', label: 'SOC',  desc: 'Топырақ өнімділігі (Soil Organic Carbon)' },
                { icon: '📊', label: 'LPD',  desc: 'Жердің өнімділік динамикасы (Land Productivity Dynamics)' },
              ].map((ind) => (
                <div key={ind.label} className="bg-background border border-borderFlat rounded-lg p-4 text-center">
                  <div className="text-2xl mb-1">{ind.icon}</div>
                  <div className="font-bold text-textMain text-sm">{ind.label}</div>
                  <div className="text-xs text-textMuted mt-1">{ind.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="font-semibold text-red-700">⚠ Мақат ауданы ЖДН бойынша: ТЕРІС ЖАҒДАЙ · NEGATIVE TREND</p>
              <p className="text-red-600 mt-1">Мұнай өндірісі + климат өзгерісі + шамадан тыс жайылым → жер деградациясы жалғасуда.</p>
            </div>
          </div>
        </div>

        {/* ── 4. Мемлекеттік бақылауды жаңғырту ─────────────────────── */}
        <div className="bg-surface border border-borderFlat rounded-xl shadow-flat overflow-hidden">
          <div className="flex items-center gap-3 bg-blue-600 px-6 py-4">
            <Landmark className="text-white" size={20} />
            <h3 className="text-white font-bold text-base">
              МЕМЛЕКЕТТІК ЖЕР БАҚЫЛАУЫН ЖАҢҒЫРТУ · MODERNIZING STATE LAND CONTROL
            </h3>
          </div>
          <div className="p-6 space-y-4 text-sm text-textMuted leading-relaxed">
            <p className="text-textMain font-medium">
              "Деградация мен құқық бұзушылықтарды жедел анықтау мақсатында жерлерді мемлекеттік бақылауды жаңғырту"
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              {[
                {
                  icon: <Wifi size={18} className="text-blue-500" />,
                  title: 'ДҚЗ — Спутниктік мониторинг (Remote Sensing)',
                  body: 'MODIS · Landsat 8/9 · Sentinel-2 деректерін автоматты талдау',
                },
                {
                  icon: <Bot size={18} className="text-purple-500" />,
                  title: 'Жасанды интеллект (AI Anomaly Detection)',
                  body: 'NDVI өзгерісі, температура аномалиясы → автоматты дабыл',
                },
                {
                  icon: <Map size={18} className="text-emerald-500" />,
                  title: 'ГАЖ платформа / GeoPortal',
                  body: 'Нақты уақытта карта + статистика + есеп беру',
                },
                {
                  icon: <ScrollText size={18} className="text-amber-500" />,
                  title: 'Заңнамалық база / Legal Framework',
                  body: 'ҚР Жер кодексі (2003, өзгерт. 2023) · "Жер ресурстарын басқару туралы" ҚР Заңы · ҚР Экологиялық кодексі (2021)',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 bg-background border border-borderFlat rounded-lg p-4">
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-textMain text-xs mb-1">{item.title}</p>
                    <p className="text-xs">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 5. Мұнай ластануы ───────────────────────────────────────── */}
        <div className="bg-surface border border-borderFlat rounded-xl shadow-flat overflow-hidden">
          <div className="flex items-center gap-3 bg-violet-700 px-6 py-4">
            <FlaskConical className="text-white" size={20} />
            <h3 className="text-white font-bold text-base">
              МҰНАЙ ЛАСТАНУЫ · OIL CONTAMINATION — ҒЫЛЫМИ ДЕРЕКТЕР
            </h3>
          </div>
          <div className="p-6 space-y-3 text-sm text-textMuted leading-relaxed">
            <p>• Атырау облысында <strong className="text-textMain">1 200+</strong> тастанды ұңғыма бар (ЕБРР есебі / EBRD Report, 2019).</p>
            <p>• Мақат ауданында топырақтағы мұнай өнімдерінің концентрациясы кейбір нысандарда ШРК-дан <strong className="text-textMain">50–200 есе жоғары</strong> (ҚазГидромет деректері).</p>
            <p>• Ластанған жер ауданы: <strong className="text-textMain">~15 000–20 000 га</strong> (Атырау облысы бойынша).</p>
            <p>• Топырақ рекультивациясының бағасы: <strong className="text-textMain">$50 000–200 000/га</strong> (UNEP, 2021).</p>
            <div className="grid md:grid-cols-3 gap-3 mt-2">
              {[
                {
                  label: 'Атмосфера / Atmosphere',
                  body: 'Газды факелдер (газды жағу) — CO₂, CH₄, SO₂ шығарындылары.',
                  color: 'border-orange-300 bg-orange-50',
                  text: 'text-orange-700',
                },
                {
                  label: 'Жерасты сулары / Groundwater',
                  body: 'Бензол, толуол, PAH қосылыстары табылған.',
                  color: 'border-blue-300 bg-blue-50',
                  text: 'text-blue-700',
                },
                {
                  label: 'Өсімдік жамылғысы / NDVI',
                  body: 'Ластанған аймақта: 0.02–0.05 | Таза аймақта: 0.10–0.15',
                  color: 'border-emerald-300 bg-emerald-50',
                  text: 'text-emerald-700',
                },
              ].map((card) => (
                <div key={card.label} className={`rounded-lg border p-4 ${card.color}`}>
                  <p className={`font-semibold text-xs mb-1 ${card.text}`}>{card.label}</p>
                  <p className="text-xs text-textMuted">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}