import React from "react";

interface AppContainerProps {
    children?: React.ReactNode;
    title: string;
    subtitle: string;
    headline: string;
}

export default function AppContainer({
                                         children,
                                         title,
                                         subtitle,
                                         headline
                                     }: AppContainerProps) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-center leading-10 pt-10 pb-10">{title}</h1>
            <div className="flex flex-col justify-center m-5 space-y-5">
                <h2 className="text-2xl font-bold text-center leading-5 pb-2">{subtitle}</h2>
                <h3 className="text-xl text-center leading-5 pb-5">
                    {headline}
                </h3>
                {children}
            </div>
            <div
                className="fixed bottom-0 left-0 z-50 h-16 border-t-solid border-t-slate-400 border-t group inline-flex w-full items-center justify-center text-center px-4 py-2"
            >
                <span className="text-sm mt-10">
                  Conhe&ccedil;a nossa Pol&iacute;tica de Privacidade
                </span>
            </div>
        </div>
    );
}