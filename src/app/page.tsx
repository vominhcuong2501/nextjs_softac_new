import { CtaArea, FunFactArea, HeroArea, PlanArea, ServiceArea, VideoArea } from "@/components/home-page";

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <HeroArea />
            <VideoArea />
            <FunFactArea />
            <ServiceArea />
            <CtaArea />
            <PlanArea />
        </main>
    )
}
