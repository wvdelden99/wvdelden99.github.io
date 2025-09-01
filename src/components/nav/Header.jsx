import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// Components
import NavLanguage from "./NavLanguage";
import NavToggle from "./NavToggle";


export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="fixed flex justify-between py-13 px-10 md:px-14 top-0 left-0 right-0 mix-blend-difference z-100">
            <Link to="/" className="text-3xl" aria-label={t("aria.header.link")}>
                <span aria-hidden="true">WSLY</span>
            </Link>

            <div className="flex items-center gap-3 border border-border rounded-full py-2 px-4">
                <NavLanguage />
                <NavToggle />
            </div>
        </header>
    )
}
