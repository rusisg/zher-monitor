import { useTranslation } from 'react-i18next';
import { Camera, MapPin, Send, AlertCircle } from 'lucide-react';

export default function Report() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 bg-background overflow-y-auto p-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Заголовок страницы */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-textMain mb-2 flex items-center gap-3">
            <AlertCircle className="text-danger" size={32} />
            {t('report_title')}
          </h1>
          <p className="text-textMuted text-lg">
            {t('report_description')}
          </p>
        </div>

        {/* Форма во Flat стиле */}
        <form className="bg-surface border border-borderFlat rounded-lg shadow-flat p-8">
          
          {/* Тип нарушения */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-textMain mb-2">{t('report_type_label')}</label>
            <select className="w-full bg-background border border-borderFlat rounded-md px-4 py-2.5 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
              <option value="">{t('report_type_placeholder')}</option>
              <option value="dump">{t('report_type_dump')}</option>
              <option value="soil">{t('report_type_soil')}</option>
              <option value="water">{t('report_type_water')}</option>
              <option value="oil">{t('report_type_oil')}</option>
              <option value="other">{t('report_type_other')}</option>
            </select>
          </div>

          {/* Описание */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-textMain mb-2">{t('report_description_label')}</label>
            <textarea 
              rows={4} 
              className="w-full bg-background border border-borderFlat rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              placeholder={t('report_description_placeholder')}
            ></textarea>
          </div>

          {/* Координаты (Заглушка для мини-карты) */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-textMain mb-2">{t('report_location_label')}</label>
            <div className="w-full h-40 bg-gray-100 border border-borderFlat rounded-md flex flex-col items-center justify-center text-textMuted cursor-pointer hover:bg-gray-200 transition-colors">
              <MapPin size={24} className="mb-2 text-primary" />
              <span>{t('report_location_help')}</span>
            </div>
          </div>

          {/* Загрузка фото */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-textMain mb-2">{t('report_photos_label')}</label>
            <div className="w-full border-2 border-dashed border-borderFlat rounded-md p-6 flex flex-col items-center justify-center text-textMuted bg-background hover:border-primary transition-colors cursor-pointer">
              <Camera size={28} className="mb-2" />
              <span>{t('report_photos_help')}</span>
            </div>
          </div>

          <hr className="border-borderFlat mb-6" />

          {/* Кнопка отправки */}
          <button type="button" className="w-full bg-primary hover:bg-emerald-600 text-white font-medium py-3 rounded-md transition-colors flex items-center justify-center gap-2">
            <Send size={18} />
            {t('report_submit')}
          </button>
          
        </form>

        {/* Место для того, что вы хотите добавить снизу (инструкции, статистика репортов и т.д.) */}
        <div className="mt-8">
          {/* Сюда добавим контент позже */}
        </div>

      </div>
    </div>
  );
}
