import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldAlert, Globe, Map as MapIcon, Info, Layers, Shield, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false); // Close menu after language change on mobile
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinkClass = (path: string) => 
    `flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
      location.pathname === path 
        ? 'bg-primary/10 text-primary font-medium' 
        : 'text-textMuted hover:bg-gray-100 hover:text-textMain'
    }`;

  return (
    <nav className="bg-surface border-b border-borderFlat px-4 md:px-6 py-3 flex justify-between items-center shadow-sm relative z-50">
      {/* Левая часть: Логотип */}
      <div className="flex items-center gap-8">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 text-xl font-bold text-textMain">
          <div className="bg-primary text-white p-1.5 rounded">
             <ShieldAlert size={24} />
          </div>
          {t('app_name')}
        </Link>

        {/* Ссылки навигации (Десктоп) */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/" className={navLinkClass('/')}>
            <Info size={18} />
            {t('nav_about')}
          </Link>
          <Link to="/map" className={navLinkClass('/map')}>
            <MapIcon size={18} />
            {t('nav_map')}
          </Link>
          <Link to="/soil" className={navLinkClass('/soil')}>
            <Layers size={18} />
            {t('nav_sand')}
          </Link>
          <Link to="/monitoring" className={navLinkClass('/monitoring')}>
            <Shield size={18} />
            {t('nav_monitoring')}
          </Link>
        </div>
      </div>

      {/* Правая часть (Десктоп) */}
      <div className="hidden md:flex items-center gap-6">
        {/* Переключатель языков */}
        <div className="flex items-center gap-2 text-sm">
          <Globe size={18} className="text-textMuted" />
          <button onClick={() => changeLanguage('kk')} className={`font-medium ${i18n.language.startsWith('kk') ? 'text-primary' : 'text-textMuted'}`}>KK</button>
          <span className="text-borderFlat">|</span>
          <button onClick={() => changeLanguage('ru')} className={`font-medium ${i18n.language === 'ru' ? 'text-primary' : 'text-textMuted'}`}>RU</button>
          <span className="text-borderFlat">|</span>
          <button onClick={() => changeLanguage('en')} className={`font-medium ${i18n.language === 'en' ? 'text-primary' : 'text-textMuted'}`}>EN</button>
        </div>

        {/* Кнопка "Сообщить о нарушении" */}
        <Link 
          to="/report" 
          className="bg-danger hover:bg-red-600 text-white px-5 py-2.5 rounded-md font-medium transition-colors flex items-center gap-2 shadow-flat"
        >
          <ShieldAlert size={18} />
          {t('nav_report')}
        </Link>
      </div>

      {/* Мобильная кнопка бургера */}
      <button 
        className="md:hidden text-textMain p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Мобильное выпадающее меню */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-b border-borderFlat shadow-lg flex flex-col md:hidden py-4 px-4 gap-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            <Link to="/" onClick={closeMenu} className={navLinkClass('/')}>
              <Info size={18} />
              {t('nav_about')}
            </Link>
            <Link to="/map" onClick={closeMenu} className={navLinkClass('/map')}>
              <MapIcon size={18} />
              {t('nav_map')}
            </Link>
            <Link to="/soil" onClick={closeMenu} className={navLinkClass('/soil')}>
              <Layers size={18} />
              {t('nav_sand')}
            </Link>
            <Link to="/monitoring" onClick={closeMenu} className={navLinkClass('/monitoring')}>
              <ShieldAlert size={18} />
              {t('nav_monitoring')}
            </Link>
          </div>
          
          <hr className="border-borderFlat" />

          <div className="flex items-center justify-center gap-4 text-sm py-2">
            <Globe size={18} className="text-textMuted" />
            <button onClick={() => changeLanguage('kk')} className={`font-medium ${i18n.language.startsWith('kk') ? 'text-primary' : 'text-textMuted'}`}>KK</button>
            <span className="text-borderFlat">|</span>
            <button onClick={() => changeLanguage('ru')} className={`font-medium ${i18n.language === 'ru' ? 'text-primary' : 'text-textMuted'}`}>RU</button>
            <span className="text-borderFlat">|</span>
            <button onClick={() => changeLanguage('en')} className={`font-medium ${i18n.language === 'en' ? 'text-primary' : 'text-textMuted'}`}>EN</button>
          </div>

          <Link 
            to="/report" 
            onClick={closeMenu}
            className="bg-danger hover:bg-red-600 text-white px-5 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2 shadow-flat w-full"
          >
            <ShieldAlert size={18} />
            {t('nav_report')}
          </Link>
        </div>
      )}
    </nav>
  );
}