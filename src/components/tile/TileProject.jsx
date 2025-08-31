import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// Image
import IconArrowRight from "./../../assets/static/icon/icon_arrow_right.svg?react";


export default function TileProject({tileClass, tileLink, tileTitle, tileText, tileTag, tileImage}) {
    const { t } = useTranslation();

    return (
        <Link to={tileLink} className={`block rounded-3xl pt-8 lg:pt-12 xl:pt-14 pb-3 px-6 2xl:px-6 text-font-dark bg-neutral-000 ${tileClass}`}>
            <div className="space-y-2 px-3">
                <h3 className="text-2xl 2xl:text-3xl font-semibold">{t(tileTitle)}</h3>
                <p className="text-sm md:text-md 2xl:text-lg line-clamp-2">
                    {t(tileText)}
                </p>
            </div>

            <div className="relative mt-7 mb-4 rounded-2xl h-[180px] md:h-[200px]">
                <div className="absolute m-4 rounded-full px-3 bg-neutral-000">
                    <span className="align-middle text-xs 2xl:text-sm font-medium">{t(tileTag)}</span>
                </div>

                <img className="rounded-2xl w-full h-full object-cover" src={tileImage} alt={t(tileTitle)} />
            </div>

            <div className="text-right">
                <span className="inline-block border border-neutral-900 rounded-full py-1 pl-6 pr-2">
                    <IconArrowRight className="icon | fill-fill-dark" />
                </span>
            </div>
        </Link>
    )
}
