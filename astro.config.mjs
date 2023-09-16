import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://html-email-guide.vercel.app/';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'HTML Email Guide',
			customCss: [
				// Relative path to your custom CSS file
				'./src/custom.css',
				'./src/fonts/font-face.css'
			],
			favicon: './favicon.svg',
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: site + 'og.png'
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'twitter:image',
						content: site + 'og.png'
					}
				}
			],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						// { label: 'Boilerplate', link: '/guides/boilerplate/' },
						{ label: 'HTML', link: '/guides/html/' },
						{ label: 'CSS', link: '/guides/css/' },
						{ label: 'Layout', link: '/guides/layout/' },
						{ label: 'Fonts', link: '/guides/fonts/' },
						{ label: 'Images', link: '/guides/images/' },
						// { label: 'Dark Mode', link: '/guides/dark-mode/' },
						{ label: 'Components', link: '/guides/components/' },
						// { label: 'Testing', link: '/guides/testing/' },
						{ label: 'Microsoft Outlook and Windows Mail', link: '/guides/outlook/' },
					],
				},
			],
		}),
	],
});
