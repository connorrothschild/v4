import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./chunks/index.js";
import devalue from "devalue";
import { w as writable, r as readable } from "./chunks/index2.js";
import * as cookie from "cookie";
import * as set_cookie_parser from "set-cookie-parser";
function afterUpdate() {
}
function set_prerendering(value) {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { errors } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  {
    stores.page.set(page);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1 }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, errors }, {}, {})}`}

${``}`;
});
class HttpError {
  name = "HttpError";
  stack = void 0;
  constructor(status, message) {
    this.status = status;
    this.message = message ?? `Error: ${status}`;
  }
  toString() {
    return this.message;
  }
}
class Redirect {
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
}
function serialize_error(error2, get_stack) {
  return JSON.stringify(error_to_pojo(error2, get_stack));
}
function error_to_pojo(error2, get_stack) {
  if (error2 instanceof HttpError) {
    return {
      message: error2.message,
      status: error2.status,
      __is_http_error: true
    };
  }
  const {
    name,
    message,
    stack,
    cause,
    ...custom
  } = error2;
  const object = { name, message, stack: get_stack(error2) };
  if (cause)
    object.cause = error_to_pojo(cause, get_stack);
  for (const key2 in custom) {
    object[key2] = custom[key2];
  }
  return object;
}
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m) => {
    if (m in mod) {
      const replacement = m === "del" ? "DELETE" : m.toUpperCase();
      throw Error(
        `Endpoint method "${m}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
const GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
async function render_endpoint(event, mod) {
  const method = event.request.method;
  check_method_names(mod);
  let handler = mod[method];
  if (!handler && method === "HEAD") {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  try {
    const response = await handler(
      event
    );
    if (!(response instanceof Response)) {
      return new Response(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`,
        { status: 500 }
      );
    }
    return response;
  } catch (error2) {
    if (error2 instanceof HttpError) {
      return new Response(error2.message, { status: error2.status });
    } else if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { Location: error2.location }
      });
    } else {
      throw error2;
    }
  }
}
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
const render_json_payload_script_dict = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const render_json_payload_script_regex = new RegExp(
  `[${Object.keys(render_json_payload_script_dict).join("")}]`,
  "g"
);
function render_json_payload_script(attrs, payload) {
  const safe_payload = JSON.stringify(payload).replace(
    render_json_payload_script_regex,
    (match) => render_json_payload_script_dict[match]
  );
  let safe_attrs = "";
  for (const [key2, value] of Object.entries(attrs)) {
    if (value === void 0)
      continue;
    safe_attrs += ` sveltekit:data-${key2}=${escape_html_attr(value)}`;
  }
  return `<script type="application/json"${safe_attrs}>${safe_payload}<\/script>`;
}
const escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
const escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
const s = JSON.stringify;
const encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
const init = new Uint32Array(8);
const key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
const array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
const quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample"
]);
const crypto_pattern = /^(nonce|sha\d\d\d)-/;
class BaseProvider {
  #use_hashes;
  #script_needs_csp;
  #style_needs_csp;
  #directives;
  #script_src;
  #style_src;
  #nonce;
  constructor(use_hashes, directives, nonce, dev) {
    this.#use_hashes = use_hashes;
    this.#directives = dev ? { ...directives } : directives;
    const d = this.#directives;
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    this.#script_src = [];
    this.#style_src = [];
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    this.#script_needs_csp = !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0;
    this.#style_needs_csp = !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce;
  }
  add_script(content) {
    if (this.#script_needs_csp) {
      if (this.#use_hashes) {
        this.#script_src.push(`sha256-${sha256(content)}`);
      } else if (this.#script_src.length === 0) {
        this.#script_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  add_style(content) {
    if (this.#style_needs_csp) {
      if (this.#use_hashes) {
        this.#style_src.push(`sha256-${sha256(content)}`);
      } else if (this.#style_src.length === 0) {
        this.#style_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#script_src.length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
}
class CspProvider extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
}
class CspReportOnlyProvider extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
}
class Csp {
  nonce = generate_nonce();
  csp_provider;
  report_only_provider;
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
}
const absolute = /^([a-z]+:)?\/?\//;
const scheme = /^[a-z]+:/;
function resolve(base2, path) {
  if (scheme.test(path))
    return path;
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix}${baseparts.join("/")}`;
}
function is_root_relative(path) {
  return path[0] === "/" && path[1] !== "/";
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
class LoadURL extends URL {
  get hash() {
    throw new Error(
      "url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component."
    );
  }
}
class PrerenderingURL extends URL {
  get search() {
    throw new Error("Cannot access url.search on a page with prerendering enabled");
  }
  get searchParams() {
    throw new Error("Cannot access url.searchParams on a page with prerendering enabled");
  }
}
const updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  cookies,
  options,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  validation_errors
}) {
  var _a;
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const stack = error2 instanceof HttpError ? void 0 : error2 == null ? void 0 : error2.stack;
  if (error2 && options.dev && !(error2 instanceof HttpError)) {
    error2.stack = options.get_stack(error2);
  }
  if (resolve_opts.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component()))
    };
    let data = {};
    for (let i = 0; i < branch.length; i += 1) {
      data = { ...data, ...branch[i].data };
      props[`data_${i}`] = data;
    }
    props.page = {
      error: error2,
      params: event.params,
      routeId: event.routeId,
      status,
      url: state.prerendering ? new PrerenderingURL(event.url) : event.url,
      data
    };
    if (validation_errors) {
      props.errors = validation_errors;
    }
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    rendered = options.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body } = rendered;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let assets2;
  if (options.paths.assets) {
    assets2 = options.paths.assets;
  } else if ((_a = state.prerendering) == null ? void 0 : _a.fallback) {
    assets2 = options.paths.base;
  } else {
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const init_app = `
		import { set_public_env, start } from ${s(prefixed(entry.file))};

		set_public_env(${s(options.public_env)});

		start({
			target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
			paths: ${s(options.paths)},
			route: ${!!page_config.router},
			spa: ${!resolve_opts.ssr},
			trailing_slash: ${s(options.trailing_slash)},
			hydrate: ${resolve_opts.ssr && page_config.hydrate ? `{
				status: ${status},
				error: ${error2 && serialize_error(error2, (e) => e.stack)},
				node_ids: [${branch.map(({ node }) => node.index).join(", ")}],
				params: ${devalue(event.params)},
				routeId: ${s(event.routeId)}
			}` : "null"}
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			addEventListener('load', function () {
				navigator.serviceWorker.register('${options.service_worker}');
			});
		}
	`;
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets) {
    const path = prefixed(dep);
    const attributes = [];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
      link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
    }
    attributes.unshift('rel="stylesheet"');
    head += `
	<link href="${path}" ${attributes.join(" ")}>`;
  }
  if (page_config.router || page_config.hydrate) {
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (state.prerendering) {
        head += `
	<link rel="modulepreload" href="${path}">`;
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (resolve_opts.ssr && page_config.hydrate) {
    const serialized_data = [];
    for (const { url, body: body2, response } of fetched) {
      serialized_data.push(
        render_json_payload_script(
          { type: "data", url, body: typeof body2 === "string" ? hash(body2) : void 0 },
          response
        )
      );
    }
    if (branch.some((node) => node.server_data)) {
      serialized_data.push(
        render_json_payload_script(
          { type: "server_data" },
          branch.map(({ server_data }) => server_data)
        )
      );
    }
    if (validation_errors) {
      serialized_data.push(
        render_json_payload_script({ type: "validation_errors" }, validation_errors)
      );
    }
    body += `
	${serialized_data.join("\n	")}`;
  }
  if (options.service_worker) {
    csp.add_script(init_service_worker);
    head += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const html = await resolve_opts.transformPageChunk({
    html: options.template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    for (const new_cookie of cookies) {
      const { name, value, ...options2 } = new_cookie;
      headers.append("set-cookie", cookie.serialize(name, value, options2));
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  if (error2 && options.dev && !(error2 instanceof HttpError)) {
    error2.stack = stack;
  }
  return new Response(html, {
    status,
    headers
  });
}
async function load_server_data({ dev, event, node, parent }) {
  var _a;
  if (!(node == null ? void 0 : node.server))
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    url: false
  };
  function depends(...deps) {
    for (const dep of deps) {
      const { href } = new URL(dep, event.url);
      uses.dependencies.add(href);
    }
  }
  const params = new Proxy(event.params, {
    get: (target, key2) => {
      uses.params.add(key2);
      return target[key2];
    }
  });
  const result = await ((_a = node.server.load) == null ? void 0 : _a.call(null, {
    get clientAddress() {
      return event.clientAddress;
    },
    depends,
    locals: event.locals,
    params,
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    platform: event.platform,
    request: event.request,
    routeId: event.routeId,
    setHeaders: event.setHeaders,
    url: event.url
  }));
  const data = result ? await unwrap_promises(result) : null;
  if (dev) {
    check_serializability(data, node.server_id, "data");
  }
  return {
    type: "data",
    data,
    uses: {
      dependencies: uses.dependencies.size > 0 ? Array.from(uses.dependencies) : void 0,
      params: uses.params.size > 0 ? Array.from(uses.params) : void 0,
      parent: uses.parent ? 1 : void 0,
      url: uses.url ? 1 : void 0
    }
  };
}
async function load_data({ event, fetcher, node, parent, server_data_promise, state }) {
  var _a;
  const server_data_node = await server_data_promise;
  if (!((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a.load)) {
    return (server_data_node == null ? void 0 : server_data_node.data) ?? null;
  }
  const load_input = {
    url: state.prerendering ? new PrerenderingURL(event.url) : new LoadURL(event.url),
    params: event.params,
    data: (server_data_node == null ? void 0 : server_data_node.data) ?? null,
    routeId: event.routeId,
    fetch: fetcher,
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  };
  Object.defineProperties(load_input, {
    session: {
      get() {
        throw new Error(
          "session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
        );
      },
      enumerable: false
    }
  });
  const data = await node.shared.load.call(null, load_input);
  return data ? unwrap_promises(data) : null;
}
async function unwrap_promises(object) {
  const unwrapped = {};
  for (const key2 in object) {
    unwrapped[key2] = await object[key2];
  }
  return unwrapped;
}
function check_serializability(value, id, path) {
  const type = typeof value;
  if (type === "string" || type === "boolean" || type === "number" || type === "undefined") {
    return;
  }
  if (type === "object") {
    if (!value)
      return;
    if (Array.isArray(value)) {
      value.forEach((child, i) => {
        check_serializability(child, id, `${path}[${i}]`);
      });
      return;
    }
    const tag = Object.prototype.toString.call(value);
    if (tag === "[object Object]") {
      for (const key2 in value) {
        check_serializability(value[key2], id, `${path}.${key2}`);
      }
      return;
    }
  }
  throw new Error(`${path} returned from 'load' in ${id} cannot be serialized as JSON`);
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return error2;
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function create_fetch({ event, options, state, route }) {
  const fetched = [];
  const initial_cookies = cookie.parse(event.request.headers.get("cookie") || "");
  const cookies = [];
  const fetcher = async (resource, opts = {}) => {
    let requested;
    if (typeof resource === "string" || resource instanceof URL) {
      requested = resource.toString();
    } else {
      requested = resource.url;
      opts = {
        method: resource.method,
        headers: resource.headers,
        body: resource.body,
        mode: resource.mode,
        credentials: resource.credentials,
        cache: resource.cache,
        redirect: resource.redirect,
        referrer: resource.referrer,
        integrity: resource.integrity,
        ...opts
      };
    }
    opts.headers = new Headers(opts.headers);
    for (const [key2, value] of event.request.headers) {
      if (key2 !== "authorization" && key2 !== "connection" && key2 !== "content-length" && key2 !== "cookie" && key2 !== "host" && key2 !== "if-none-match" && !opts.headers.has(key2)) {
        opts.headers.set(key2, value);
      }
    }
    const resolved = resolve(event.url.pathname, requested.split("?")[0]);
    let response;
    let dependency;
    const prefix = options.paths.assets || options.paths.base;
    const filename = decodeURIComponent(
      resolved.startsWith(prefix) ? resolved.slice(prefix.length) : resolved
    ).slice(1);
    const filename_html = `${filename}/index.html`;
    const is_asset = options.manifest.assets.has(filename);
    const is_asset_html = options.manifest.assets.has(filename_html);
    if (is_asset || is_asset_html) {
      const file = is_asset ? filename : filename_html;
      if (options.read) {
        const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
        response = new Response(options.read(file), {
          headers: type ? { "content-type": type } : {}
        });
      } else {
        response = await fetch(`${event.url.origin}/${file}`, opts);
      }
    } else if (is_root_relative(resolved)) {
      if (opts.credentials !== "omit") {
        const authorization = event.request.headers.get("authorization");
        const combined_cookies = { ...initial_cookies };
        for (const cookie3 of cookies) {
          if (!domain_matches(event.url.hostname, cookie3.domain))
            continue;
          if (!path_matches(resolved, cookie3.path))
            continue;
          combined_cookies[cookie3.name] = cookie3.value;
        }
        const cookie2 = Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
        if (cookie2) {
          opts.headers.set("cookie", cookie2);
        }
        if (authorization && !opts.headers.has("authorization")) {
          opts.headers.set("authorization", authorization);
        }
      }
      if (opts.body && typeof opts.body !== "string") {
        throw new Error("Request body must be a string");
      }
      response = await respond(
        new Request(new URL(requested, event.url).href, { ...opts }),
        options,
        {
          ...state,
          initiator: route
        }
      );
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(resolved, dependency);
      }
    } else {
      if (resolved.startsWith("//")) {
        requested = event.url.protocol + requested;
      }
      if (`.${new URL(requested).hostname}`.endsWith(`.${event.url.hostname}`) && opts.credentials !== "omit") {
        const cookie2 = event.request.headers.get("cookie");
        if (cookie2)
          opts.headers.set("cookie", cookie2);
      }
      opts.headers.delete("connection");
      const external_request = new Request(requested, opts);
      response = await options.hooks.externalFetch.call(null, external_request);
    }
    const set_cookie = response.headers.get("set-cookie");
    if (set_cookie) {
      cookies.push(
        ...set_cookie_parser.splitCookiesString(set_cookie).map((str) => set_cookie_parser.parseString(str))
      );
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text() {
          const body = await response2.text();
          const headers = {};
          for (const [key3, value] of response2.headers) {
            if (key3 !== "set-cookie" && key3 !== "etag") {
              headers[key3] = value;
            }
          }
          if (!opts.body || typeof opts.body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: requested,
              body: opts.body,
              response: {
                status: status_number,
                statusText: response2.statusText,
                headers,
                body
              }
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    return proxy;
  };
  return { fetcher, fetched, cookies };
}
async function respond_with_error({ event, options, state, status, error: error2, resolve_opts }) {
  const { fetcher, fetched, cookies } = create_fetch({
    event,
    options,
    state,
    route: GENERIC_ERROR
  });
  try {
    const branch = [];
    if (resolve_opts.ssr) {
      const default_layout = await options.manifest._.nodes[0]();
      const server_data_promise = load_server_data({
        dev: options.dev,
        event,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetcher,
        node: default_layout,
        parent: async () => ({}),
        server_data_promise,
        state
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await options.manifest._.nodes[1](),
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options,
      state,
      page_config: {
        hydrate: options.hydrate,
        router: options.router
      },
      status,
      error: error2,
      branch,
      fetched,
      cookies,
      event,
      resolve_opts,
      validation_errors: void 0
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return new Response(error3.stack, {
      status: 500
    });
  }
}
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init2) {
  const headers = new Headers(init2 == null ? void 0 : init2.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init2,
    headers
  });
}
function compact(arr) {
  return arr.filter((val) => val != null);
}
async function render_page(event, route, page, options, state, resolve_opts) {
  var _a, _b;
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  const accept = negotiate(event.request.headers.get("accept") || "text/html", [
    "text/html",
    "application/json"
  ]);
  if (accept === "application/json" && event.request.method !== "GET" && event.request.method !== "HEAD") {
    const node = await options.manifest._.nodes[page.leaf]();
    if (node.server) {
      return handle_json_request(event, options, node.server);
    }
  }
  const { fetcher, fetched, cookies } = create_fetch({ event, options, state, route });
  try {
    const nodes = await Promise.all([
      ...page.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
      options.manifest._.nodes[page.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let mutation_error;
    let validation_errors;
    if (leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD") {
      try {
        const method = event.request.method;
        const handler = leaf_node.server[method];
        if (handler) {
          const result = await handler.call(null, event);
          if (result == null ? void 0 : result.errors) {
            validation_errors = result.errors;
            status = result.status ?? 400;
          }
          if (event.request.method === "POST" && (result == null ? void 0 : result.location)) {
            return redirect_response(303, result.location);
          }
        } else {
          event.setHeaders({
            allow: allowed_methods(leaf_node.server).join(", ")
          });
          mutation_error = error(405, "Method not allowed");
        }
      } catch (e) {
        if (e instanceof Redirect) {
          return redirect_response(e.status, e.location);
        }
        mutation_error = e;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = `${event.url.pathname.replace(/\/$/, "")}/__data.json`;
    if (!resolve_opts.ssr) {
      return await render_response({
        branch: [],
        validation_errors: void 0,
        fetched,
        cookies,
        page_config: {
          hydrate: true,
          router: true
        },
        status,
        error: null,
        event,
        options,
        state,
        resolve_opts
      });
    }
    const should_prerender = ((_a = leaf_node.shared) == null ? void 0 : _a.prerender) ?? ((_b = leaf_node.server) == null ? void 0 : _b.prerender) ?? options.prerender.default;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && (mod.POST || mod.PUT || mod.DELETE || mod.PATCH)) {
        throw new Error("Cannot prerender pages that have endpoints with mutative methods");
      }
    } else if (state.prerendering) {
      if (!should_prerender) {
        return new Response(void 0, {
          status: 204
        });
      }
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && mutation_error) {
            throw mutation_error;
          }
          return await load_server_data({
            dev: options.dev,
            event,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetcher,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            server_data_promise: server_promises[i],
            state
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const error2 = normalize_error(e);
          if (error2 instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(void 0),
                body: JSON.stringify({
                  type: "redirect",
                  location: error2.location
                })
              });
            }
            return redirect_response(error2.status, error2.location);
          }
          if (!(error2 instanceof HttpError)) {
            options.handle_error(error2, event);
          }
          const status2 = error2 instanceof HttpError ? error2.status : 500;
          while (i--) {
            if (page.errors[i]) {
              const index = page.errors[i];
              const node2 = await options.manifest._.nodes[index]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options,
                state,
                resolve_opts,
                page_config: { router: true, hydrate: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched,
                cookies,
                validation_errors: void 0
              });
            }
          }
          return new Response(
            error2 instanceof HttpError ? error2.message : options.get_stack(error2),
            { status: status2 }
          );
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(void 0),
        body: JSON.stringify({
          type: "data",
          nodes: branch.map((branch_node) => branch_node == null ? void 0 : branch_node.server_data)
        })
      });
    }
    return await render_response({
      event,
      options,
      state,
      resolve_opts,
      page_config: get_page_config(leaf_node, options),
      status,
      error: null,
      branch: compact(branch),
      validation_errors,
      fetched,
      cookies
    });
  } catch (error2) {
    options.handle_error(error2, event);
    return await respond_with_error({
      event,
      options,
      state,
      status: 500,
      error: error2,
      resolve_opts
    });
  }
}
function get_page_config(leaf, options) {
  var _a, _b;
  if (leaf.shared && "ssr" in leaf.shared) {
    throw new Error(
      "`export const ssr` has been removed \u2014 use the handle hook instead: https://kit.svelte.dev/docs/hooks#handle"
    );
  }
  return {
    router: ((_a = leaf.shared) == null ? void 0 : _a.router) ?? options.router,
    hydrate: ((_b = leaf.shared) == null ? void 0 : _b.hydrate) ?? options.hydrate
  };
}
async function handle_json_request(event, options, mod) {
  const method = event.request.method;
  const handler = mod[method];
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  try {
    const result = await handler.call(null, event);
    if (result == null ? void 0 : result.errors) {
      return json({ errors: result.errors }, { status: result.status || 400 });
    }
    return new Response(void 0, {
      status: 204,
      headers: (result == null ? void 0 : result.location) ? { location: result.location } : void 0
    });
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_response(error2.status, error2.location);
    }
    if (!(error2 instanceof HttpError)) {
      options.handle_error(error2, event);
    }
    return json(error_to_pojo(error2, options.get_stack), {
      status: error2 instanceof HttpError ? error2.status : 500
    });
  }
}
function redirect_response(status, location) {
  return new Response(void 0, {
    status,
    headers: { location }
  });
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    const type = types[i];
    const value = match[i + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name] = value;
  }
  return params;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
const DATA_SUFFIX = "/__data.json";
const default_transform = ({ html }) => html;
async function respond(request, options, state) {
  var _a, _b, _c, _d;
  let url = new URL(request.url);
  const { parameter, allowed } = options.method_override;
  const method_override = (_a = url.searchParams.get(parameter)) == null ? void 0 : _a.toUpperCase();
  if (method_override) {
    if (request.method === "POST") {
      if (allowed.includes(method_override)) {
        request = new Proxy(request, {
          get: (target, property, _receiver) => {
            if (property === "method")
              return method_override;
            return Reflect.get(target, property, target);
          }
        });
      } else {
        const verb = allowed.length === 0 ? "enabled" : "allowed";
        const body = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs/configuration#methodoverride`;
        return new Response(body, {
          status: 400
        });
      }
    } else {
      throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_b = state.prerendering) == null ? void 0 : _b.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request) {
    const data_suffix_length = DATA_SUFFIX.length - (options.trailing_slash === "always" ? 1 : 0);
    decoded = decoded.slice(0, -data_suffix_length) || "/";
    url = new URL(url.origin + url.pathname.slice(0, -data_suffix_length) + url.search);
  }
  if (!((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if (route) {
    if (route.page) {
      const normalized = normalize_path(url.pathname, options.trailing_slash);
      if (normalized !== url.pathname && !((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
        return new Response(void 0, {
          status: 301,
          headers: {
            "x-sveltekit-normalize": "1",
            location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
          }
        });
      }
    } else if (is_data_request) {
      return new Response(void 0, {
        status: 404
      });
    }
  }
  const headers = {};
  const cookies = [];
  const event = {
    get clientAddress() {
      if (!state.getClientAddress) {
        throw new Error(
          `${"@sveltejs/adapter-netlify"} does not specify getClientAddress. Please raise an issue`
        );
      }
      Object.defineProperty(event, "clientAddress", {
        value: state.getClientAddress()
      });
      return event.clientAddress;
    },
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          const new_cookies = Array.isArray(value) ? value : [value];
          for (const cookie2 of new_cookies) {
            if (cookies.includes(cookie2)) {
              throw new Error(`"${key2}" header already has cookie with same value`);
            }
            cookies.push(cookie2);
          }
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = value;
          }
        }
      }
    },
    url
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error(
        "To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details
      );
    }
  };
  Object.defineProperties(event, {
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    ssr: true,
    transformPageChunk: default_transform
  };
  try {
    const response = await options.hooks.handle({
      event,
      resolve: async (event2, opts) => {
        var _a2, _b2;
        if (opts) {
          if (opts.transformPage) {
            throw new Error(
              "transformPage has been replaced by transformPageChunk \u2014 see https://github.com/sveltejs/kit/pull/5657 for more information"
            );
          }
          resolve_opts = {
            ssr: opts.ssr !== false,
            transformPageChunk: opts.transformPageChunk || default_transform
          };
        }
        if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
          return await render_response({
            event: event2,
            options,
            state,
            page_config: { router: true, hydrate: true },
            status: 200,
            error: null,
            branch: [],
            fetched: [],
            validation_errors: void 0,
            cookies: [],
            resolve_opts: {
              ...resolve_opts,
              ssr: false
            }
          });
        }
        if (route) {
          let response2;
          if (is_data_request && route.page) {
            try {
              const node_ids = [...route.page.layouts, route.page.leaf];
              const invalidated = ((_b2 = request.headers.get("x-sveltekit-invalidated")) == null ? void 0 : _b2.split(",").map(Boolean)) ?? node_ids.map(() => true);
              let aborted = false;
              const functions = node_ids.map((n, i) => {
                return once(async () => {
                  try {
                    if (aborted) {
                      return {
                        type: "skip"
                      };
                    }
                    const node = n == void 0 ? n : await options.manifest._.nodes[n]();
                    return load_server_data({
                      dev: options.dev,
                      event: event2,
                      node,
                      parent: async () => {
                        const data = {};
                        for (let j = 0; j < i; j += 1) {
                          const parent = await functions[j]();
                          Object.assign(data, parent.data);
                        }
                        return data;
                      }
                    });
                  } catch (e) {
                    aborted = true;
                    throw e;
                  }
                });
              });
              const promises = functions.map(async (fn, i) => {
                if (!invalidated[i]) {
                  return {
                    type: "skip"
                  };
                }
                return fn();
              });
              let length = promises.length;
              const nodes = await Promise.all(
                promises.map(
                  (p, i) => p.catch((e) => {
                    const error2 = normalize_error(e);
                    if (error2 instanceof Redirect) {
                      throw error2;
                    }
                    length = Math.min(length, i + 1);
                    if (error2 instanceof HttpError) {
                      return {
                        type: "error",
                        httperror: { ...error2 }
                      };
                    }
                    options.handle_error(error2, event2);
                    return {
                      type: "error",
                      error: error_to_pojo(error2, options.get_stack)
                    };
                  })
                )
              );
              const server_data = {
                type: "data",
                nodes: nodes.slice(0, length)
              };
              response2 = json(server_data);
            } catch (e) {
              const error2 = normalize_error(e);
              if (error2 instanceof Redirect) {
                const server_data = {
                  type: "redirect",
                  location: error2.location
                };
                response2 = json(server_data);
              } else {
                response2 = json(error_to_pojo(error2, options.get_stack), { status: 500 });
              }
            }
          } else if (route.page) {
            response2 = await render_page(event2, route, route.page, options, state, resolve_opts);
          } else if (route.endpoint) {
            response2 = await render_endpoint(event2, await route.endpoint());
          } else {
            throw new Error("This should never happen");
          }
          if (!is_data_request) {
            for (const key2 in headers) {
              const value = headers[key2];
              response2.headers.set(key2, value);
            }
          }
          for (const cookie2 of cookies) {
            response2.headers.append("set-cookie", cookie2);
          }
          if (response2.status === 200 && response2.headers.has("etag")) {
            let if_none_match_value = request.headers.get("if-none-match");
            if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
              if_none_match_value = if_none_match_value.substring(2);
            }
            const etag = response2.headers.get("etag");
            if (if_none_match_value === etag) {
              const headers2 = new Headers({ etag });
              for (const key2 of ["cache-control", "content-location", "date", "expires", "vary"]) {
                const value = response2.headers.get(key2);
                if (value)
                  headers2.set(key2, value);
              }
              return new Response(void 0, {
                status: 304,
                headers: headers2
              });
            }
          }
          return response2;
        }
        if (state.initiator === GENERIC_ERROR) {
          return new Response("Internal Server Error", {
            status: 500
          });
        }
        if (!state.initiator) {
          return await respond_with_error({
            event: event2,
            options,
            state,
            status: 404,
            error: new Error(`Not found: ${event2.url.pathname}`),
            resolve_opts
          });
        }
        if (state.prerendering) {
          return new Response("not found", { status: 404 });
        }
        return await fetch(request);
      },
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response && !(response instanceof Response)) {
      throw new Error("handle must return a Response object" + details);
    }
    return response;
  } catch (e) {
    const error2 = coalesce_to_error(e);
    options.handle_error(error2, event);
    const type = negotiate(event.request.headers.get("accept") || "text/html", [
      "text/html",
      "application/json"
    ]);
    if (is_data_request || type === "application/json") {
      return new Response(serialize_error(error2, options.get_stack), {
        status: 500,
        headers: { "content-type": "application/json; charset=utf-8" }
      });
    }
    try {
      return await respond_with_error({
        event,
        options,
        state,
        status: 500,
        error: error2,
        resolve_opts
      });
    } catch (e2) {
      const error3 = coalesce_to_error(e2);
      return new Response(options.dev ? error3.stack : error3.message, {
        status: 500
      });
    }
  }
}
let base = "";
let assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
const template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="/favicon.png" />\n    \n    <link rel="preload" href="https://use.typekit.net/mhr2lku.css" as="style">\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    \n    <link rel="stylesheet" href="https://use.typekit.net/mhr2lku.css">\n\n    ' + head + '\n  </head>\n  <body>\n    <div id="svelte">' + body + "</div>\n  </body>\n</html>\n";
let read = null;
set_paths({ "base": "", "assets": "" });
let default_protocol = "https";
function override(settings) {
  default_protocol = settings.protocol || default_protocol;
  set_paths(settings.paths);
  set_prerendering(settings.prerendering);
  read = settings.read;
}
class Server {
  constructor(manifest) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      dev: false,
      get_stack: (error2) => String(error2),
      handle_error: (error2, event) => {
        this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        });
        error2.stack = this.options.get_stack(error2);
      },
      hooks: null,
      hydrate: true,
      manifest,
      method_override: { "parameter": "_method", "allowed": [] },
      paths: { base, assets },
      prerender: {
        default: false,
        enabled: true
      },
      public_env: {},
      read,
      root: Root,
      service_worker: null,
      router: true,
      template,
      template_contains_nonce: false,
      trailing_slash: "never"
    };
  }
  async init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
    if (!this.options.hooks) {
      const module = await import("./chunks/hooks.js");
      this.options.hooks = {
        handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        externalFetch: module.externalFetch || fetch
      };
    }
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options);
  }
}
export {
  Server,
  override
};
