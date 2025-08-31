import { useTranslation } from "react-i18next";
import { pathArchive } from "../../config/path";
import { projects } from "../../data/dataProjects";
// Link
import TileProject from "../tile/TileProject";
import ButtonLink from "../button/ButtonLink";


export default function SectionProjects() {
    const { t } = useTranslation();

    return (
        <section className="py-14 px-8 bg-bg">
            <div className="mx-auto space-y-12 2xl:space-y-16 max-w-lg lg:max-w-5xl 2xl:max-w-7xl">
                <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-center">{t("home.heading.projects")}</h2>

                <div className="lg:flex max-lg:space-y-8 lg:space-x-6">
                    {projects
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .slice(0, 3)
                        .map((project) => (
                            <TileProject
                                key={project.id}
                                tileClass="lg:w-1/3"
                                tileLink={`/project/${project.id}`}
                                tileTitle={project.title}
                                tileText={project.description}
                                tileTag={project.tag}
                                tileImage={project.image_tease}
                            />
                        ))}
                </div>
                
                <div className="text-center">
                    <ButtonLink buttonLink={pathArchive} buttonText={t("button.archive")} ariaLabel={t("aria.button.archive")} />
                </div>
            </div>
        </section>
    )
}
