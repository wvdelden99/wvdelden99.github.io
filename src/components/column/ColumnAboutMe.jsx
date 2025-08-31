import { useTranslation } from "react-i18next";


export default function ColumnAboutMe({columnTitle, columnSubtitle, columnIcons, columnYears}) {
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-between border-b border-border py-8">
            <div className={` ${columnSubtitle && "flex flex-col"}`}>
                <span className="text-md 2xl:text-xl font-semibold">{t(columnTitle)}</span>
                {columnSubtitle && (
                    <span className="text-sm 2xl:text-lg font-normal text-border">{t(columnSubtitle)}</span>
                )}
            </div>

            <div className={`${columnIcons && "flex space-x-2" }`}>
                {columnIcons && (
                    columnIcons.map((Icon, i) => (
                        <Icon key={i} className="w-4 2xl:w-6 h-auto fill-fill-light" />
                    ))
                )}
                {columnYears && (
                    <span className="text-sm 2xl:text-lg font-normal text-border">{columnYears}</span>
                )}
            </div>
        </div>
    )
}
