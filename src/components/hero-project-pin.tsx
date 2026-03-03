"use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function HeroProjectPin() {
    return (
        <div className="h-[20rem] md:h-[30rem] w-full flex items-center justify-center p-4">
            <PinContainer
                title="Saji Ganguly"
                href="#about"
            >
                <div className="flex basis-full flex-col items-center justify-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] md:w-[22rem] h-[18rem] md:h-[22rem]">
                    <div className="flex flex-1 w-full rounded-xl bg-gradient-to-br from-retro-primary via-purple-500 to-retro-accent relative overflow-hidden flex-col items-center justify-center border border-white/20 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
                        {/* Dark overlay for contrast */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                        {/* Giant SG Text */}
                        <div className="relative z-10 flex flex-col items-center justify-center">
                            <h1 className="text-8xl md:text-[10rem] font-black font-outfit text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] tracking-tighter">
                                SG
                            </h1>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/60 animate-ping" />
                        <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white/60 animate-ping" style={{ animationDelay: '500ms' }} />

                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-xl pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-xl pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-xl pointer-events-none"></div>
                    </div>
                </div>
            </PinContainer>
        </div>
    );
}
