import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";
import RetroGrid from "../ui/retro-grid";

const Appflow = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-foreground/10 rounded-3xl overflow-hidden relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]"></div>
                    <div className="flex flex-col items-center justify-center w-full z-20">
                        <h2 className="text-4xl md:text-6xl font-heading heading font-semibold !leading-tight mt-6">
                            Transform your data with us <br className="hidden md:block" /> Ready to get structured?
                        </h2>
                        <p className="text-base md:text-lg text-center text-accent-foreground/80 max-w-xl mx-auto mt-6">
                            Connect your data source and let Docuparse handle the complexity. 
                            We&apos;re here to turn your chaos into clarity instantly.
                        </p>

                    </div>
                    <RetroGrid />
                    <Particles
                        refresh
                        ease={80}
                        color="#d4d4d8"
                        quantity={100}
                        className="size-full absolute inset-0"
                    />
                </div>
            </Container>
        </div>
    )
};

export default Appflow

