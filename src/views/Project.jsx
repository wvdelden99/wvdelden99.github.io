
import { useParams } from "react-router-dom";
import { projects } from "../data/dataProjects";
import { useTranslation } from "react-i18next";
// Components
import Layout from "../components/layout/Layout";
// Images
import IconArrowRight from "../assets/static/icon/icon_arrow_right.svg?react";


export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);
    const { t } = useTranslation();
    const Logo = project.image_logo;

    if (!project) {
        return <p className="text-center mt-20">Project not found</p>;
    }

    return (
        <Layout>
            <section className="mt-40 min-h-screen">
                <div className="flex max-lg:justify-center mb-8 px-14">
                    {project.image_logo && (
                        <Logo className="w-3xs md:w-xs h-auto fill-fill-light" />
                    )}
                </div>

                <div className="flex flex-col lg:flex-row space-between">
                    <div className="flex flex-col items-flex-start space-between lg:w-1/2">
                        <div className="relative w-full h-auto">
                            <img src={project.image_tease} alt={t(project.title)} />
                        </div>

                        <div className="flex flex-col space-y-2 pt-14 pb-10 px-10 md:pt-14 md:px-14 h-full">
                            <h1 className="text-2xl md:text-4xl font-medium">{t(project.title)}</h1>
                            <div className="mb-8">
                                <span className="rounded-full py-1 px-3 text-xs md:text-sm font-medium text-font-dark bg-neutral-000">
                                    {t(project.tag)}
                                </span>
                            </div>

                            <p className="text-sm md:text-lg">
                                {t(project.description)}
                            </p>

                            {project.url && (
                                <div className="mt-auto">
                                    <a className="flex items-center justify-self-end border border-border rounded-full py-2 pl-5 pr-3 text-sm md:text-lg font-medium" 
                                        href={project.url} target="__blank">
                                        <span>{t("button.go-to-website")}</span>
                                        <span><IconArrowRight className="w-5 h-auto fill-fill-light" /></span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col items-flex-start space-between lg:w-1/2">
                        <div className="relative w-full h-auto">
                            {project.image_long && 
                                <img className="" src={project.image_long} alt={t(project.title)} />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
