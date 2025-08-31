import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// Image
import IconArrow from "../../assets/static/icon/icon_arrow_right.svg?react";


export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="p-6 md:p-12 lg:p-14 xl:p-20 bg-bg">
            <div className="rounded-2xl p-10 md:p-14 2xl:py-16 text-font-dark bg-neutral-000">
                <div className="mx-auto space-y-10 2xl:space-y-16 max-w-2xl text-center">
                    <h2 className="text-2xl 2xl:text-4xl font-semibold">{t("footer.heading")}</h2>

                    <div className="flex items-center justify-between border-t border-b border-border py-8 lg:py-10">
                        <div className="space-x-2">
                            <a href="/" className="text-md 2xl:text-xl font-normal">LinkedIn</a>
                            <a href="/" className="text-md 2xl:text-xl font-normal">GitHub</a>
                        </div>
                        
                        <div>
                            <a href="/" className="relative flex items-center space-x-1 border border-border rounded-full pl-4 pr-3 py-1 text-sm">
                                <span className="text-md 2xl:text-lg">{t("button.contact")}</span>
                                <span className="rotate-45 mt-[2px]">
                                    <IconArrow className="w-4 2xl:w-5 h-auto fill-fill-dark" />
                                </span>
                            </a>
                        </div>
                    </div>

                    <Link to="/" className="text-2xl 2xl:text-4xl" aria-label={t("aria.footer.link")}>
                        <span aria-hidden="true">WSLY</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
