import { useTranslation } from "react-i18next";


export default function NavLanguage() {
    const { i18n, t } = useTranslation();

    return (
        <div className="space-x-1 text-xs text-font-light">
            <button className={i18n.language === "nl" ? "font-bold" : ""}
                    onClick={() => i18n.changeLanguage("nl")}
                    aria-label={t("aria.nav.nav-lang-nl")}>
                <span aria-hidden="true">NL</span>
            </button>
            <span>/</span>
            <button className={i18n.language === "en" ? "font-bold" : ""}
                    onClick={() => i18n.changeLanguage("en")}
                    aria-label={t("aria.nav.nav-lang-en")}>
                <span aria-hidden="true">EN</span>
            </button>
        </div>
    );
}
