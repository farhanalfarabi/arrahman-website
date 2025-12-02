import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			pages: 'build',
			assets: 'build',
			strict: true
		}),
		prerender: {
			entries: ['*', '/', '/galeri'],
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404s for missing assets
				if (path.startsWith('/_app/')) {
					return;
				}
				console.warn(`Prerender warning: ${message} (${path})`);
			}
		}
	}
};

export default config;
