
"use client";

import LoadFile from "@/helpers/animation/LoadFile";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {

        LoadFile(".container",)
    }, []);

    return (
        <div>

            {children}
        </div>
    );
}