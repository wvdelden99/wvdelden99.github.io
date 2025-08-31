import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function NavToggle() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    return (
        <button className={`nav-hamburger ${open ? "nav-open" : ""}`}
                onClick={() => setOpen(!open)}
                aria-label={t("aria.nav.nav-toggle")}
                aria-expanded={open}
                aria-controls="nav">
            <span className="nav-hamburger-line"></span>
            <span className="nav-hamburger-line"></span>
            <span className="nav-hamburger-line"></span>
        </button>
    )
}
