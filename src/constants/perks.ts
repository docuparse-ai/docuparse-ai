import { Icons } from "@/components";
import { ZapIcon, ChartSplineIcon, LifeBuoyIcon, PaletteIcon, ShieldCheckIcon, WaypointsIcon, BrainCircuitIcon, SparklesIcon } from "lucide-react";
import React from "react";

export const PERKS = [
    {
        icon: ZapIcon,
        title: "Fast and Efficient",
        description: "Upload your files or connect your data source and our AI instantly begins parsing documents, images, and more."
    },
    {
        icon: ChartSplineIcon,
        title: "Structured Outputs with Rich Insights",
        description: "From PDFs to hand-drawn graphs, Docuparse extracts the information you need and delivers it in ready-to-use formats like JSON, CSV, or database entries."
    },
    {
        icon: LifeBuoyIcon,
        title: "Customizable Parsing Logic",
        description: "Define your rules, tags, or field mappings. Our system adapts to your industry-specific needs with minimal setup."
    },
    {
        icon: PaletteIcon,
        title: "Transparent Audit Trail & Analytics",
        description: "Get visibility into what was parsed, how, and with what confidence. Perfect for compliance-heavy workflows."
    },
    {
        icon: ShieldCheckIcon,
        title: "Secure and Reliable",
        description: "All data is encrypted in transit and at rest. Docuparse is built for high availability and compliance from day one."
    },
    {
        icon: WaypointsIcon,
        title: "Seamless Integration",
        description: "Connect with cloud drives, APIs, or enterprise systems. Set up once and we handle the data flow end-to-end."
    },
];