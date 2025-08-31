import { useTranslation } from "react-i18next";
import { pathArchive } from "../config/path";
// Components
import Layout from "../components/layout/Layout";
import ButtonLink from "../components/button/ButtonLink";
import SectionProjects from "../components/section/SectionProjects";
import SectionAboutMe from "../components/section/SectionAboutMe";


export default function Home() {
    const { t } = useTranslation();

    return (
        <Layout>
            <section className="bg-image | relative min-h-screen bg-cover md:bg-contain">
                <div className="fixed mx-auto xl:w-3/4 inset-0 -z-10">
                    <div className="bg-gradient-radial | w-full h-full"></div>
                </div>
                <div className="bg-gradient | absolute top-0 -bottom-1 inset-x-0"></div>

                <div className="relative grid grid-rows-[1fr_1fr] mx-auto px-6 max-w-sm md:max-w-2xl 2xl:max-w-5xl min-h-screen z-10">
                    <div className="@container | flex items-end">
                        <h1 className="w-full text-4xl @xs:text-5xl @xl:text-7xl @2xl:text-8xl font-medium uppercase">
                            <span className="block">Designer</span>
                            <span className="block text-right">Developer</span>
                        </h1>
                    </div>

                    <div className="flex flex-col items-center justify-center -mt-12 md:mt-0 mx-auto space-y-8 md:max-w-md xl:max-w-lg 2xl:max-w-xl">
                        <p className="text-md xl:text-lg 2xl:text-2xl text-center">{t("home.intro")}</p>

                        <ButtonLink buttonLink={pathArchive} buttonText={t("home.button")} ariaLabel={t("aria.button.archive")} />
                    </div>
                </div>
            </section>

            <SectionProjects />
            <SectionAboutMe />
        </Layout>
    )
}
