import { useTranslation } from 'react-i18next';
import './styles/LanguageList.css';

const LanguageList = () => {
  const [tL, i18n] = useTranslation("Languages");

  return (
    <div className="Language-list-container">
      <label className='text-color1' htmlFor="languages" >{tL("lang-select")}</label>
      <select id="languages" onChange={(e) => i18n.changeLanguage(e.target.value)} >
        <option value="en">{tL("en")}</option>
        <option value="es">{tL("es")}</option>
      </select>
    </div>
  )
}

export default LanguageList;