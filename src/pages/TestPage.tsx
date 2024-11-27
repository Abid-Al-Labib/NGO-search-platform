import ThemeToggle from "@/components/ui/ThemeToggle";
import React from "react";

const colors = [
    { name: "--background", description: "Background Color" },
    { name: "--foreground", description: "Foreground Color" },
    { name: "--card", description: "Card Background" },
    { name: "--card-foreground", description: "Card Foreground" },
    { name: "--popover", description: "Popover Background" },
    { name: "--popover-foreground", description: "Popover Foreground" },
    { name: "--primary", description: "Primary Color" },
    { name: "--primary-foreground", description: "Primary Foreground" },
    { name: "--secondary", description: "Secondary Color" },
    { name: "--secondary-foreground", description: "Secondary Foreground" },
    { name: "--muted", description: "Muted Background" },
    { name: "--muted-foreground", description: "Muted Foreground" },
    { name: "--accent", description: "Accent Color" },
    { name: "--accent-foreground", description: "Accent Foreground" },
    { name: "--destructive", description: "Destructive Color" },
    { name: "--destructive-foreground", description: "Destructive Foreground" },
    { name: "--border", description: "Border Color" },
    { name: "--input", description: "Input Background" },
    { name: "--ring", description: "Ring Color" },
    { name: "--radius", description: "Border Radius" },
    { name: "--chart-1", description: "Chart 1 Color" },
    { name: "--chart-2", description: "Chart 2 Color" },
    { name: "--chart-3", description: "Chart 3 Color" },
    { name: "--chart-4", description: "Chart 4 Color" },
    { name: "--chart-5", description: "Chart 5 Color" },
    { name: "--navbar-color", description: "NavBar Color"},
];

const TestPage = () => {
    return (
        <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] p-8">
            <ThemeToggle></ThemeToggle>
            <h1 className="text-3xl font-bold mb-8">CSS Variable Color Test</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colors.map(({ name, description }) => (
                    <div
                        key={name}
                        className="p-4 rounded shadow"
                        style={{
                            backgroundColor: `var(${name})`,
                            color: `var(${name}-foreground, var(--foreground))`,
                            borderRadius: "var(--radius)",
                            border: "1px solid var(--border)",
                        }}
                    >
                        <div className="text-lg font-medium">{description}</div>
                        <div className="text-sm text-gray-500">{name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestPage;