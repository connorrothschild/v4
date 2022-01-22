
import root from '__GENERATED__/root.svelte';
import { respond } from '/Users/connorrothschild/Desktop/Projects/Sites/connorrothschild.com/.svelte-kit/runtime/server/index.js';
import { set_paths, assets, base } from '/Users/connorrothschild/Desktop/Projects/Sites/connorrothschild.com/.svelte-kit/runtime/paths.js';
import { set_prerendering } from '/Users/connorrothschild/Desktop/Projects/Sites/connorrothschild.com/.svelte-kit/runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body, assets }) => "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"/favicon.png\" />\n    \n    <link rel=\"preload\" href=\"https://use.typekit.net/mhr2lku.css\" as=\"style\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    \n    <link rel=\"stylesheet\" href=\"https://use.typekit.net/mhr2lku.css\">\n\n    " + head + "\n  </head>\n  <body>\n    <div id=\"svelte\">" + body + "</div>\n  </body>\n</html>\n";

let read = null;

set_paths({"base":"","assets":""});

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class App {
	constructor(manifest) {
		const hooks = get_hooks(user_hooks);

		this.options = {
			amp: false,
			dev: false,
			floc: false,
			get_stack: error => String(error), // for security
			handle_error: (error, request) => {
				hooks.handleError({ error, request });
				error.stack = this.options.get_stack(error);
			},
			hooks,
			hydrate: true,
			manifest,
			method_override: {"parameter":"_method","allowed":[]},
			paths: { base, assets },
			prefix: assets + '/_app/',
			prerender: true,
			read,
			root,
			service_worker: null,
			router: true,
			target: "#svelte",
			template,
			trailing_slash: "never"
		};
	}

	render(request, {
		prerender
	} = {}) {
		// TODO remove this for 1.0
		if (Object.keys(request).sort().join() !== 'headers,method,rawBody,url') {
			throw new Error('Adapters should call app.render({ url, method, headers, rawBody })');
		}

		const host = request.headers["host"];
		const protocol = default_protocol;

		return respond({ ...request, url: new URL(request.url, protocol + '://' + host) }, this.options, { prerender });
	}
}
