// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://notevc.org",
    integrations: [starlight({
        plugins: [catppuccin()],
        title: "NoteVC",
        // customCss: ["./src/styles/custom.css"],
        logo: { 
            src: "./src/assets/NoteVC_50×50.svg",
            replacesTitle: false
        },
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/darwincereska/notevc' }],
        sidebar: [
            { 
                label: "Start Here", 
                items: [
                    'getting-started/introduction',
                    "getting-started/installation",
                    "getting-started/first-repository"
                ]
            },
            {
                label: "Command Usage",
                items: [
                    "commands/init",
                    "commands/status",
                    "commands/commit",
                    "commands/log",
                    "commands/diff",
                    "commands/show",
                    "commands/restore"
                ]
            },
        ]
		}), sitemap()],
});
