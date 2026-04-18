import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "app_name": "GeoGuard",
      "nav_map": "Map",
      "nav_about": "About Us",
      "nav_report": "Report Violation",
      "filter_title": "Map Layers",
      "about_hero_title": "GeoGuard: Eco Monitoring",
      "about_hero_text": "Upgrading state land control to detect degradation and violations quickly across the Makat district.",
      "about_problem_title": "The Problem",
      "about_problem_text": "Atyrau region, especially Makat and Sagiz, suffers soil degradation, vegetation loss, illegal dumping, and excavation incidents. Vast areas make manual patrols ineffective.",
      "about_solution_title": "Our Solution",
      "about_solution_text": "A hybrid of satellite analytics and citizen reporting. The platform analyzes indices like NDVI, SAVI, and VCI and enables local residents to report violations on the ground.",
      "about_how_title": "How It Works",
      "about_how_card_1_title": "Google Earth Engine",
      "about_how_card_1_text": "Acquire and preprocess multispectral satellite imagery (NDSI, NDVI, SAVI) and export Cloud Optimized GeoTIFFs.",
      "about_how_card_2_title": "Leaflet & WebGL",
      "about_how_card_2_text": "Render raster layers in-browser on top of topographic and satellite maps in real time.",
      "about_how_card_3_title": "React & Tailwind",
      "about_how_card_3_text": "A modern SPA interface in Flat Design with multi-language support (RU, KK, EN).",
      "about_team_title": "Project Team",
      "about_team_dev_title": "Нурсат узын красавчик",
      "about_team_dev_text": "GEE integration, app architecture, map logic, and deployment.",
      "about_team_ui_title": "Биреу",
      "about_team_ui_text": "User experience, Flat design, localization, and layout.",
      "about_team_sa_title": "Биреу",
      "about_team_sa_text": "Concept development, product logic, and presentation preparation.",
      "report_title": "Report a Violation",
      "report_description": "Help us detect environmental breaches. Fill out the form below and the report will be reviewed.",
      "report_type_label": "Violation Type *",
      "report_type_placeholder": "Select a violation type...",
      "report_type_dump": "Illegal dumping / Waste",
      "report_type_soil": "Soil damage / Illegal excavation",
      "report_type_water": "Water contamination",
      "report_type_oil": "Oil spill",
      "report_type_other": "Other",
      "report_description_label": "Description *",
      "report_description_placeholder": "Describe what you observed...",
      "report_location_label": "Location *",
      "report_location_help": "Click to choose a point on the map",
      "report_photos_label": "Photos (optional)",
      "report_photos_help": "Drag photos here or click to upload",
      "report_submit": "Submit Report"
    }
  },
  ru: {
    translation: {
      "app_name": "GeoGuard",
      "nav_map": "Карта",
      "nav_about": "О проекте",
      "nav_report": "Сообщить о нарушении",
      "filter_title": "Слои карты",
      "about_hero_title": "GeoGuard: Эко-Мониторинг",
      "about_hero_text": "Активная модернизация государственного контроля за землями для оперативного выявления деградации и правонарушений в Макатском районе.",
      "about_problem_title": "Проблематика",
      "about_problem_text": "Атырауская область (в частности Макатский район и Сагиз) подвержена агрессивной деградации почв. Засоление, потеря растительности и незаконная деятельность (стихийные свалки, раскопки) остаются без своевременного внимания из-за огромных территорий и сложности ручного патрулирования.",
      "about_solution_title": "Наше решение",
      "about_solution_text": "Симбиоз спутниковой аналитики и гражданского контроля. Платформа автоматически обрабатывает индексы (NDVI, SAVI, VCI) для выявления \"мертвых\" зон, а модуль гражданских обращений позволяет местным жителям фиксировать правонарушения на местах.",
      "about_how_title": "Как это работает",
      "about_how_card_1_title": "Google Earth Engine",
      "about_how_card_1_text": "Получение и первичная обработка мультиспектральных снимков со спутников (NDSI, NDVI, SAVI) с последующим экспортом в Cloud Optimized GeoTIFF.",
      "about_how_card_2_title": "Leaflet & WebGL",
      "about_how_card_2_text": "Высокопроизводительный рендер растровых слоев прямо в браузере клиента поверх топографических и спутниковых карт в реальном времени.",
      "about_how_card_3_title": "React & Tailwind",
      "about_how_card_3_text": "Современный, масштабируемый Single Page Application интерфейс в стиле Flat Design с поддержкой мультиязычности (RU, KK, EN).",
      "about_team_title": "Команда проекта",
      "about_team_dev_title": "Нурсат узын красавчик",
      "about_team_dev_text": "Интеграция GEE, архитектура приложения, логика карт и деплой.",
      "about_team_ui_title": "Биреу",
      "about_team_ui_text": "Проектирование пользовательского опыта, Flat-дизайн, локализация и верстка.",
      "about_team_sa_title": "Биреу",
      "about_team_sa_text": "Проработка концепции, бизнес-логика продукта и подготовка презентации.",
      "report_title": "Сообщите о нарушении",
      "report_description": "Помогите нам обнаружить экологические нарушения. Заполните форму ниже, и данные будут отправлены на проверку.",
      "report_type_label": "Тип нарушения *",
      "report_type_placeholder": "Выберите тип...",
      "report_type_dump": "Стихийная свалка / Мусор",
      "report_type_soil": "Повреждение почвы / Незаконная раскопка",
      "report_type_water": "Загрязнение водоема",
      "report_type_oil": "Разлив нефтепродуктов",
      "report_type_other": "Другое",
      "report_description_label": "Описание *",
      "report_description_placeholder": "Опишите, что вы заметили...",
      "report_location_label": "Местоположение *",
      "report_location_help": "Нажмите, чтобы указать точку на карте",
      "report_photos_label": "Фотографии (опционально)",
      "report_photos_help": "Перетащите фото сюда или нажмите для загрузки",
      "report_submit": "Отправить отчет"
    }
  },
  kk: {
    translation: {
      "app_name": "GeoGuard",
      "nav_map": "Карта",
      "nav_about": "Жоба туралы",
      "nav_report": "Заң бұзушылық туралы хабарлау",
      "filter_title": "Карта қабаттары",
      "about_hero_title": "GeoGuard: Эко-Бақылау",
      "about_hero_text": "Мақат ауданындағы жерлерді деградация мен бұзушылықтарды жылдам анықтауға мемлекеттік бақылауды жаңарту.",
      "about_problem_title": "Мәселе",
      "about_problem_text": "Атырау облысы, әсіресе Мақат және Сағыз, топырақ деградациясына, өсімдіктің жоюлуына, заңсыз қоқыс тастауға және қазуға ұшырайды. Үлкен аудандар қолмен патрульдеуді қиындатады.",
      "about_solution_title": "Шешіміміз",
      "about_solution_text": "Ғарыштан алынған талдау мен азаматтық хабарлауды біріктіру. Жүйе NDVI, SAVI, VCI сияқты көрсеткіштерді өңдеп, жергілікті тұрғындарға бұзушылықтарды тіркеуге мүмкіндік береді.",
      "about_how_title": "Қалай жұмыс істейді",
      "about_how_card_1_title": "Google Earth Engine",
      "about_how_card_1_text": "Көп спектрлі спутниктік кескіндерді (NDSI, NDVI, SAVI) алу және алдын ала өңдеу, Cloud Optimized GeoTIFF ретінде экспорттау.",
      "about_how_card_2_title": "Leaflet & WebGL",
      "about_how_card_2_text": "Шолғышта растрлық қабаттарды нақты уақытта топографиялық және спутниктік карта үстінде көрсету.",
      "about_how_card_3_title": "React & Tailwind",
      "about_how_card_3_text": "Қазіргі заманғы SPA интерфейсі, Flat Design стилінде, көптілді қолдауымен (RU, KK, EN).",
      "about_team_title": "Жоба командасы",
      "about_team_dev_title": "Нурсат узын красавчик",
      "about_team_dev_text": "GEE интеграциясы, қолданба архитектурасы, карта логикасы және орналастыру.",
      "about_team_ui_title": "Биреу",
      "about_team_ui_text": "Пайдаланушы тәжірибесін, Flat дизайнды, локализацияны және макетті жобалау.",
      "about_team_sa_title": "Биреу",
      "about_team_sa_text": "Тұжырымдама әзірлеу, өнім логикасы және презентация дайындау.",
      "report_title": "Бұзушылық туралы хабарлау",
      "report_description": "Экологиялық бұзушылықтарды анықтауға көмектесіңіз. Төмендегі форманы толтырыңыз, және есеп тексеріледі.",
      "report_type_label": "Бұзушылық түрі *",
      "report_type_placeholder": "Түрін таңдаңыз...",
      "report_type_dump": "Заңсыз қоқыс тастау / Қоқыс",
      "report_type_soil": "Топыраққа зақым келтіру / Заңсыз қазу",
      "report_type_water": "Суға ластану",
      "report_type_oil": "Мұнай төгілуі",
      "report_type_other": "Басқа",
      "report_description_label": "Сипаттамасы *",
      "report_description_placeholder": "Не байқағаныңызды сипаттаңыз...",
      "report_location_label": "Орналасқан жері *",
      "report_location_help": "Картаны нүктені таңдау үшін басыңыз",
      "report_photos_label": "Фотосуреттер (міндетті емес)",
      "report_photos_help": "Фотосуреттерді мұнда сүйреп апарыңыз немесе жүктеу үшін басыңыз",
      "report_submit": "Есеп жіберу"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru', // По умолчанию русский
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;