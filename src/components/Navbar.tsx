import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldAlert, Globe, Map as MapIcon, Info } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinkClass = (path: string) => 
    `flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
      location.pathname === path 
        ? 'bg-primary/10 text-primary font-medium' 
        : 'text-textMuted hover:bg-gray-100 hover:text-textMain'
    }`;

  return (
    <nav className="bg-surface border-b border-borderFlat px-6 py-3 flex justify-between items-center shadow-sm relative z-50">
      {/* Левая часть: Логотип */}
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-textMain">
          <div className="bg-primary text-white p-1.5 rounded">
             <ShieldAlert size={24} />
          </div>
          {t('app_name')}
        </Link>

        {/* Ссылки навигации */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/" className={navLinkClass('/')}>
            <Info size={18} />
            {t('nav_about')}
          </Link>
          <Link to="/map" className={navLinkClass('/map')}>
            <MapIcon size={18} />
            {t('nav_map')}
          </Link>
        </div>
      </div>

      {/* Правая часть: Языки и Кнопка репорта */}
      <div className="flex items-center gap-6">
        {/* Переключатель языков */}
        <div className="flex items-center gap-2 text-sm">
          <Globe size={18} className="text-textMuted" />
          <button onClick={() => changeLanguage('kk')} className={`font-medium ${i18n.language.startsWith('kk') ? 'text-primary' : 'text-textMuted'}`}>KK</button>
          <span className="text-borderFlat">|</span>
          <button onClick={() => changeLanguage('ru')} className={`font-medium ${i18n.language === 'ru' ? 'text-primary' : 'text-textMuted'}`}>RU</button>
          <span className="text-borderFlat">|</span>
          <button onClick={() => changeLanguage('en')} className={`font-medium ${i18n.language === 'en' ? 'text-primary' : 'text-textMuted'}`}>EN</button>
        </div>

        {/* Кнопка "Сообщить о нарушении" (Яркий акцент) */}
        <Link 
          to="/report" 
          className="bg-danger hover:bg-red-600 text-white px-5 py-2.5 rounded-md font-medium transition-colors flex items-center gap-2 shadow-flat"
        >
          <ShieldAlert size={18} />
          {t('nav_report')}
        </Link>
      </div>
    </nav>
  );
}