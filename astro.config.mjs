import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
						content: 'og.jpg'
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
						{ label: 'Boilerplate', link: '/guides/boilerplate/' },
						{ label: 'HTML', link: '/guides/html/' },
						{ label: 'CSS', link: '/guides/css/' },
						{ label: 'Fonts', link: '/guides/fonts/' },
						// { label: 'Images', link: '/guides/images/' },
						{ label: 'Layout', link: '/guides/layout/' },
						{ label: 'Wrapping text around an image', link: '/guides/floats/' },
						{ label: 'Dark Mode', link: '/guides/dark-mode/' },
						// { label: 'Components', link: '/guides/components/' },
						{ label: 'Microsoft Outlook', link: '/guides/outlook/' },
						// { label: 'Testing', link: '/guides/testing/' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
