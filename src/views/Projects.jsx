import { useTranslation } from "react-i18next";
import { projects } from "../data/dataProjects";
// Components
import Layout from "../components/layout/Layout";
import TileProject from "../components/tile/TileProject";


export default function Projects() {
    const { t } = useTranslation();

    return (
        <Layout>
            <section className="min-h-screen">
                <div className="mx-auto space-y-12 py-28 px-8 2xl:max-w-7xl">
                    <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-center">{t("projects.heading")}</h1>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .map((project) => (
                                <TileProject
                                    key={project.id}
                                    tileLink={`/project/${project.id}`}
                                    tileTitle={project.title}
                                    tileText={project.description}
                                    tileTag={project.tag}
                                    tileImage={project.image_tease}
                                />
                            ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}
