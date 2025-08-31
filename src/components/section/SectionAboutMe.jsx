import { useTranslation } from "react-i18next";
// Image
import ImageAboutMe from "../../assets/static/image/about-me_wesley.png";
import { dataAboutMeEducation, dataAboutMeExperience } from "../../data/dataAboutMe";
import ColumnAboutMe from "../column/ColumnAboutMe";


export default function SectionAboutMe() {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-bg">
            <div className="mx-auto space-y-14 px-10 max-w-4xl 2xl:max-w-7xl">
                <h2 className="text-2xl 2xl:text-4xl font-semibold text-center">{t("about_me.heading")}</h2>

                <div className="flex flex-col md:flex-row items-center mx-auto space-y-10 2xl:space-x-10 px-2 max-w-xl 2xl:max-w-4xl">
                    <div className="md:w-2/5">
                        <div className="w-40 2xl:w-60 h-auto">
                            <img className="rounded-full" src={ImageAboutMe} alt="." />
                        </div>
                    </div>

                    <div className="space-y-4 md:w-3/5 text-sm 2xl:text-lg">
                        <p>{t("about_me.text_1")}</p>
                        <p>{t("about_me.text_2")}</p>
                        <p>{t("about_me.text_3")}</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row mt-26 mx-auto max-lg:space-y-20 lg:space-x-20 max-lg:max-w-lg">
                    <div className="lg:w-1/2">
                        <h3 className="border-b border-border pb-6 text-xl 2xl:text-2xl font-semibold text-center">{t("about_me.subheading.experience")}</h3>
                        {dataAboutMeExperience.map((column) => (
                            <ColumnAboutMe key={column.title}
                                            columnTitle={column.title}
                                            columnIcons={column.icons} />
                        ))}
                    </div>

                    <div className="lg:w-1/2">
                        <h3 className="border-b border-border pb-6 text-xl 2xl:text-2xl font-semibold text-center">{t("about_me.subheading.education")}</h3>
                        {dataAboutMeEducation.map((column) => (
                            <ColumnAboutMe key={column.title}
                                            columnTitle={column.title}
                                            columnSubtitle={column.subtitle}
                                            columnYears={column.years} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}