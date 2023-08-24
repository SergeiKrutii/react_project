import PropTypes from "prop-types";
import enFlag from "components/images/english.png";
import ukFlag from "components/images/ukrainian.png";
import ruFlag from "components/images/russian.png";
import {
  SwitcherWraper,
  ButtonWraper,
  ButtonSwitcher,
} from "./StyledLanguageSwitcher";
import { useTranslation } from "react-i18next";

const languages = {
  en: { icon: enFlag, nativeName: "English" },
  uk: { icon: ukFlag, nativeName: "Українська" },
  ru: { icon: ruFlag, nativeName: "Русский" },
};

const LanguageSwitcher = (props) => {
  const { i18n } = useTranslation();

  return (
    <SwitcherWraper>
      {Object.keys(languages).map((lng) => (
        <ButtonWraper
          key={lng}
          active={i18n.resolvedLanguage === lng ? true : false}
        >
          <ButtonSwitcher
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            <img
              src={languages[lng].icon}
              alt={languages[lng].nativeName}
              width="24"
            />
          </ButtonSwitcher>
        </ButtonWraper>
      ))}
    </SwitcherWraper>
  );
};

LanguageSwitcher.propTypes = {};

export default LanguageSwitcher;
