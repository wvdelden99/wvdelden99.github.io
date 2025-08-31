
import { useParams } from "react-router-dom";
import { projects } from "../data/dataProjects";
import { useTranslation } from "react-i18next";
// Components
import Layout from "../components/layout/Layout";


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
            <section className="mt-36 min-h-screen">
                <div className="mb-6 px-14">
                    <Logo className="w-3xs h-auto fill-fill-light" />
                </div>

                <div className="flex items-flex-start space-between">
                    <div className="flex flex-col items-flex-start space-between w-1/2">
                        <div className="relative w-full h-auto">
                            <div className="block">
                                <img src={project.image_tease} alt="" />
                            </div>
                        </div>

                        <div className="space-y-2 p-14">
                            <h1 className="text-2xl font-medium">{t(project.title)}</h1>
                            <div className="mb-8">
                                <span className="rounded-full py-1 px-3 text-sm font-medium text-font-dark bg-neutral-000">{t(project.tag)}</span>
                            </div>

                            <p>
                                {t(project.description)}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-flex-start space-between w-1/2">
                        <div className="relative w-full h-auto">
                            <div className="block">
                                <img className="" src={project.image_long} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
