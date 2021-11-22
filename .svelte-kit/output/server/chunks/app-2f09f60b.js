var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _map;
function get_single_valued_header(headers, key) {
  const value = headers[key];
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return void 0;
    }
    if (value.length > 1) {
      throw new Error(`Multiple headers provided for ${key}. Multiple may be provided only for set-cookie`);
    }
    return value[0];
  }
  return value;
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function lowercase_keys(obj) {
  const clone = {};
  for (const key in obj) {
    clone[key.toLowerCase()] = obj[key];
  }
  return clone;
}
function error(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
function is_string(s2) {
  return typeof s2 === "string" || s2 instanceof String;
}
function is_content_type_textual(content_type) {
  if (!content_type)
    return true;
  const [type] = content_type.split(";");
  return type === "text/plain" || type === "application/json" || type === "application/x-www-form-urlencoded" || type === "multipart/form-data";
}
async function render_endpoint(request, route, match) {
  const mod = await route.load();
  const handler = mod[request.method.toLowerCase().replace("delete", "del")];
  if (!handler) {
    return;
  }
  const params = route.params(match);
  const response = await handler({ ...request, params });
  const preface = `Invalid response from route ${request.path}`;
  if (!response) {
    return;
  }
  if (typeof response !== "object") {
    return error(`${preface}: expected an object, got ${typeof response}`);
  }
  let { status = 200, body, headers = {} } = response;
  headers = lowercase_keys(headers);
  const type = get_single_valued_header(headers, "content-type");
  const is_type_textual = is_content_type_textual(type);
  if (!is_type_textual && !(body instanceof Uint8Array || is_string(body))) {
    return error(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
  }
  let normalized_body;
  if ((typeof body === "object" || typeof body === "undefined") && !(body instanceof Uint8Array) && (!type || type.startsWith("application/json"))) {
    headers = { ...headers, "content-type": "application/json; charset=utf-8" };
    normalized_body = JSON.stringify(typeof body === "undefined" ? {} : body);
  } else {
    normalized_body = body;
  }
  return { status, body: normalized_body, headers };
}
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop$1() {
}
function safe_not_equal$1(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
Promise.resolve();
const subscriber_queue = [];
function writable(value, start = noop$1) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal$1(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop$1) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop$1;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
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
const escape_json_string_in_html_dict = {
  '"': '\\"',
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape_json_string_in_html(str) {
  return escape$1(str, escape_json_string_in_html_dict, (code) => `\\u${code.toString(16).toUpperCase()}`);
}
const escape_html_attr_dict = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function escape_html_attr(str) {
  return '"' + escape$1(str, escape_html_attr_dict, (code) => `&#${code};`) + '"';
}
function escape$1(str, dict, unicode_encoder) {
  let result = "";
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char in dict) {
      result += dict[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += unicode_encoder(code);
      }
    } else {
      result += char;
    }
  }
  return result;
}
const s$1 = JSON.stringify;
async function render_response({
  branch,
  options: options2,
  $session,
  page_config,
  status,
  error: error2,
  page
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error2) {
    error2.stack = options2.get_stack(error2);
  }
  if (page_config.ssr) {
    branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page,
      components: branch.map(({ node }) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error3) => {
      throw new Error(`Failed to serialize session data: ${error3.message}`);
    })},
				host: ${page && page.host ? s$1(page.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error2)},
					nodes: [
						${(branch || []).map(({ node }) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page && page.host ? s$1(page.host) : "location.host"}, // TODO this is redundant
						path: ${page && page.path ? try_serialize(page.path, (error3) => {
      throw new Error(`Failed to serialize page.path: ${error3.message}`);
    }) : null},
						query: new URLSearchParams(${page && page.query ? s$1(page.query.toString()) : ""}),
						params: ${page && page.params ? try_serialize(page.params, (error3) => {
      throw new Error(`Failed to serialize page.params: ${error3.message}`);
    }) : null}
					}
				}` : "null"}
			});
		<\/script>`;
  }
  if (options2.service_worker) {
    init2 += `<script>
			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('${options2.service_worker}');
			}
		<\/script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({ url, body: body2, json }) => {
    let attributes = `type="application/json" data-type="svelte-data" data-url=${escape_html_attr(url)}`;
    if (body2)
      attributes += ` data-body="${hash(body2)}"`;
    return `<script ${attributes}>${json}<\/script>`;
  }).join("\n\n	")}
		`;
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({ head, body })
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(coalesce_to_error(err));
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const { name, message, stack } = error2;
    serialized = try_serialize({ ...error2, name, message, stack });
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return {
        status: status || 500,
        error: new Error()
      };
    }
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error2 };
    }
    return { status, error: error2 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  if (loaded.context) {
    throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
  }
  return loaded;
}
const s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page,
  node,
  $session,
  stuff,
  prerender_enabled,
  is_leaf,
  is_error,
  status,
  error: error2
}) {
  const { module } = node;
  let uses_credentials = false;
  const fetched = [];
  let set_cookie_headers = [];
  let loaded;
  const page_proxy = new Proxy(page, {
    get: (target, prop, receiver) => {
      if (prop === "query" && prerender_enabled) {
        throw new Error("Cannot access query on a page with prerendering enabled");
      }
      return Reflect.get(target, prop, receiver);
    }
  });
  if (module.load) {
    const load_input = {
      page: page_proxy,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
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
        const resolved = resolve(request.path, url.split("?")[0]);
        let response;
        const prefix = options2.paths.assets || options2.paths.base;
        const filename = (resolved.startsWith(prefix) ? resolved.slice(prefix.length) : resolved).slice(1);
        const filename_html = `${filename}/index.html`;
        const asset = options2.manifest.assets.find((d) => d.file === filename || d.file === filename_html);
        if (asset) {
          response = options2.read ? new Response(options2.read(asset.file), {
            headers: asset.type ? { "content-type": asset.type } : {}
          }) : await fetch(`http://${page.host}/${asset.file}`, opts);
        } else if (resolved.startsWith("/") && !resolved.startsWith("//")) {
          const relative = resolved;
          const headers = {
            ...opts.headers
          };
          if (opts.credentials !== "omit") {
            uses_credentials = true;
            headers.cookie = request.headers.cookie;
            if (!headers.authorization) {
              headers.authorization = request.headers.authorization;
            }
          }
          if (opts.body && typeof opts.body !== "string") {
            throw new Error("Request body must be a string");
          }
          const search = url.includes("?") ? url.slice(url.indexOf("?") + 1) : "";
          const rendered = await respond({
            host: request.host,
            method: opts.method || "GET",
            headers,
            path: relative,
            rawBody: opts.body == null ? null : new TextEncoder().encode(opts.body),
            query: new URLSearchParams(search)
          }, options2, {
            fetched: url,
            initiator: route
          });
          if (rendered) {
            if (state.prerender) {
              state.prerender.dependencies.set(relative, rendered);
            }
            response = new Response(rendered.body, {
              status: rendered.status,
              headers: rendered.headers
            });
          }
        } else {
          if (resolved.startsWith("//")) {
            throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
          }
          if (typeof request.host !== "undefined") {
            const { hostname: fetch_hostname } = new URL(url);
            const [server_hostname] = request.host.split(":");
            if (`.${fetch_hostname}`.endsWith(`.${server_hostname}`) && opts.credentials !== "omit") {
              uses_credentials = true;
              opts.headers = {
                ...opts.headers,
                cookie: request.headers.cookie
              };
            }
          }
          const external_request = new Request(url, opts);
          response = await options2.hooks.externalFetch.call(null, external_request);
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, _receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 === "set-cookie") {
                    set_cookie_headers = set_cookie_headers.concat(value);
                  } else if (key2 !== "etag") {
                    headers[key2] = value;
                  }
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":"${escape_json_string_in_html(body)}"}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      stuff: { ...stuff }
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error2;
    }
    loaded = await module.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  if (!loaded) {
    throw new Error(`${node.entry} - load must return a value except for page fall through`);
  }
  return {
    node,
    loaded: normalize(loaded),
    stuff: loaded.stuff || stuff,
    fetched,
    set_cookie_headers,
    uses_credentials
  };
}
const absolute = /^([a-z]+:)?\/?\//;
function resolve(base2, path) {
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
async function respond_with_error({ request, options: options2, state, $session, status, error: error2 }) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page,
    node: default_layout,
    $session,
    stuff: {},
    prerender_enabled: is_prerender_enabled(options2, default_error, state),
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page,
      node: default_error,
      $session,
      stuff: loaded ? loaded.stuff : {},
      prerender_enabled: is_prerender_enabled(options2, default_error, state),
      is_leaf: false,
      is_error: true,
      status,
      error: error2
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error2,
      branch,
      page
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return {
      status: 500,
      headers: {},
      body: error3.stack
    };
  }
}
function is_prerender_enabled(options2, node, state) {
  return options2.prerender && (!!node.module.prerender || !!state.prerender && state.prerender.all);
}
async function respond$1(opts) {
  const { request, options: options2, state, $session, route } = opts;
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id ? options2.load_component(id) : void 0));
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error3
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  let page_config = get_page_config(leaf, options2);
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {}
    };
  }
  let branch = [];
  let status = 200;
  let error2;
  let set_cookie_headers = [];
  ssr:
    if (page_config.ssr) {
      let stuff = {};
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              ...opts,
              node,
              stuff,
              prerender_enabled: is_prerender_enabled(options2, node, state),
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
            if (loaded.loaded.redirect) {
              return with_cookies({
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              }, set_cookie_headers);
            }
            if (loaded.loaded.error) {
              ({ status, error: error2 } = loaded.loaded);
            }
          } catch (err) {
            const e = coalesce_to_error(err);
            options2.handle_error(e, request);
            status = 500;
            error2 = e;
          }
          if (loaded && !error2) {
            branch.push(loaded);
          }
          if (error2) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  const error_loaded = await load_node({
                    ...opts,
                    node: error_node,
                    stuff: node_loaded.stuff,
                    prerender_enabled: is_prerender_enabled(options2, error_node, state),
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error2
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  page_config = get_page_config(error_node.module, options2);
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (err) {
                  const e = coalesce_to_error(err);
                  options2.handle_error(e, request);
                  continue;
                }
              }
            }
            return with_cookies(await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error2
            }), set_cookie_headers);
          }
        }
        if (loaded && loaded.loaded.stuff) {
          stuff = {
            ...stuff,
            ...loaded.loaded.stuff
          };
        }
      }
    }
  try {
    return with_cookies(await render_response({
      ...opts,
      page_config,
      status,
      error: error2,
      branch: branch.filter(Boolean)
    }), set_cookie_headers);
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return with_cookies(await respond_with_error({
      ...opts,
      status: 500,
      error: error3
    }), set_cookie_headers);
  }
}
function get_page_config(leaf, options2) {
  return {
    ssr: "ssr" in leaf ? !!leaf.ssr : options2.ssr,
    router: "router" in leaf ? !!leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? !!leaf.hydrate : options2.hydrate
  };
}
function with_cookies(response, set_cookie_headers) {
  if (set_cookie_headers.length) {
    response.headers["set-cookie"] = set_cookie_headers;
  }
  return response;
}
async function render_page(request, route, match, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const params = route.params(match);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  const $session = await options2.hooks.getSession(request);
  const response = await respond$1({
    request,
    options: options2,
    state,
    $session,
    route,
    page
  });
  if (response) {
    return response;
  }
  if (state.fetched) {
    return {
      status: 500,
      headers: {},
      body: `Bad request in load function: failed to fetch ${state.fetched}`
    };
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        (map.get(key) || []).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
class ReadOnlyFormData {
  constructor(map) {
    __privateAdd(this, _map, void 0);
    __privateSet(this, _map, map);
  }
  get(key) {
    const value = __privateGet(this, _map).get(key);
    return value && value[0];
  }
  getAll(key) {
    return __privateGet(this, _map).get(key);
  }
  has(key) {
    return __privateGet(this, _map).has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key] of __privateGet(this, _map))
      yield key;
  }
  *values() {
    for (const [, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield value[i];
      }
    }
  }
}
_map = new WeakMap();
function parse_body(raw, headers) {
  if (!raw)
    return raw;
  const content_type = headers["content-type"];
  const [type, ...directives] = content_type ? content_type.split(/;\s*/) : [];
  const text = () => new TextDecoder(headers["content-encoding"] || "utf-8").decode(raw);
  switch (type) {
    case "text/plain":
      return text();
    case "application/json":
      return JSON.parse(text());
    case "application/x-www-form-urlencoded":
      return get_urlencoded(text());
    case "multipart/form-data": {
      const boundary = directives.find((directive) => directive.startsWith("boundary="));
      if (!boundary)
        throw new Error("Missing boundary");
      return get_multipart(text(), boundary.slice("boundary=".length));
    }
    default:
      return raw;
  }
}
function get_urlencoded(text) {
  const { data, append } = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    throw new Error("Malformed form data");
  }
  const { data, append } = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    if (!match) {
      throw new Error("Malformed form data");
    }
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    const headers = {};
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      headers[name] = value;
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          throw new Error("Malformed form data");
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      throw new Error("Malformed form data");
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !(incoming.path.split("/").pop() || "").includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: options2.paths.base + path + (q ? `?${q}` : "")
        }
      };
    }
  }
  const headers = lowercase_keys(incoming.headers);
  const request = {
    ...incoming,
    headers,
    body: parse_body(incoming.rawBody, headers),
    params: {},
    locals: {}
  };
  try {
    return await options2.hooks.handle({
      request,
      resolve: async (request2) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request2),
            page_config: { ssr: false, router: true, hydrate: true },
            status: 200,
            branch: []
          });
        }
        const decoded = decodeURI(request2.path);
        for (const route of options2.manifest.routes) {
          const match = route.pattern.exec(decoded);
          if (!match)
            continue;
          const response = route.type === "endpoint" ? await render_endpoint(request2, route, match) : await render_page(request2, route, match, options2, state);
          if (response) {
            if (response.status === 200) {
              const cache_control = get_single_valued_header(response.headers, "cache-control");
              if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
                const etag = `"${hash(response.body || "")}"`;
                if (request2.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {}
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        const $session = await options2.hooks.getSession(request2);
        return await respond_with_error({
          request: request2,
          options: options2,
          state,
          $session,
          status: 404,
          error: new Error(`Not found: ${request2.path}`)
        });
      }
    });
  } catch (err) {
    const e = coalesce_to_error(err);
    options2.handle_error(e, request);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}
function noop() {
}
const identity = (x) => x;
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k in props)
    if (!keys.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function custom_event(type, detail, bubbles = false) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, false, detail);
  return e;
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
Promise.resolve();
const boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
function spread(args, classes_to_add) {
  const attributes = Object.assign({}, ...args);
  if (classes_to_add) {
    if (attributes.class == null) {
      attributes.class = classes_to_add;
    } else {
      attributes.class += " " + classes_to_add;
    }
  }
  let str = "";
  Object.keys(attributes).forEach((name) => {
    if (invalid_attribute_name_character.test(name))
      return;
    const value = attributes[name];
    if (value === true)
      str += " " + name;
    else if (boolean_attributes.has(name.toLowerCase())) {
      if (value)
        str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${value}"`;
    }
  });
  return str;
}
const escaped = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
}
function escape_attribute_value(value) {
  return typeof value === "string" ? escape(value) : value;
}
function escape_object(obj) {
  const result = {};
  for (const key in obj) {
    result[key] = escape_attribute_value(obj[key]);
  }
  return result;
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
const missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
let on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function afterUpdate() {
}
var root_svelte_svelte_type_style_lang = "";
const css = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: null
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css);
  {
    stores.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${``}`;
});
let base = "";
let assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
const template = ({ head, body }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="/favicon.svg" />\n    <!-- <link rel="icon" href="data:image/svg+xml, \n                          <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>\n                            <text y=%221em%22 font-size=%2285%22>\u{1F642}</text>\n                          </svg>"> -->\n\n    <link rel="preload" href="https://use.typekit.net/mhr2lku.css" as="style">\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    \n    <link rel="stylesheet" href="https://use.typekit.net/mhr2lku.css">\n\n    ' + head + '\n  </head>\n  <body>\n    <div id="svelte">' + body + "</div>\n  </body>\n</html>\n";
let options = null;
const default_settings = { paths: { "base": "", "assets": "" } };
function init(settings = default_settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  const hooks = get_hooks(user_hooks);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: assets + "/_app/start-b81de4a4.js",
      css: [assets + "/_app/assets/start-d977ffc4.css"],
      js: [assets + "/_app/start-b81de4a4.js", assets + "/_app/chunks/vendor-dfb9df3e.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => assets + "/_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2, request) => {
      hooks.handleError({ error: error2, request });
      error2.stack = options.get_stack(error2);
    },
    hooks,
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    prerender: true,
    read: settings.read,
    root: Root,
    service_worker: null,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
const empty = () => ({});
const manifest = {
  assets: [{ "file": ".DS_Store", "size": 10244, "type": null }, { "file": ".nojekyll", "size": 0, "type": null }, { "file": "CNAME", "size": 24, "type": null }, { "file": "favicon.svg", "size": 110, "type": "image/svg+xml" }, { "file": "fonts/.DS_Store", "size": 6148, "type": null }, { "file": "fonts/Satoshi-Black.eot", "size": 73352, "type": "application/vnd.ms-fontobject" }, { "file": "fonts/Satoshi-Black.ttf", "size": 73176, "type": "font/ttf" }, { "file": "fonts/Satoshi-Black.woff", "size": 30376, "type": "font/woff" }, { "file": "fonts/Satoshi-Black.woff2", "size": 23484, "type": "font/woff2" }, { "file": "fonts/Satoshi-BlackItalic.eot", "size": 75950, "type": "application/vnd.ms-fontobject" }, { "file": "fonts/Satoshi-BlackItalic.ttf", "size": 75760, "type": "font/ttf" }, { "file": "fonts/Satoshi-BlackItalic.woff", "size": 31364, "type": "font/woff" }, { "file": "fonts/Satoshi-BlackItalic.woff2", "size": 24276, "type": "font/woff2" }, { "file": "fonts/Satoshi-Bold.eot", "size": 73532, "type": "application/vnd.ms-fontobject" }, { "file": "fonts/Satoshi-Bold.ttf", "size": 73368, "type": "font/ttf" }, { "file": "fonts/Satoshi-Bold.woff", "size": 32972, "type": "font/woff" }, { "file": "fonts/Satoshi-Bold.woff2", "size": 25328, "type": "font/woff2" }, { "file": "fonts/Satoshi-BoldItalic.eot", "size": 76620, "type": "application/vnd.ms-fontobject" }, { "file": "fonts/Satoshi-BoldItalic.ttf", "size": 76452, "type": "font/ttf" }, { "file": "fonts/Satoshi-BoldItalic.woff", "size": 34336, "type": "font/woff" }, { "file": "fonts/Satoshi-BoldItalic.woff2", "size": 26300, "type": "font/woff2" }, { "file": "fonts/Satoshi-Italic.eot", "size": 76762, "type": "application/vnd.ms-fontobject" }, { "file": "fonts/Satoshi-Italic.ttf", "size": 76604, "type": "font/ttf" }, { "file": "fonts/Satoshi-Italic.woff", "size": 34336, "type": "font/woff" }, { "file": "fonts/Satoshi-Italic.woff2", "size": 26456, "type": "font/woff2" }, { "file": "fonts/Satoshi-Light.eot", "size": 71860, "type": "application/vnd.ms-fontobject" }, { "file": "fonts/Satoshi-Light.ttf", "size": 71684, "type": "font/ttf" }, { "file": "fonts/Satoshi-Light.woff", "size": 29276, "type": "font/woff" }, { "file": "fonts/Satoshi-Light.woff2", "size": 22800, "type": "font/woff2" }, { "file": "fonts/Satoshi-LightItalic.eot", "size": 75590, "type": "application/vnd.ms-fontobject" }, { "file": "fonts/Satoshi-LightItalic.ttf", "size": 75400, "type": "font/ttf" }, { "file": "fonts/Satoshi-LightItalic.woff", "size": 30336, "type": "font/woff" }, { "file": "fonts/Satoshi-LightItalic.woff2", "size": 23408, "type": "font/woff2" }, { "file": "fonts/Satoshi-Medium.eot", "size": 73934, "type": "application/vnd.ms-fontobject" }, { "file": "fonts/Satoshi-Medium.ttf", "size": 73756, "type": "font/ttf" }, { "file": "fonts/Satoshi-Medium.woff", "size": 33272, "type": "font/woff" }, { "file": "fonts/Satoshi-Medium.woff2", "size": 25596, "type": "font/woff2" }, { "file": "fonts/Satoshi-MediumItalic.eot", "size": 76888, "type": "application/vnd.ms-fontobject" }, { "file": "fonts/Satoshi-MediumItalic.ttf", "size": 76696, "type": "font/ttf" }, { "file": "fonts/Satoshi-MediumItalic.woff", "size": 34576, "type": "font/woff" }, { "file": "fonts/Satoshi-MediumItalic.woff2", "size": 26696, "type": "font/woff2" }, { "file": "fonts/Satoshi-Regular.eot", "size": 73634, "type": "application/vnd.ms-fontobject" }, { "file": "fonts/Satoshi-Regular.ttf", "size": 73476, "type": "font/ttf" }, { "file": "fonts/Satoshi-Regular.woff", "size": 33024, "type": "font/woff" }, { "file": "fonts/Satoshi-Regular.woff2", "size": 25516, "type": "font/woff2" }, { "file": "fonts/Satoshi-Variable.eot", "size": 127628, "type": "application/vnd.ms-fontobject" }, { "file": "fonts/Satoshi-Variable.ttf", "size": 127420, "type": "font/ttf" }, { "file": "fonts/Satoshi-Variable.woff", "size": 35160, "type": "font/woff" }, { "file": "fonts/Satoshi-Variable.woff2", "size": 42588, "type": "font/woff2" }, { "file": "fonts/Satoshi-VariableItalic.eot", "size": 129984, "type": "application/vnd.ms-fontobject" }, { "file": "fonts/Satoshi-VariableItalic.ttf", "size": 129748, "type": "font/ttf" }, { "file": "fonts/Satoshi-VariableItalic.woff", "size": 36472, "type": "font/woff" }, { "file": "fonts/Satoshi-VariableItalic.woff2", "size": 43844, "type": "font/woff2" }, { "file": "g/images/post/covid-gun-spikes/featured-1200.png", "size": 335200, "type": "image/png" }, { "file": "g/images/post/covid-gun-spikes/featured-1200.webp", "size": 74794, "type": "image/webp" }, { "file": "g/images/post/covid-gun-spikes/featured-400.png", "size": 62998, "type": "image/png" }, { "file": "g/images/post/covid-gun-spikes/featured-400.webp", "size": 11600, "type": "image/webp" }, { "file": "g/images/post/covid-gun-spikes/featured-800.png", "size": 186980, "type": "image/png" }, { "file": "g/images/post/covid-gun-spikes/featured-800.webp", "size": 38156, "type": "image/webp" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-4-1-1200.png", "size": 187606, "type": "image/png" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-4-1-1200.webp", "size": 29142, "type": "image/webp" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-4-1-400.png", "size": 38284, "type": "image/png" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-4-1-400.webp", "size": 7280, "type": "image/webp" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-4-1-800.png", "size": 103448, "type": "image/png" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-4-1-800.webp", "size": 17742, "type": "image/webp" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-5-1-1200.png", "size": 67151, "type": "image/png" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-5-1-1200.webp", "size": 21026, "type": "image/webp" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-5-1-400.png", "size": 21350, "type": "image/png" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-5-1-400.webp", "size": 6202, "type": "image/webp" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-5-1-800.png", "size": 45216, "type": "image/png" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-5-1-800.webp", "size": 13876, "type": "image/webp" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-6-1-1200.png", "size": 143144, "type": "image/png" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-6-1-1200.webp", "size": 34192, "type": "image/webp" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-6-1-400.png", "size": 36205, "type": "image/png" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-6-1-400.webp", "size": 9086, "type": "image/webp" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-6-1-800.png", "size": 88862, "type": "image/png" }, { "file": "g/images/post/covid-gun-spikes/unnamed-chunk-6-1-800.webp", "size": 21660, "type": "image/webp" }, { "file": "g/images/project/atus/header-1200.png", "size": 117468, "type": "image/png" }, { "file": "g/images/project/atus/header-1200.webp", "size": 32554, "type": "image/webp" }, { "file": "g/images/project/atus/header-400.png", "size": 24438, "type": "image/png" }, { "file": "g/images/project/atus/header-400.webp", "size": 5824, "type": "image/webp" }, { "file": "g/images/project/atus/header-800.png", "size": 67372, "type": "image/png" }, { "file": "g/images/project/atus/header-800.webp", "size": 18774, "type": "image/webp" }, { "file": "g/images/project/atus/mac-1-1200.png", "size": 143023, "type": "image/png" }, { "file": "g/images/project/atus/mac-1-1200.webp", "size": 24644, "type": "image/webp" }, { "file": "g/images/project/atus/mac-1-400.png", "size": 28398, "type": "image/png" }, { "file": "g/images/project/atus/mac-1-400.webp", "size": 4934, "type": "image/webp" }, { "file": "g/images/project/atus/mac-1-800.png", "size": 78494, "type": "image/png" }, { "file": "g/images/project/atus/mac-1-800.webp", "size": 14538, "type": "image/webp" }, { "file": "g/images/project/atus/mac-2-1200.png", "size": 155159, "type": "image/png" }, { "file": "g/images/project/atus/mac-2-1200.webp", "size": 29006, "type": "image/webp" }, { "file": "g/images/project/atus/mac-2-400.png", "size": 29767, "type": "image/png" }, { "file": "g/images/project/atus/mac-2-400.webp", "size": 4998, "type": "image/webp" }, { "file": "g/images/project/atus/mac-2-800.png", "size": 84722, "type": "image/png" }, { "file": "g/images/project/atus/mac-2-800.webp", "size": 15280, "type": "image/webp" }, { "file": "g/images/project/atus/phone-1-1200.png", "size": 480445, "type": "image/png" }, { "file": "g/images/project/atus/phone-1-1200.webp", "size": 79350, "type": "image/webp" }, { "file": "g/images/project/atus/phone-1-400.png", "size": 87608, "type": "image/png" }, { "file": "g/images/project/atus/phone-1-400.webp", "size": 20558, "type": "image/webp" }, { "file": "g/images/project/atus/phone-1-800.png", "size": 252859, "type": "image/png" }, { "file": "g/images/project/atus/phone-1-800.webp", "size": 50868, "type": "image/webp" }, { "file": "g/images/project/atus/phone-2-1200.png", "size": 534391, "type": "image/png" }, { "file": "g/images/project/atus/phone-2-1200.webp", "size": 94984, "type": "image/webp" }, { "file": "g/images/project/atus/phone-2-400.png", "size": 96268, "type": "image/png" }, { "file": "g/images/project/atus/phone-2-400.webp", "size": 22660, "type": "image/webp" }, { "file": "g/images/project/atus/phone-2-800.png", "size": 280005, "type": "image/png" }, { "file": "g/images/project/atus/phone-2-800.webp", "size": 59932, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/header-1200.png", "size": 659167, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/header-1200.webp", "size": 23092, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/header-400.png", "size": 82475, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/header-400.webp", "size": 5700, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/header-800.png", "size": 314202, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/header-800.webp", "size": 12684, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-1-400.png", "size": 99969, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-1-400.webp", "size": 18320, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-1-800.png", "size": 283987, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-1-800.webp", "size": 41218, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-2-400.png", "size": 101625, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-2-400.webp", "size": 17096, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-2-800.png", "size": 295392, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-2-800.webp", "size": 38990, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-3-400.png", "size": 116485, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-3-400.webp", "size": 21446, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-3-800.png", "size": 335388, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-3-800.webp", "size": 49034, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-4-400.png", "size": 227477, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-4-400.webp", "size": 25014, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-4-800.png", "size": 679086, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/iphone-4-800.webp", "size": 61190, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-1-1200.png", "size": 127931, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-1-1200.webp", "size": 16534, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-1-400.png", "size": 31724, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-1-400.webp", "size": 3498, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-1-800.png", "size": 72757, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-1-800.webp", "size": 9526, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-2-1200.png", "size": 127937, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-2-1200.webp", "size": 16030, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-2-400.png", "size": 25287, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-2-400.webp", "size": 3426, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-2-800.png", "size": 68795, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-2-800.webp", "size": 9310, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-3-1200.png", "size": 127950, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-3-1200.webp", "size": 18116, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-3-400.png", "size": 27536, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-3-400.webp", "size": 4358, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-3-800.png", "size": 69585, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-3-800.webp", "size": 10800, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-4-1200.png", "size": 205667, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-4-1200.webp", "size": 26798, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-4-400.png", "size": 55327, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-4-400.webp", "size": 5990, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-4-800.png", "size": 121104, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-4-800.webp", "size": 16176, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-5-1200.png", "size": 444597, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-5-1200.webp", "size": 35422, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-5-400.png", "size": 68211, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-5-400.webp", "size": 6964, "type": "image/webp" }, { "file": "g/images/project/bob-ross-art-gallery/mac-5-800.png", "size": 218593, "type": "image/png" }, { "file": "g/images/project/bob-ross-art-gallery/mac-5-800.webp", "size": 20210, "type": "image/webp" }, { "file": "g/images/project/compas/header-1200.png", "size": 85793, "type": "image/png" }, { "file": "g/images/project/compas/header-1200.webp", "size": 18064, "type": "image/webp" }, { "file": "g/images/project/compas/header-400.png", "size": 19742, "type": "image/png" }, { "file": "g/images/project/compas/header-400.webp", "size": 3934, "type": "image/webp" }, { "file": "g/images/project/compas/header-800.png", "size": 50125, "type": "image/png" }, { "file": "g/images/project/compas/header-800.webp", "size": 10854, "type": "image/webp" }, { "file": "g/images/project/compas/mac-1-1200.png", "size": 210308, "type": "image/png" }, { "file": "g/images/project/compas/mac-1-1200.webp", "size": 42762, "type": "image/webp" }, { "file": "g/images/project/compas/mac-1-400.png", "size": 36848, "type": "image/png" }, { "file": "g/images/project/compas/mac-1-400.webp", "size": 6446, "type": "image/webp" }, { "file": "g/images/project/compas/mac-1-800.png", "size": 110550, "type": "image/png" }, { "file": "g/images/project/compas/mac-1-800.webp", "size": 22602, "type": "image/webp" }, { "file": "g/images/project/compas/mac-2-1200.png", "size": 121883, "type": "image/png" }, { "file": "g/images/project/compas/mac-2-1200.webp", "size": 16868, "type": "image/webp" }, { "file": "g/images/project/compas/mac-2-400.png", "size": 25051, "type": "image/png" }, { "file": "g/images/project/compas/mac-2-400.webp", "size": 3898, "type": "image/webp" }, { "file": "g/images/project/compas/mac-2-800.png", "size": 66851, "type": "image/png" }, { "file": "g/images/project/compas/mac-2-800.webp", "size": 9740, "type": "image/webp" }, { "file": "g/images/project/compas/phone-1-1200.png", "size": 732708, "type": "image/png" }, { "file": "g/images/project/compas/phone-1-1200.webp", "size": 155076, "type": "image/webp" }, { "file": "g/images/project/compas/phone-1-400.png", "size": 133246, "type": "image/png" }, { "file": "g/images/project/compas/phone-1-400.webp", "size": 35600, "type": "image/webp" }, { "file": "g/images/project/compas/phone-1-800.png", "size": 392407, "type": "image/png" }, { "file": "g/images/project/compas/phone-1-800.webp", "size": 98604, "type": "image/webp" }, { "file": "g/images/project/compas/phone-2-1200.png", "size": 387380, "type": "image/png" }, { "file": "g/images/project/compas/phone-2-1200.webp", "size": 52924, "type": "image/webp" }, { "file": "g/images/project/compas/phone-2-400.png", "size": 68316, "type": "image/png" }, { "file": "g/images/project/compas/phone-2-400.webp", "size": 13868, "type": "image/webp" }, { "file": "g/images/project/compas/phone-2-800.png", "size": 200114, "type": "image/png" }, { "file": "g/images/project/compas/phone-2-800.webp", "size": 33838, "type": "image/webp" }, { "file": "g/images/project/covid-masking/header-1200.png", "size": 122351, "type": "image/png" }, { "file": "g/images/project/covid-masking/header-1200.webp", "size": 30042, "type": "image/webp" }, { "file": "g/images/project/covid-masking/header-400.png", "size": 24782, "type": "image/png" }, { "file": "g/images/project/covid-masking/header-400.webp", "size": 6154, "type": "image/webp" }, { "file": "g/images/project/covid-masking/header-800.png", "size": 66289, "type": "image/png" }, { "file": "g/images/project/covid-masking/header-800.webp", "size": 18276, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-1-1200.png", "size": 148531, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-1-1200.webp", "size": 23256, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-1-400.png", "size": 29247, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-1-400.webp", "size": 5018, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-1-800.png", "size": 80753, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-1-800.webp", "size": 13864, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-2-1200.png", "size": 222640, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-2-1200.webp", "size": 34498, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-2-400.png", "size": 39260, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-2-400.webp", "size": 6626, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-2-800.png", "size": 114679, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-2-800.webp", "size": 19234, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-3-1200.png", "size": 136848, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-3-1200.webp", "size": 19628, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-3-400.png", "size": 29505, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-3-400.webp", "size": 4690, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-3-800.png", "size": 75692, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-3-800.webp", "size": 11500, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-4-1200.png", "size": 203112, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-4-1200.webp", "size": 31536, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-4-400.png", "size": 39083, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-4-400.webp", "size": 6538, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-4-800.png", "size": 108673, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-4-800.webp", "size": 18250, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-5-1200.png", "size": 438462, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-5-1200.webp", "size": 49144, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-5-400.png", "size": 75773, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-5-400.webp", "size": 9996, "type": "image/webp" }, { "file": "g/images/project/covid-masking/mac-5-800.png", "size": 229909, "type": "image/png" }, { "file": "g/images/project/covid-masking/mac-5-800.webp", "size": 28456, "type": "image/webp" }, { "file": "g/images/project/covid-masking/phone-1-1200.png", "size": 666371, "type": "image/png" }, { "file": "g/images/project/covid-masking/phone-1-1200.webp", "size": 103550, "type": "image/webp" }, { "file": "g/images/project/covid-masking/phone-1-400.png", "size": 126836, "type": "image/png" }, { "file": "g/images/project/covid-masking/phone-1-400.webp", "size": 31446, "type": "image/webp" }, { "file": "g/images/project/covid-masking/phone-1-800.png", "size": 355371, "type": "image/png" }, { "file": "g/images/project/covid-masking/phone-1-800.webp", "size": 70310, "type": "image/webp" }, { "file": "g/images/project/covid-masking/phone-2-1200.png", "size": 633800, "type": "image/png" }, { "file": "g/images/project/covid-masking/phone-2-1200.webp", "size": 92872, "type": "image/webp" }, { "file": "g/images/project/covid-masking/phone-2-400.png", "size": 116944, "type": "image/png" }, { "file": "g/images/project/covid-masking/phone-2-400.webp", "size": 27282, "type": "image/webp" }, { "file": "g/images/project/covid-masking/phone-2-800.png", "size": 333035, "type": "image/png" }, { "file": "g/images/project/covid-masking/phone-2-800.webp", "size": 61460, "type": "image/webp" }, { "file": "g/images/project/covid-masking/phone-3-1200.png", "size": 1115402, "type": "image/png" }, { "file": "g/images/project/covid-masking/phone-3-1200.webp", "size": 0, "type": "image/webp" }, { "file": "g/images/project/covid-masking/phone-3-400.png", "size": 192810, "type": "image/png" }, { "file": "g/images/project/covid-masking/phone-3-400.webp", "size": 40650, "type": "image/webp" }, { "file": "g/images/project/covid-masking/phone-3-800.png", "size": 582363, "type": "image/png" }, { "file": "g/images/project/covid-masking/phone-3-800.webp", "size": 94796, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/albums-mac-1200.png", "size": 190449, "type": "image/png" }, { "file": "g/images/project/cudi-hums/albums-mac-1200.webp", "size": 22720, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/albums-mac-400.png", "size": 34996, "type": "image/png" }, { "file": "g/images/project/cudi-hums/albums-mac-400.webp", "size": 4866, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/albums-mac-800.png", "size": 98209, "type": "image/png" }, { "file": "g/images/project/cudi-hums/albums-mac-800.webp", "size": 12454, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/albums-phone-1200.png", "size": 399353, "type": "image/png" }, { "file": "g/images/project/cudi-hums/albums-phone-1200.webp", "size": 40044, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/albums-phone-400.png", "size": 62996, "type": "image/png" }, { "file": "g/images/project/cudi-hums/albums-phone-400.webp", "size": 9586, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/albums-phone-800.png", "size": 195567, "type": "image/png" }, { "file": "g/images/project/cudi-hums/albums-phone-800.webp", "size": 24588, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/header-1200.png", "size": 144746, "type": "image/png" }, { "file": "g/images/project/cudi-hums/header-1200.webp", "size": 17600, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/header-400.png", "size": 36882, "type": "image/png" }, { "file": "g/images/project/cudi-hums/header-400.webp", "size": 5518, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/header-800.png", "size": 85053, "type": "image/png" }, { "file": "g/images/project/cudi-hums/header-800.webp", "size": 11160, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/intro-phone-1200.png", "size": 303610, "type": "image/png" }, { "file": "g/images/project/cudi-hums/intro-phone-1200.webp", "size": 35528, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/intro-phone-400.png", "size": 57013, "type": "image/png" }, { "file": "g/images/project/cudi-hums/intro-phone-400.webp", "size": 10072, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/intro-phone-800.png", "size": 175764, "type": "image/png" }, { "file": "g/images/project/cudi-hums/intro-phone-800.webp", "size": 22504, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/lyrics-mac-1200.png", "size": 189570, "type": "image/png" }, { "file": "g/images/project/cudi-hums/lyrics-mac-1200.webp", "size": 21870, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/lyrics-mac-400.png", "size": 36678, "type": "image/png" }, { "file": "g/images/project/cudi-hums/lyrics-mac-400.webp", "size": 4688, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/lyrics-mac-800.png", "size": 104622, "type": "image/png" }, { "file": "g/images/project/cudi-hums/lyrics-mac-800.webp", "size": 12756, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/lyrics-phone-1200.png", "size": 429873, "type": "image/png" }, { "file": "g/images/project/cudi-hums/lyrics-phone-1200.webp", "size": 49408, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/lyrics-phone-400.png", "size": 86039, "type": "image/png" }, { "file": "g/images/project/cudi-hums/lyrics-phone-400.webp", "size": 12262, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/lyrics-phone-800.png", "size": 227852, "type": "image/png" }, { "file": "g/images/project/cudi-hums/lyrics-phone-800.webp", "size": 30830, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/outro-phone-1200.png", "size": 703752, "type": "image/png" }, { "file": "g/images/project/cudi-hums/outro-phone-1200.webp", "size": 131896, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/outro-phone-400.png", "size": 135657, "type": "image/png" }, { "file": "g/images/project/cudi-hums/outro-phone-400.webp", "size": 31680, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/outro-phone-800.png", "size": 383870, "type": "image/png" }, { "file": "g/images/project/cudi-hums/outro-phone-800.webp", "size": 83944, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/tracks-mac-1200.png", "size": 181593, "type": "image/png" }, { "file": "g/images/project/cudi-hums/tracks-mac-1200.webp", "size": 21186, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/tracks-mac-400.png", "size": 33630, "type": "image/png" }, { "file": "g/images/project/cudi-hums/tracks-mac-400.webp", "size": 4526, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/tracks-mac-800.png", "size": 95938, "type": "image/png" }, { "file": "g/images/project/cudi-hums/tracks-mac-800.webp", "size": 11792, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/tracks-phone-1200.png", "size": 615707, "type": "image/png" }, { "file": "g/images/project/cudi-hums/tracks-phone-1200.webp", "size": 68988, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/tracks-phone-400.png", "size": 99889, "type": "image/png" }, { "file": "g/images/project/cudi-hums/tracks-phone-400.webp", "size": 15554, "type": "image/webp" }, { "file": "g/images/project/cudi-hums/tracks-phone-800.png", "size": 306600, "type": "image/png" }, { "file": "g/images/project/cudi-hums/tracks-phone-800.webp", "size": 40562, "type": "image/webp" }, { "file": "g/images/project/how-many-people/header-1200.png", "size": 91438, "type": "image/png" }, { "file": "g/images/project/how-many-people/header-1200.webp", "size": 20980, "type": "image/webp" }, { "file": "g/images/project/how-many-people/header-400.png", "size": 22929, "type": "image/png" }, { "file": "g/images/project/how-many-people/header-400.webp", "size": 4158, "type": "image/webp" }, { "file": "g/images/project/how-many-people/header-800.png", "size": 55545, "type": "image/png" }, { "file": "g/images/project/how-many-people/header-800.webp", "size": 12292, "type": "image/webp" }, { "file": "g/images/project/how-many-people/mac-1-1200.png", "size": 160499, "type": "image/png" }, { "file": "g/images/project/how-many-people/mac-1-1200.webp", "size": 27148, "type": "image/webp" }, { "file": "g/images/project/how-many-people/mac-1-400.png", "size": 34102, "type": "image/png" }, { "file": "g/images/project/how-many-people/mac-1-400.webp", "size": 5994, "type": "image/webp" }, { "file": "g/images/project/how-many-people/mac-1-800.png", "size": 90031, "type": "image/png" }, { "file": "g/images/project/how-many-people/mac-1-800.webp", "size": 16414, "type": "image/webp" }, { "file": "g/images/project/how-many-people/mac-2-1200.png", "size": 188707, "type": "image/png" }, { "file": "g/images/project/how-many-people/mac-2-1200.webp", "size": 33948, "type": "image/webp" }, { "file": "g/images/project/how-many-people/mac-2-400.png", "size": 41018, "type": "image/png" }, { "file": "g/images/project/how-many-people/mac-2-400.webp", "size": 7264, "type": "image/webp" }, { "file": "g/images/project/how-many-people/mac-2-800.png", "size": 106120, "type": "image/png" }, { "file": "g/images/project/how-many-people/mac-2-800.webp", "size": 19634, "type": "image/webp" }, { "file": "g/images/project/how-many-people/phone-1-1200.png", "size": 515914, "type": "image/png" }, { "file": "g/images/project/how-many-people/phone-1-1200.webp", "size": 85424, "type": "image/webp" }, { "file": "g/images/project/how-many-people/phone-1-400.png", "size": 101283, "type": "image/png" }, { "file": "g/images/project/how-many-people/phone-1-400.webp", "size": 21960, "type": "image/webp" }, { "file": "g/images/project/how-many-people/phone-1-800.png", "size": 280972, "type": "image/png" }, { "file": "g/images/project/how-many-people/phone-1-800.webp", "size": 52784, "type": "image/webp" }, { "file": "g/images/project/how-many-people/phone-2-1200.png", "size": 450117, "type": "image/png" }, { "file": "g/images/project/how-many-people/phone-2-1200.webp", "size": 69870, "type": "image/webp" }, { "file": "g/images/project/how-many-people/phone-2-400.png", "size": 85569, "type": "image/png" }, { "file": "g/images/project/how-many-people/phone-2-400.webp", "size": 17768, "type": "image/webp" }, { "file": "g/images/project/how-many-people/phone-2-800.png", "size": 239868, "type": "image/png" }, { "file": "g/images/project/how-many-people/phone-2-800.webp", "size": 43586, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/header-1200.png", "size": 460621, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/header-1200.webp", "size": 62090, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/header-400.png", "size": 78213, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/header-400.webp", "size": 11710, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/header-800.png", "size": 243964, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/header-800.webp", "size": 35180, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/mac-1-1200.png", "size": 360596, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/mac-1-1200.webp", "size": 41700, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/mac-1-400.png", "size": 61926, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/mac-1-400.webp", "size": 8048, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/mac-1-800.png", "size": 186879, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/mac-1-800.webp", "size": 23396, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/mac-2-1200.png", "size": 395093, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/mac-2-1200.webp", "size": 33060, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/mac-2-400.png", "size": 62816, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/mac-2-400.webp", "size": 5866, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/mac-2-800.png", "size": 197628, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/mac-2-800.webp", "size": 17554, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/mac-3-1200.png", "size": 484007, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/mac-3-1200.webp", "size": 55020, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/mac-3-400.png", "size": 78400, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/mac-3-400.webp", "size": 9206, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/mac-3-800.png", "size": 247347, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/mac-3-800.webp", "size": 28922, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/mac-4-1200.png", "size": 507630, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/mac-4-1200.webp", "size": 36226, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/mac-4-400.png", "size": 77780, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/mac-4-400.webp", "size": 7438, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/mac-4-800.png", "size": 252026, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/mac-4-800.webp", "size": 20442, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/phone-1-1200.png", "size": 1190882, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/phone-1-1200.webp", "size": 123630, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/phone-1-400.png", "size": 201162, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/phone-1-400.webp", "size": 26462, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/phone-1-800.png", "size": 616721, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/phone-1-800.webp", "size": 73688, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/phone-2-1200.png", "size": 1164599, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/phone-2-1200.webp", "size": 117774, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/phone-2-400.png", "size": 196132, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/phone-2-400.webp", "size": 25220, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/phone-2-800.png", "size": 603748, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/phone-2-800.webp", "size": 70492, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/phone-3-1200.png", "size": 1191236, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/phone-3-1200.webp", "size": 120498, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/phone-3-400.png", "size": 200316, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/phone-3-400.webp", "size": 24888, "type": "image/webp" }, { "file": "g/images/project/map-houston-homicides/phone-3-800.png", "size": 615912, "type": "image/png" }, { "file": "g/images/project/map-houston-homicides/phone-3-800.webp", "size": 70994, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/header-1200.png", "size": 1292482, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/header-1200.webp", "size": 72362, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/header-400.png", "size": 182128, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/header-400.webp", "size": 14084, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/header-800.png", "size": 627427, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/header-800.webp", "size": 41082, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-1-1200.png", "size": 749200, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-1-1200.webp", "size": 48070, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-1-400.png", "size": 108441, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-1-400.webp", "size": 9754, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-1-800.png", "size": 364911, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-1-800.webp", "size": 27312, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-2-1200.png", "size": 1031852, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-2-1200.webp", "size": 68694, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-2-400.png", "size": 138799, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-2-400.webp", "size": 12486, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-2-800.png", "size": 488234, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-2-800.webp", "size": 37384, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-3-1200.png", "size": 791258, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-3-1200.webp", "size": 48976, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-3-400.png", "size": 120093, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-3-400.webp", "size": 9640, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-3-800.png", "size": 392959, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-3-800.webp", "size": 27322, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-4-1200.png", "size": 924966, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-4-1200.webp", "size": 58734, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-4-400.png", "size": 121300, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-4-400.webp", "size": 10604, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-4-800.png", "size": 432066, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-4-800.webp", "size": 32074, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-5-1200.png", "size": 1150565, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-5-1200.webp", "size": 64822, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-5-400.png", "size": 149677, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-5-400.webp", "size": 11730, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/mac-5-800.png", "size": 537329, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/mac-5-800.webp", "size": 35056, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/phone-1-1200.png", "size": 1666998, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/phone-1-1200.webp", "size": 91170, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/phone-1-400.png", "size": 249103, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/phone-1-400.webp", "size": 16374, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/phone-1-800.png", "size": 822581, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/phone-1-800.webp", "size": 50644, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/phone-2-1200.png", "size": 2546336, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/phone-2-1200.webp", "size": 137424, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/phone-2-400.png", "size": 327091, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/phone-2-400.webp", "size": 25134, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/phone-2-800.png", "size": 1186624, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/phone-2-800.webp", "size": 74950, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/phone-3-1200.png", "size": 4334509, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/phone-3-1200.webp", "size": 236046, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/phone-3-400.png", "size": 520979, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/phone-3-400.webp", "size": 35046, "type": "image/webp" }, { "file": "g/images/project/map-missing-migrants/phone-3-800.png", "size": 1975269, "type": "image/png" }, { "file": "g/images/project/map-missing-migrants/phone-3-800.webp", "size": 121258, "type": "image/webp" }, { "file": "g/images/project/media-mentions/header-1200.png", "size": 81134, "type": "image/png" }, { "file": "g/images/project/media-mentions/header-1200.webp", "size": 16844, "type": "image/webp" }, { "file": "g/images/project/media-mentions/header-400.png", "size": 21335, "type": "image/png" }, { "file": "g/images/project/media-mentions/header-400.webp", "size": 3902, "type": "image/webp" }, { "file": "g/images/project/media-mentions/header-800.png", "size": 48480, "type": "image/png" }, { "file": "g/images/project/media-mentions/header-800.webp", "size": 10440, "type": "image/webp" }, { "file": "g/images/project/media-mentions/mac-1200.png", "size": 134195, "type": "image/png" }, { "file": "g/images/project/media-mentions/mac-1200.webp", "size": 17176, "type": "image/webp" }, { "file": "g/images/project/media-mentions/mac-400.png", "size": 29384, "type": "image/png" }, { "file": "g/images/project/media-mentions/mac-400.webp", "size": 3984, "type": "image/webp" }, { "file": "g/images/project/media-mentions/mac-800.png", "size": 73675, "type": "image/png" }, { "file": "g/images/project/media-mentions/mac-800.webp", "size": 9774, "type": "image/webp" }, { "file": "g/images/project/media-mentions/phone-1200.png", "size": 555295, "type": "image/png" }, { "file": "g/images/project/media-mentions/phone-1200.webp", "size": 81074, "type": "image/webp" }, { "file": "g/images/project/media-mentions/phone-400.png", "size": 101995, "type": "image/png" }, { "file": "g/images/project/media-mentions/phone-400.webp", "size": 18496, "type": "image/webp" }, { "file": "g/images/project/media-mentions/phone-800.png", "size": 293436, "type": "image/png" }, { "file": "g/images/project/media-mentions/phone-800.webp", "size": 49808, "type": "image/webp" }, { "file": "g/images/project/one-line-hacks/header-1200.png", "size": 156494, "type": "image/png" }, { "file": "g/images/project/one-line-hacks/header-1200.webp", "size": 36884, "type": "image/webp" }, { "file": "g/images/project/one-line-hacks/header-400.png", "size": 31575, "type": "image/png" }, { "file": "g/images/project/one-line-hacks/header-400.webp", "size": 6290, "type": "image/webp" }, { "file": "g/images/project/one-line-hacks/header-800.png", "size": 88840, "type": "image/png" }, { "file": "g/images/project/one-line-hacks/header-800.webp", "size": 20916, "type": "image/webp" }, { "file": "g/images/project/one-line-hacks/mac-1-1200.png", "size": 174252, "type": "image/png" }, { "file": "g/images/project/one-line-hacks/mac-1-1200.webp", "size": 29964, "type": "image/webp" }, { "file": "g/images/project/one-line-hacks/mac-1-400.png", "size": 32700, "type": "image/png" }, { "file": "g/images/project/one-line-hacks/mac-1-400.webp", "size": 5884, "type": "image/webp" }, { "file": "g/images/project/one-line-hacks/mac-1-800.png", "size": 93818, "type": "image/png" }, { "file": "g/images/project/one-line-hacks/mac-1-800.webp", "size": 17566, "type": "image/webp" }, { "file": "g/images/project/one-line-hacks/phone-1-1200.png", "size": 596101, "type": "image/png" }, { "file": "g/images/project/one-line-hacks/phone-1-1200.webp", "size": 95680, "type": "image/webp" }, { "file": "g/images/project/one-line-hacks/phone-1-400.png", "size": 119865, "type": "image/png" }, { "file": "g/images/project/one-line-hacks/phone-1-400.webp", "size": 29230, "type": "image/webp" }, { "file": "g/images/project/one-line-hacks/phone-1-800.png", "size": 317704, "type": "image/png" }, { "file": "g/images/project/one-line-hacks/phone-1-800.webp", "size": 64200, "type": "image/webp" }, { "file": "g/images/project/police-killings/header-1200.png", "size": 162659, "type": "image/png" }, { "file": "g/images/project/police-killings/header-1200.webp", "size": 35494, "type": "image/webp" }, { "file": "g/images/project/police-killings/header-400.png", "size": 29021, "type": "image/png" }, { "file": "g/images/project/police-killings/header-400.webp", "size": 5618, "type": "image/webp" }, { "file": "g/images/project/police-killings/header-800.png", "size": 87968, "type": "image/png" }, { "file": "g/images/project/police-killings/header-800.webp", "size": 18942, "type": "image/webp" }, { "file": "g/images/project/police-killings/mac-1-1200.png", "size": 122068, "type": "image/png" }, { "file": "g/images/project/police-killings/mac-1-1200.webp", "size": 18578, "type": "image/webp" }, { "file": "g/images/project/police-killings/mac-1-400.png", "size": 24624, "type": "image/png" }, { "file": "g/images/project/police-killings/mac-1-400.webp", "size": 4004, "type": "image/webp" }, { "file": "g/images/project/police-killings/mac-1-800.png", "size": 67715, "type": "image/png" }, { "file": "g/images/project/police-killings/mac-1-800.webp", "size": 10664, "type": "image/webp" }, { "file": "g/images/project/police-killings/mac-2-1200.png", "size": 164025, "type": "image/png" }, { "file": "g/images/project/police-killings/mac-2-1200.webp", "size": 26084, "type": "image/webp" }, { "file": "g/images/project/police-killings/mac-2-400.png", "size": 29493, "type": "image/png" }, { "file": "g/images/project/police-killings/mac-2-400.webp", "size": 4766, "type": "image/webp" }, { "file": "g/images/project/police-killings/mac-2-800.png", "size": 86076, "type": "image/png" }, { "file": "g/images/project/police-killings/mac-2-800.webp", "size": 13862, "type": "image/webp" }, { "file": "g/images/project/police-killings/phone-1-1200.png", "size": 336074, "type": "image/png" }, { "file": "g/images/project/police-killings/phone-1-1200.webp", "size": 47172, "type": "image/webp" }, { "file": "g/images/project/police-killings/phone-1-400.png", "size": 57992, "type": "image/png" }, { "file": "g/images/project/police-killings/phone-1-400.webp", "size": 11556, "type": "image/webp" }, { "file": "g/images/project/police-killings/phone-1-800.png", "size": 171346, "type": "image/png" }, { "file": "g/images/project/police-killings/phone-1-800.webp", "size": 29588, "type": "image/webp" }, { "file": "g/images/project/police-killings/phone-2-1200.png", "size": 338723, "type": "image/png" }, { "file": "g/images/project/police-killings/phone-2-1200.webp", "size": 48850, "type": "image/webp" }, { "file": "g/images/project/police-killings/phone-2-400.png", "size": 56370, "type": "image/png" }, { "file": "g/images/project/police-killings/phone-2-400.webp", "size": 11368, "type": "image/webp" }, { "file": "g/images/project/police-killings/phone-2-800.png", "size": 171481, "type": "image/png" }, { "file": "g/images/project/police-killings/phone-2-800.webp", "size": 29710, "type": "image/webp" }, { "file": "g/images/project/quarantunes/header-1200.png", "size": 161815, "type": "image/png" }, { "file": "g/images/project/quarantunes/header-1200.webp", "size": 9446, "type": "image/webp" }, { "file": "g/images/project/quarantunes/header-400.png", "size": 20500, "type": "image/png" }, { "file": "g/images/project/quarantunes/header-400.webp", "size": 3042, "type": "image/webp" }, { "file": "g/images/project/quarantunes/header-800.png", "size": 82552, "type": "image/png" }, { "file": "g/images/project/quarantunes/header-800.webp", "size": 6272, "type": "image/webp" }, { "file": "g/images/project/quarantunes/macbook-1200.png", "size": 210362, "type": "image/png" }, { "file": "g/images/project/quarantunes/macbook-1200.webp", "size": 25024, "type": "image/webp" }, { "file": "g/images/project/quarantunes/macbook-400.png", "size": 38314, "type": "image/png" }, { "file": "g/images/project/quarantunes/macbook-400.webp", "size": 5658, "type": "image/webp" }, { "file": "g/images/project/quarantunes/macbook-800.png", "size": 107325, "type": "image/png" }, { "file": "g/images/project/quarantunes/macbook-800.webp", "size": 14412, "type": "image/webp" }, { "file": "g/images/project/quarantunes/side-by-side-1200.png", "size": 375514, "type": "image/png" }, { "file": "g/images/project/quarantunes/side-by-side-1200.webp", "size": 45866, "type": "image/webp" }, { "file": "g/images/project/quarantunes/side-by-side-400.png", "size": 69658, "type": "image/png" }, { "file": "g/images/project/quarantunes/side-by-side-400.webp", "size": 9642, "type": "image/webp" }, { "file": "g/images/project/quarantunes/side-by-side-800.png", "size": 197283, "type": "image/png" }, { "file": "g/images/project/quarantunes/side-by-side-800.webp", "size": 26042, "type": "image/webp" }, { "file": "g/images/project/state-police-spending/header-1200.png", "size": 135264, "type": "image/png" }, { "file": "g/images/project/state-police-spending/header-1200.webp", "size": 44216, "type": "image/webp" }, { "file": "g/images/project/state-police-spending/header-400.png", "size": 28375, "type": "image/png" }, { "file": "g/images/project/state-police-spending/header-400.webp", "size": 8214, "type": "image/webp" }, { "file": "g/images/project/state-police-spending/header-800.png", "size": 80460, "type": "image/png" }, { "file": "g/images/project/state-police-spending/header-800.webp", "size": 25376, "type": "image/webp" }, { "file": "g/images/project/state-police-spending/mac-1200.png", "size": 156427, "type": "image/png" }, { "file": "g/images/project/state-police-spending/mac-1200.webp", "size": 32678, "type": "image/webp" }, { "file": "g/images/project/state-police-spending/mac-400.png", "size": 30019, "type": "image/png" }, { "file": "g/images/project/state-police-spending/mac-400.webp", "size": 5980, "type": "image/webp" }, { "file": "g/images/project/state-police-spending/mac-800.png", "size": 84702, "type": "image/png" }, { "file": "g/images/project/state-police-spending/mac-800.webp", "size": 18e3, "type": "image/webp" }, { "file": "g/images/project/state-police-spending/phone-1200.png", "size": 432908, "type": "image/png" }, { "file": "g/images/project/state-police-spending/phone-1200.webp", "size": 92418, "type": "image/webp" }, { "file": "g/images/project/state-police-spending/phone-400.png", "size": 81919, "type": "image/png" }, { "file": "g/images/project/state-police-spending/phone-400.webp", "size": 23380, "type": "image/webp" }, { "file": "g/images/project/state-police-spending/phone-800.png", "size": 232037, "type": "image/png" }, { "file": "g/images/project/state-police-spending/phone-800.webp", "size": 58732, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/header-1200.png", "size": 278547, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/header-1200.webp", "size": 75976, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/header-400.png", "size": 54293, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/header-400.webp", "size": 13e3, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/header-800.png", "size": 156165, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/header-800.webp", "size": 42142, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/iphone-1-400.png", "size": 137376, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/iphone-1-400.webp", "size": 27768, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/iphone-1-800.png", "size": 432867, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/iphone-1-800.webp", "size": 63302, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/iphone-2-400.png", "size": 116068, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/iphone-2-400.webp", "size": 23716, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/iphone-2-800.png", "size": 362804, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/iphone-2-800.webp", "size": 55420, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/iphone-3-400.png", "size": 171752, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/iphone-3-400.webp", "size": 26424, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/iphone-3-800.png", "size": 509518, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/iphone-3-800.webp", "size": 58088, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/mac-1-1200.png", "size": 250051, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/mac-1-1200.webp", "size": 50024, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/mac-1-400.png", "size": 47957, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/mac-1-400.webp", "size": 8780, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/mac-1-800.png", "size": 132130, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/mac-1-800.webp", "size": 26420, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/mac-2-1200.png", "size": 222268, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/mac-2-1200.webp", "size": 27344, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/mac-2-400.png", "size": 42871, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/mac-2-400.webp", "size": 5920, "type": "image/webp" }, { "file": "g/images/project/tpl-schools-db/mac-2-800.png", "size": 120192, "type": "image/png" }, { "file": "g/images/project/tpl-schools-db/mac-2-800.webp", "size": 15862, "type": "image/webp" }, { "file": "images/.DS_Store", "size": 10244, "type": null }, { "file": "images/icons/shuffle.svg", "size": 1574, "type": "image/svg+xml" }, { "file": "images/jobs/axios.svg", "size": 455, "type": "image/svg+xml" }, { "file": "images/jobs/moksha.svg", "size": 1261, "type": "image/svg+xml" }, { "file": "images/jobs/socom.svg", "size": 77530, "type": "image/svg+xml" }, { "file": "images/jobs/tpl.svg", "size": 709, "type": "image/svg+xml" }, { "file": "images/me/.DS_Store", "size": 6148, "type": null }, { "file": "images/me/1.png", "size": 67675, "type": "image/png" }, { "file": "images/me/2.png", "size": 286158, "type": "image/png" }, { "file": "images/me/3.png", "size": 46710, "type": "image/png" }, { "file": "images/me/4.png", "size": 479542, "type": "image/png" }, { "file": "images/post/.DS_Store", "size": 16388, "type": null }, { "file": "images/post/adding-a-chart-to-your-d3-tooltip/.DS_Store", "size": 6148, "type": null }, { "file": "images/post/adding-a-chart-to-your-d3-tooltip/header.png", "size": 222355, "type": "image/png" }, { "file": "images/post/adding-a-chart-to-your-d3-tooltip/new-tooltip.gif", "size": 1394285, "type": "image/gif" }, { "file": "images/post/adding-a-chart-to-your-d3-tooltip/old-tooltip.gif", "size": 1828083, "type": "image/gif" }, { "file": "images/post/adding-a-chart-to-your-d3-tooltip/west-virginia.jpg", "size": 96852, "type": "image/jpeg" }, { "file": "images/post/animate-hugo-academic/about.png", "size": 171201, "type": "image/png" }, { "file": "images/post/animate-hugo-academic/after-demo-hero-remove.png", "size": 274988, "type": "image/png" }, { "file": "images/post/animate-hugo-academic/before-demo-hero-remove.png", "size": 996449, "type": "image/png" }, { "file": "images/post/animate-hugo-academic/bg-red.png", "size": 247553, "type": "image/png" }, { "file": "images/post/animate-hugo-academic/double-slide.gif", "size": 4049647, "type": "image/gif" }, { "file": "images/post/animate-hugo-academic/final.gif", "size": 4711318, "type": "image/gif" }, { "file": "images/post/animate-hugo-academic/font-red.png", "size": 274418, "type": "image/png" }, { "file": "images/post/animate-hugo-academic/header.jpg", "size": 272081, "type": "image/jpeg" }, { "file": "images/post/animate-hugo-academic/header.png", "size": 502097, "type": "image/png" }, { "file": "images/post/animate-hugo-academic/left-and-right.gif", "size": 7187557, "type": "image/gif" }, { "file": "images/post/animate-hugo-academic/red.gif", "size": 6389199, "type": "image/gif" }, { "file": "images/post/animate-hugo-academic/slide-from-right.gif", "size": 5650648, "type": "image/gif" }, { "file": "images/post/automation-scrollytell/header.png", "size": 347231, "type": "image/png" }, { "file": "images/post/bible-babies/boys.gif", "size": 3320504, "type": "image/gif" }, { "file": "images/post/bible-babies/combined.gif", "size": 2500209, "type": "image/gif" }, { "file": "images/post/bible-babies/girls.gif", "size": 3171023, "type": "image/gif" }, { "file": "images/post/bible-babies/header.png", "size": 207384, "type": "image/png" }, { "file": "images/post/bible-babies/line.png", "size": 88209, "type": "image/png" }, { "file": "images/post/bible-babies/male-female-line.png", "size": 103538, "type": "image/png" }, { "file": "images/post/color-in-data-vis/.DS_Store", "size": 8196, "type": null }, { "file": "images/post/color-in-data-vis/all-color.jpg", "size": 48568, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/all-grey.jpg", "size": 25976, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/bad-and-better.jpg", "size": 41594, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/bad-chart.jpg", "size": 144491, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/bad-color-use-1.jpg", "size": 25638, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/bad-color-use-2.jpg", "size": 462044, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/better-chart1.png", "size": 102932, "type": "image/png" }, { "file": "images/post/color-in-data-vis/betterchart-1.jpg", "size": 102932, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/choropleth-ex.jpg", "size": 116015, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/color-emotion-guide-lol.jpg", "size": 142938, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/color-emphasized.png", "size": 88831, "type": "image/png" }, { "file": "images/post/color-in-data-vis/flipping-points-color-annotate1.jpg", "size": 388831, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/flipping-points-color-annotate2.jpg", "size": 292758, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/flipping-points-color.jpg", "size": 281680, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/header-old.png", "size": 1500611, "type": "image/png" }, { "file": "images/post/color-in-data-vis/header.png", "size": 142938, "type": "image/png" }, { "file": "images/post/color-in-data-vis/map-Texas-rainbow-1.jpg", "size": 125882, "type": "image/jpeg" }, { "file": "images/post/color-in-data-vis/popgrowth-vs-popsize-bw-1.png", "size": 102932, "type": "image/png" }, { "file": "images/post/covid-gun-spikes/featured.png", "size": 708910, "type": "image/png" }, { "file": "images/post/covid-gun-spikes/header.png", "size": 960654, "type": "image/png" }, { "file": "images/post/covid-gun-spikes/table-replacement.png", "size": 37277, "type": "image/png" }, { "file": "images/post/covid-gun-spikes/unnamed-chunk-4-1.png", "size": 157047, "type": "image/png" }, { "file": "images/post/covid-gun-spikes/unnamed-chunk-5-1.png", "size": 55822, "type": "image/png" }, { "file": "images/post/covid-gun-spikes/unnamed-chunk-6-1.png", "size": 124650, "type": "image/png" }, { "file": "images/post/covid-on-campus/featured.png", "size": 144039, "type": "image/png" }, { "file": "images/post/covid-on-campus/geofacet_processed.png", "size": 233674, "type": "image/png" }, { "file": "images/post/covid-on-campus/header.png", "size": 246566, "type": "image/png" }, { "file": "images/post/covid-on-campus/table1.png", "size": 111521, "type": "image/png" }, { "file": "images/post/covid-on-campus/table2.png", "size": 49261, "type": "image/png" }, { "file": "images/post/covid-on-campus/table3.png", "size": 46864, "type": "image/png" }, { "file": "images/post/covid-posts/authorVer2-1.png", "size": 66037, "type": "image/png" }, { "file": "images/post/covid-posts/dataTable-1.png", "size": 123935, "type": "image/png" }, { "file": "images/post/covid-posts/featured.png", "size": 142943, "type": "image/png" }, { "file": "images/post/covid-posts/header.png", "size": 142943, "type": "image/png" }, { "file": "images/post/covid-posts/prolificVer2-1.png", "size": 178507, "type": "image/png" }, { "file": "images/post/covid-posts/topicsVer2-1.png", "size": 142943, "type": "image/png" }, { "file": "images/post/covid-posts/weekly-1.png", "size": 66718, "type": "image/png" }, { "file": "images/post/do-something-else/startup-faang-satisfaction.png", "size": 128566, "type": "image/png" }, { "file": "images/post/dumbbell-plots/age-disrupt.jpg", "size": 127112, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/age-worry.jpg", "size": 133455, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/axios.jpg", "size": 94024, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/featured.jpg", "size": 146966, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/header.png", "size": 211763, "type": "image/png" }, { "file": "images/post/dumbbell-plots/partisan-disrupt.jpg", "size": 139913, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/partisan-worry.jpg", "size": 146966, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/pew.jpg", "size": 83415, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/process-0.jpg", "size": 79993, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/process-1.jpg", "size": 86350, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/process-2.jpg", "size": 93592, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/process-3.jpg", "size": 101971, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/process-4.jpg", "size": 96114, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/process-5.jpg", "size": 160258, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/process-6.jpg", "size": 146966, "type": "image/jpeg" }, { "file": "images/post/dumbbell-plots/process-gif.gif", "size": 670401, "type": "image/gif" }, { "file": "images/post/dumbbell-plots/table.jpg", "size": 27809, "type": "image/jpeg" }, { "file": "images/post/economist-table-replication-using-reactable/featured.png", "size": 107802, "type": "image/png" }, { "file": "images/post/economist-table-replication-using-reactable/header.png", "size": 207227, "type": "image/png" }, { "file": "images/post/flat-data-r/.DS_Store", "size": 6148, "type": null }, { "file": "images/post/flat-data-r/flat-diagram.png", "size": 739814, "type": "image/png" }, { "file": "images/post/flat-data-r/header.png", "size": 1651665, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/featured.png", "size": 60896, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/header.png", "size": 82172, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-10-1.png", "size": 156710, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-11-1.png", "size": 69452, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-12-1.png", "size": 146481, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-13-1.png", "size": 155022, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-14-1.png", "size": 79963, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-15-1.png", "size": 76710, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-16-1.png", "size": 151633, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-17-1.png", "size": 168762, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-18-1.png", "size": 147878, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-3-1.png", "size": 44351, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-5-1.png", "size": 146995, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-6-1.png", "size": 259141, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-7-1.png", "size": 208134, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-8-1.png", "size": 262530, "type": "image/png" }, { "file": "images/post/introducing-tpltheme/unnamed-chunk-9-1.png", "size": 60075, "type": "image/png" }, { "file": "images/post/map-springfield/bw_map_springfield.png", "size": 374640, "type": "image/png" }, { "file": "images/post/map-springfield/gold_map_springfield.png", "size": 673257, "type": "image/png" }, { "file": "images/post/map-springfield/header.png", "size": 220711, "type": "image/png" }, { "file": "images/post/media-mentions/header.png", "size": 311367, "type": "image/png" }, { "file": "images/post/media-mentions/unnamed-chunk-2-1.png", "size": 80891, "type": "image/png" }, { "file": "images/post/media-mentions/unnamed-chunk-3-1.png", "size": 192170, "type": "image/png" }, { "file": "images/post/media-mentions/unnamed-chunk-4-1.png", "size": 137279, "type": "image/png" }, { "file": "images/post/media-mentions/unnamed-chunk-5-1.png", "size": 86116, "type": "image/png" }, { "file": "images/post/media-mentions/unnamed-chunk-6-1.png", "size": 503911, "type": "image/png" }, { "file": "images/post/media-mentions/unnamed-chunk-7-1.png", "size": 349985, "type": "image/png" }, { "file": "images/post/nuxt-blog-starter/blog-card.png", "size": 317721, "type": "image/png" }, { "file": "images/post/nuxt-blog-starter/dark.png", "size": 86381, "type": "image/png" }, { "file": "images/post/nuxt-blog-starter/header.png", "size": 160358, "type": "image/png" }, { "file": "images/post/nuxt-blog-starter/home-card.png", "size": 245943, "type": "image/png" }, { "file": "images/post/nuxt-blog-starter/light.png", "size": 88342, "type": "image/png" }, { "file": "images/post/nuxt-blog-starter/new-site-perf.png", "size": 729480, "type": "image/png" }, { "file": "images/post/nuxt-blog-starter/old-site-perf.png", "size": 891912, "type": "image/png" }, { "file": "images/post/nuxt-blog-starter/transitions.gif", "size": 1269461, "type": "image/gif" }, { "file": "images/post/refugee-trends/.DS_Store", "size": 6148, "type": null }, { "file": "images/post/refugee-trends/featured.png", "size": 96723, "type": "image/png" }, { "file": "images/post/refugee-trends/final.svg", "size": 339820, "type": "image/svg+xml" }, { "file": "images/post/refugee-trends/firsttry.jpg", "size": 249381, "type": "image/jpeg" }, { "file": "images/post/refugee-trends/header.png", "size": 209771, "type": "image/png" }, { "file": "images/post/refugee-trends/macro.jpg", "size": 59219, "type": "image/jpeg" }, { "file": "images/post/refugee-trends/policyviz.jpg", "size": 62077, "type": "image/jpeg" }, { "file": "images/post/refugee-trends/ref.png", "size": 77965, "type": "image/png" }, { "file": "images/post/refugee-trends/secondtry.jpg", "size": 220813, "type": "image/jpeg" }, { "file": "images/post/refugee-trends/wapo.png", "size": 254826, "type": "image/png" }, { "file": "images/post/svelte-and-d3/header-old.png", "size": 1916771, "type": "image/png" }, { "file": "images/post/svelte-and-d3/header.png", "size": 143947, "type": "image/png" }, { "file": "images/post/tidy-tuesday-powerlifting/featured.png", "size": 395928, "type": "image/png" }, { "file": "images/post/tidy-tuesday-powerlifting/header.png", "size": 609028, "type": "image/png" }, { "file": "images/post/tidy-tuesday-powerlifting/table.png", "size": 39430, "type": "image/png" }, { "file": "images/post/tidy-tuesday-powerlifting/unnamed-chunk-10-1.gif", "size": 2045058, "type": "image/gif" }, { "file": "images/post/tidy-tuesday-powerlifting/unnamed-chunk-11-1.gif", "size": 3152748, "type": "image/gif" }, { "file": "images/post/tidy-tuesday-powerlifting/unnamed-chunk-8-1.png", "size": 80022, "type": "image/png" }, { "file": "images/post/tidy-tuesday-powerlifting/unnamed-chunk-9-1.gif", "size": 1471396, "type": "image/gif" }, { "file": "images/post/tidy-tuesday-replication/bloomberg.png", "size": 286679, "type": "image/png" }, { "file": "images/post/tidy-tuesday-replication/featured.png", "size": 220110, "type": "image/png" }, { "file": "images/post/tidy-tuesday-replication/header.png", "size": 391425, "type": "image/png" }, { "file": "images/post/tidy-tuesday-replication/replication.png", "size": 220110, "type": "image/png" }, { "file": "images/project/.DS_Store", "size": 14340, "type": null }, { "file": "images/project/atus/header.png", "size": 196112, "type": "image/png" }, { "file": "images/project/atus/mac-1.png", "size": 324392, "type": "image/png" }, { "file": "images/project/atus/mac-2.png", "size": 358160, "type": "image/png" }, { "file": "images/project/atus/phone-1.png", "size": 566129, "type": "image/png" }, { "file": "images/project/atus/phone-2.png", "size": 650612, "type": "image/png" }, { "file": "images/project/atus/thumbnail.png", "size": 324392, "type": "image/png" }, { "file": "images/project/bob-ross-art-gallery/header.png", "size": 522077, "type": "image/png" }, { "file": "images/project/bob-ross-art-gallery/iphone-1.png", "size": 344053, "type": "image/png" }, { "file": "images/project/bob-ross-art-gallery/iphone-2.png", "size": 351424, "type": "image/png" }, { "file": "images/project/bob-ross-art-gallery/iphone-3.png", "size": 428163, "type": "image/png" }, { "file": "images/project/bob-ross-art-gallery/iphone-4.png", "size": 717046, "type": "image/png" }, { "file": "images/project/bob-ross-art-gallery/mac-1.png", "size": 289518, "type": "image/png" }, { "file": "images/project/bob-ross-art-gallery/mac-2.png", "size": 281759, "type": "image/png" }, { "file": "images/project/bob-ross-art-gallery/mac-3.png", "size": 302161, "type": "image/png" }, { "file": "images/project/bob-ross-art-gallery/mac-4.png", "size": 490020, "type": "image/png" }, { "file": "images/project/bob-ross-art-gallery/mac-5.png", "size": 856991, "type": "image/png" }, { "file": "images/project/bob-ross-art-gallery/thumbnail.png", "size": 856991, "type": "image/png" }, { "file": "images/project/compas/header.png", "size": 142488, "type": "image/png" }, { "file": "images/project/compas/mac-1.png", "size": 472868, "type": "image/png" }, { "file": "images/project/compas/mac-2.png", "size": 280729, "type": "image/png" }, { "file": "images/project/compas/phone-1.png", "size": 920374, "type": "image/png" }, { "file": "images/project/compas/phone-2.png", "size": 426156, "type": "image/png" }, { "file": "images/project/compas/thumbnail.png", "size": 280729, "type": "image/png" }, { "file": "images/project/covid-masking/header.png", "size": 162235, "type": "image/png" }, { "file": "images/project/covid-masking/mac-1.png", "size": 309479, "type": "image/png" }, { "file": "images/project/covid-masking/mac-2.png", "size": 499158, "type": "image/png" }, { "file": "images/project/covid-masking/mac-3.png", "size": 259141, "type": "image/png" }, { "file": "images/project/covid-masking/mac-4.png", "size": 422151, "type": "image/png" }, { "file": "images/project/covid-masking/mac-5.png", "size": 889689, "type": "image/png" }, { "file": "images/project/covid-masking/phone-1.png", "size": 876488, "type": "image/png" }, { "file": "images/project/covid-masking/phone-2.png", "size": 793978, "type": "image/png" }, { "file": "images/project/covid-masking/phone-3.png", "size": 1382827, "type": "image/png" }, { "file": "images/project/covid-masking/thumbnail.png", "size": 889689, "type": "image/png" }, { "file": "images/project/cudi-hums/albums-mac.png", "size": 436737, "type": "image/png" }, { "file": "images/project/cudi-hums/albums-phone.png", "size": 434100, "type": "image/png" }, { "file": "images/project/cudi-hums/header.png", "size": 387992, "type": "image/png" }, { "file": "images/project/cudi-hums/intro-phone.png", "size": 344442, "type": "image/png" }, { "file": "images/project/cudi-hums/lyrics-mac.png", "size": 391896, "type": "image/png" }, { "file": "images/project/cudi-hums/lyrics-phone.png", "size": 391041, "type": "image/png" }, { "file": "images/project/cudi-hums/outro-phone.png", "size": 839368, "type": "image/png" }, { "file": "images/project/cudi-hums/thumbnail.png", "size": 436910, "type": "image/png" }, { "file": "images/project/cudi-hums/tracks-mac.png", "size": 409045, "type": "image/png" }, { "file": "images/project/cudi-hums/tracks-phone.png", "size": 702731, "type": "image/png" }, { "file": "images/project/how-many-people/header.png", "size": 279507, "type": "image/png" }, { "file": "images/project/how-many-people/mac-1.png", "size": 344834, "type": "image/png" }, { "file": "images/project/how-many-people/mac-2.png", "size": 419217, "type": "image/png" }, { "file": "images/project/how-many-people/phone-1.png", "size": 539341, "type": "image/png" }, { "file": "images/project/how-many-people/phone-2.png", "size": 480652, "type": "image/png" }, { "file": "images/project/how-many-people/thumbnail.png", "size": 419044, "type": "image/png" }, { "file": "images/project/map-houston-homicides/header.png", "size": 940867, "type": "image/png" }, { "file": "images/project/map-houston-homicides/mac-1.png", "size": 686069, "type": "image/png" }, { "file": "images/project/map-houston-homicides/mac-2.png", "size": 763418, "type": "image/png" }, { "file": "images/project/map-houston-homicides/mac-3.png", "size": 993711, "type": "image/png" }, { "file": "images/project/map-houston-homicides/mac-4.png", "size": 1095083, "type": "image/png" }, { "file": "images/project/map-houston-homicides/phone-1.png", "size": 1357800, "type": "image/png" }, { "file": "images/project/map-houston-homicides/phone-2.png", "size": 1322563, "type": "image/png" }, { "file": "images/project/map-houston-homicides/phone-3.png", "size": 1366588, "type": "image/png" }, { "file": "images/project/map-houston-homicides/thumbnail.png", "size": 686069, "type": "image/png" }, { "file": "images/project/map-missing-migrants/header.png", "size": 2595176, "type": "image/png" }, { "file": "images/project/map-missing-migrants/mac-1.png", "size": 1686366, "type": "image/png" }, { "file": "images/project/map-missing-migrants/mac-2.png", "size": 2525417, "type": "image/png" }, { "file": "images/project/map-missing-migrants/mac-3.png", "size": 1666740, "type": "image/png" }, { "file": "images/project/map-missing-migrants/mac-4.png", "size": 2408824, "type": "image/png" }, { "file": "images/project/map-missing-migrants/mac-5.png", "size": 2937636, "type": "image/png" }, { "file": "images/project/map-missing-migrants/phone-1.png", "size": 1593964, "type": "image/png" }, { "file": "images/project/map-missing-migrants/phone-2.png", "size": 2671671, "type": "image/png" }, { "file": "images/project/map-missing-migrants/phone-3.png", "size": 4814414, "type": "image/png" }, { "file": "images/project/map-missing-migrants/thumbnail.png", "size": 1686366, "type": "image/png" }, { "file": "images/project/media-mentions/header.png", "size": 118535, "type": "image/png" }, { "file": "images/project/media-mentions/mac.png", "size": 306203, "type": "image/png" }, { "file": "images/project/media-mentions/phone.png", "size": 582627, "type": "image/png" }, { "file": "images/project/media-mentions/thumbnail.png", "size": 306203, "type": "image/png" }, { "file": "images/project/one-line-hacks/.DS_Store", "size": 6148, "type": null }, { "file": "images/project/one-line-hacks/header-old.png", "size": 490537, "type": "image/png" }, { "file": "images/project/one-line-hacks/header.png", "size": 117340, "type": "image/png" }, { "file": "images/project/one-line-hacks/mac-1.png", "size": 383847, "type": "image/png" }, { "file": "images/project/one-line-hacks/phone-1.png", "size": 769617, "type": "image/png" }, { "file": "images/project/one-line-hacks/thumbnail.png", "size": 383847, "type": "image/png" }, { "file": "images/project/police-killings/header.png", "size": 250166, "type": "image/png" }, { "file": "images/project/police-killings/mac-1.png", "size": 279769, "type": "image/png" }, { "file": "images/project/police-killings/mac-2.png", "size": 391676, "type": "image/png" }, { "file": "images/project/police-killings/phone-1.png", "size": 381385, "type": "image/png" }, { "file": "images/project/police-killings/phone-2.png", "size": 391569, "type": "image/png" }, { "file": "images/project/police-killings/thumbnail.png", "size": 391676, "type": "image/png" }, { "file": "images/project/quarantunes/header.png", "size": 214359, "type": "image/png" }, { "file": "images/project/quarantunes/macbook.png", "size": 454223, "type": "image/png" }, { "file": "images/project/quarantunes/phone.png", "size": 779131, "type": "image/png" }, { "file": "images/project/quarantunes/side-by-side.png", "size": 667703, "type": "image/png" }, { "file": "images/project/quarantunes/tablet.png", "size": 404682, "type": "image/png" }, { "file": "images/project/quarantunes/thumbnail.png", "size": 454223, "type": "image/png" }, { "file": "images/project/state-police-spending/header.png", "size": 229693, "type": "image/png" }, { "file": "images/project/state-police-spending/mac.png", "size": 365809, "type": "image/png" }, { "file": "images/project/state-police-spending/phone.png", "size": 549873, "type": "image/png" }, { "file": "images/project/state-police-spending/thumbnail.png", "size": 365809, "type": "image/png" }, { "file": "images/project/tpl-schools-db/.DS_Store", "size": 6148, "type": null }, { "file": "images/project/tpl-schools-db/header.png", "size": 437453, "type": "image/png" }, { "file": "images/project/tpl-schools-db/iphone-1.png", "size": 603447, "type": "image/png" }, { "file": "images/project/tpl-schools-db/iphone-2.png", "size": 505851, "type": "image/png" }, { "file": "images/project/tpl-schools-db/iphone-3.png", "size": 596795, "type": "image/png" }, { "file": "images/project/tpl-schools-db/mac-1.png", "size": 562424, "type": "image/png" }, { "file": "images/project/tpl-schools-db/mac-2.png", "size": 470837, "type": "image/png" }, { "file": "images/project/tpl-schools-db/thumbnail.png", "size": 562424, "type": "image/png" }, { "file": "plugins/MorphSVGPlugin.min.js", "size": 16715, "type": "application/javascript" }, { "file": "videos/.DS_Store", "size": 6148, "type": null }, { "file": "videos/0.mov", "size": 2530263, "type": "video/quicktime" }, { "file": "videos/0.webm", "size": 2255719, "type": "video/webm" }, { "file": "videos/1.mov", "size": 1620978, "type": "video/quicktime" }, { "file": "videos/1.webm", "size": 1775726, "type": "video/webm" }, { "file": "videos/2.mov", "size": 2352553, "type": "video/quicktime" }, { "file": "videos/2.webm", "size": 1768475, "type": "video/webm" }, { "file": "videos/3.mov", "size": 1687563, "type": "video/quicktime" }, { "file": "videos/3.webm", "size": 1814469, "type": "video/webm" }, { "file": "videos/raw/.DS_Store", "size": 6148, "type": null }, { "file": "videos/raw/0-prores.mov", "size": 104966007, "type": "video/quicktime" }, { "file": "videos/raw/0.mov", "size": 2530263, "type": "video/quicktime" }, { "file": "videos/raw/0.webm", "size": 2255719, "type": "video/webm" }, { "file": "videos/raw/1-prores.mov", "size": 51115571, "type": "video/quicktime" }, { "file": "videos/raw/1.mov", "size": 1620978, "type": "video/quicktime" }, { "file": "videos/raw/1.webm", "size": 1775726, "type": "video/webm" }, { "file": "videos/raw/2-prores.mov", "size": 106541251, "type": "video/quicktime" }, { "file": "videos/raw/2.mov", "size": 2352553, "type": "video/quicktime" }, { "file": "videos/raw/2.webm", "size": 1768475, "type": "video/webm" }, { "file": "videos/raw/3-prores.mov", "size": 52868467, "type": "video/quicktime" }, { "file": "videos/raw/3.mov", "size": 1687563, "type": "video/quicktime" }, { "file": "videos/raw/3.webm", "size": 1814469, "type": "video/webm" }, { "file": "workers/bundler.js", "size": 468912, "type": "application/javascript" }, { "file": "workers/compiler.js", "size": 605, "type": "application/javascript" }],
  layout: "src/routes/__layout.svelte",
  error: "src/routes/__error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/experience\.json$/,
      params: empty,
      load: () => import("./experience.json-7196bb2a.js")
    },
    {
      type: "endpoint",
      pattern: /^\/projects\.json$/,
      params: empty,
      load: () => import("./projects.json-cc331b99.js")
    },
    {
      type: "endpoint",
      pattern: /^\/awards\.json$/,
      params: empty,
      load: () => import("./awards.json-fe978ee8.js")
    },
    {
      type: "page",
      pattern: /^\/experience\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/experience/index.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/experience\/layout\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/experience/layout.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/experience\/moksha\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/experience/moksha.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/experience\/axios\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/experience/axios.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/experience\/socom\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/experience/socom.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/experience\/tpl\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/experience/tpl.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/posts\.json$/,
      params: empty,
      load: () => import("./posts.json-39b54643.js")
    },
    {
      type: "page",
      pattern: /^\/project\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/index.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/map-houston-homicides\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/map-houston-homicides.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/state-police-spending\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/state-police-spending.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/bob-ross-art-gallery\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/bob-ross-art-gallery.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/map-missing-migrants\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/map-missing-migrants.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/how-many-people\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/how-many-people.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/police-killings\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/police-killings.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/media-mentions\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/media-mentions.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/one-line-hacks\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/one-line-hacks.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/tpl-schools-db\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/tpl-schools-db.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/covid-masking\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/covid-masking.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/quarantunes\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/quarantunes.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/cudi-hums\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/cudi-hums.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/compas\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/compas.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/layout\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/layout.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/project\/atus\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/project/atus.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/about/index.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/index.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/rstudio-table-contest-2021\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/rstudio-table-contest-2021.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/d2k-showcase-2020\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/d2k-showcase-2020.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/northeastern-2020\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/northeastern-2020.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/pudding-cup-2020\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/pudding-cup-2020.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/nationals-2017\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/nationals-2017.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/datathon-2020\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/datathon-2020.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/hudspeth-2020\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/hudspeth-2020.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/malofiej-2020\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/malofiej-2020.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/malofiej-2021\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/malofiej-2021.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/bipp-2018\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/bipp-2018.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/chrp-2020\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/chrp-2020.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/hpc-2018\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/hpc-2018.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/hpc-2019\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/hpc-2019.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/hpc-2020\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/hpc-2020.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/snd-2021\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/snd-2021.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/award\/layout\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/award/layout.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/index.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/economist-table-replication-using-reactable\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/economist-table-replication-using-reactable.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/adding-a-chart-to-your-d3-tooltip\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/adding-a-chart-to-your-d3-tooltip.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/tidy-tuesday-powerlifting\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/tidy-tuesday-powerlifting.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/tidy-tuesday-replication\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/tidy-tuesday-replication.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/automation-scrollytell\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/automation-scrollytell.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/animate-hugo-academic\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/animate-hugo-academic.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/introducing-tpltheme\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/introducing-tpltheme.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/color-in-data-vis\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/color-in-data-vis.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/do-something-else\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/do-something-else.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/nuxt-blog-starter\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/nuxt-blog-starter.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/covid-gun-spikes\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/covid-gun-spikes.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/covid-on-campus\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/covid-on-campus.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/map-springfield\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/map-springfield.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/dumbbell-plots\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/dumbbell-plots.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/refugee-trends\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/refugee-trends.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/svelte-scatter\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/svelte-scatter.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/svelte-and-d3\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/svelte-and-d3.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/covid-posts\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/covid-posts.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/flat-data-r\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/flat-data-r.md"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/post\/layout\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/post/layout.svelte"],
      b: ["src/routes/__error.svelte"]
    }
  ]
};
const get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request)),
  handleError: hooks.handleError || (({ error: error2 }) => console.error(error2.stack)),
  externalFetch: hooks.externalFetch || fetch
});
const module_lookup = {
  "src/routes/__layout.svelte": () => import("./__layout-8978d172.js"),
  "src/routes/__error.svelte": () => import("./__error-df4d48fd.js"),
  "src/routes/index.svelte": () => import("./index-c5cfc7d0.js"),
  "src/routes/experience/index.svelte": () => import("./index-644a006e.js"),
  "src/routes/experience/layout.svelte": () => import("./layout-23bca642.js"),
  "src/routes/experience/moksha.md": () => import("./moksha-b50b4ef6.js"),
  "src/routes/experience/axios.md": () => import("./axios-c20de1de.js"),
  "src/routes/experience/socom.md": () => import("./socom-51434f5e.js"),
  "src/routes/experience/tpl.md": () => import("./tpl-f69a4c41.js"),
  "src/routes/project/index.svelte": () => import("./index-b9501d5e.js"),
  "src/routes/project/map-houston-homicides.md": () => import("./map-houston-homicides-5a11c244.js"),
  "src/routes/project/state-police-spending.md": () => import("./state-police-spending-9c4d2385.js"),
  "src/routes/project/bob-ross-art-gallery.md": () => import("./bob-ross-art-gallery-3d071e51.js"),
  "src/routes/project/map-missing-migrants.md": () => import("./map-missing-migrants-727a7a7e.js"),
  "src/routes/project/how-many-people.md": () => import("./how-many-people-51f373a8.js"),
  "src/routes/project/police-killings.md": () => import("./police-killings-b427c55b.js"),
  "src/routes/project/media-mentions.md": () => import("./media-mentions-fc9ac093.js"),
  "src/routes/project/one-line-hacks.md": () => import("./one-line-hacks-ea791512.js"),
  "src/routes/project/tpl-schools-db.md": () => import("./tpl-schools-db-96be0c8a.js"),
  "src/routes/project/covid-masking.md": () => import("./covid-masking-5fbb9653.js"),
  "src/routes/project/quarantunes.md": () => import("./quarantunes-86c2221c.js"),
  "src/routes/project/cudi-hums.md": () => import("./cudi-hums-10522966.js"),
  "src/routes/project/compas.md": () => import("./compas-7c02b1aa.js"),
  "src/routes/project/layout.svelte": () => import("./layout-43f95667.js"),
  "src/routes/project/atus.md": () => import("./atus-6e14919e.js"),
  "src/routes/about/index.svelte": () => import("./index-4c411e7f.js"),
  "src/routes/award/index.svelte": () => import("./index-4feb1708.js"),
  "src/routes/award/rstudio-table-contest-2021.md": () => import("./rstudio-table-contest-2021-b189d2e7.js"),
  "src/routes/award/d2k-showcase-2020.md": () => import("./d2k-showcase-2020-c7cd4940.js"),
  "src/routes/award/northeastern-2020.md": () => import("./northeastern-2020-9e894c5e.js"),
  "src/routes/award/pudding-cup-2020.md": () => import("./pudding-cup-2020-8061e296.js"),
  "src/routes/award/nationals-2017.md": () => import("./nationals-2017-1d332e93.js"),
  "src/routes/award/datathon-2020.md": () => import("./datathon-2020-ca4a3078.js"),
  "src/routes/award/hudspeth-2020.md": () => import("./hudspeth-2020-798e5521.js"),
  "src/routes/award/malofiej-2020.md": () => import("./malofiej-2020-44960526.js"),
  "src/routes/award/malofiej-2021.md": () => import("./malofiej-2021-0385a896.js"),
  "src/routes/award/bipp-2018.md": () => import("./bipp-2018-8d8285c0.js"),
  "src/routes/award/chrp-2020.md": () => import("./chrp-2020-e03eac45.js"),
  "src/routes/award/hpc-2018.md": () => import("./hpc-2018-a5d5e7c4.js"),
  "src/routes/award/hpc-2019.md": () => import("./hpc-2019-44e35746.js"),
  "src/routes/award/hpc-2020.md": () => import("./hpc-2020-60da278c.js"),
  "src/routes/award/snd-2021.md": () => import("./snd-2021-8ef66922.js"),
  "src/routes/award/layout.svelte": () => import("./layout-cacdbe7f.js"),
  "src/routes/post/index.svelte": () => import("./index-eccd94df.js"),
  "src/routes/post/economist-table-replication-using-reactable.md": () => import("./economist-table-replication-using-reactable-07e955fd.js"),
  "src/routes/post/adding-a-chart-to-your-d3-tooltip.md": () => import("./adding-a-chart-to-your-d3-tooltip-421b1867.js"),
  "src/routes/post/tidy-tuesday-powerlifting.md": () => import("./tidy-tuesday-powerlifting-aa4c60a2.js"),
  "src/routes/post/tidy-tuesday-replication.md": () => import("./tidy-tuesday-replication-0d07698e.js"),
  "src/routes/post/automation-scrollytell.md": () => import("./automation-scrollytell-402fa905.js"),
  "src/routes/post/animate-hugo-academic.md": () => import("./animate-hugo-academic-cab8584c.js"),
  "src/routes/post/introducing-tpltheme.md": () => import("./introducing-tpltheme-6323b00e.js"),
  "src/routes/post/color-in-data-vis.md": () => import("./color-in-data-vis-5be9348e.js"),
  "src/routes/post/do-something-else.md": () => import("./do-something-else-aeb891b7.js"),
  "src/routes/post/nuxt-blog-starter.md": () => import("./nuxt-blog-starter-6076f0c0.js"),
  "src/routes/post/covid-gun-spikes.md": () => import("./covid-gun-spikes-4a1d9d63.js"),
  "src/routes/post/covid-on-campus.md": () => import("./covid-on-campus-8ac2320d.js"),
  "src/routes/post/map-springfield.md": () => import("./map-springfield-721adfad.js"),
  "src/routes/post/dumbbell-plots.md": () => import("./dumbbell-plots-a64f02ae.js"),
  "src/routes/post/refugee-trends.md": () => import("./refugee-trends-52054500.js"),
  "src/routes/post/svelte-scatter.md": () => import("./svelte-scatter-4d8831ed.js"),
  "src/routes/post/svelte-and-d3.md": () => import("./svelte-and-d3-17f24861.js"),
  "src/routes/post/covid-posts.md": () => import("./covid-posts-f977e8f1.js"),
  "src/routes/post/flat-data-r.md": () => import("./flat-data-r-82582d59.js"),
  "src/routes/post/layout.svelte": () => import("./layout-ad6722d5.js")
};
const metadata_lookup = { "src/routes/__layout.svelte": { "entry": "pages/__layout.svelte-6473699b.js", "css": ["assets/pages/__layout.svelte-431b68d6.css"], "js": ["pages/__layout.svelte-6473699b.js", "chunks/vendor-dfb9df3e.js", "chunks/global-164a8ca5.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/__error.svelte": { "entry": "pages/__error.svelte-0b036aa0.js", "css": ["assets/pages/__error.svelte-79081d85.css"], "js": ["pages/__error.svelte-0b036aa0.js", "chunks/vendor-dfb9df3e.js"], "styles": [] }, "src/routes/index.svelte": { "entry": "pages/index.svelte-1992868a.js", "css": ["assets/pages/index.svelte-d10f607e.css", "assets/TransitionInView-36466010.css", "assets/Star-4c3ba909.css", "assets/Award-3545467f.css"], "js": ["pages/index.svelte-1992868a.js", "chunks/vendor-dfb9df3e.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/TransitionInView-b5bbebe8.js", "chunks/Star-6bfb9ffc.js", "chunks/Award-eea2e85e.js"], "styles": [] }, "src/routes/experience/index.svelte": { "entry": "pages/experience/index.svelte-c172f2a0.js", "css": ["assets/pages/experience/index.svelte-4f98499e.css", "assets/BackTo-02f76bde.css", "assets/TransitionInView-36466010.css"], "js": ["pages/experience/index.svelte-c172f2a0.js", "chunks/vendor-dfb9df3e.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/TransitionInView-b5bbebe8.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/experience/layout.svelte": { "entry": "pages/experience/layout.svelte-30eb53f5.js", "css": ["assets/pages/experience/layout.svelte-35e46340.css", "assets/BackTo-02f76bde.css"], "js": ["pages/experience/layout.svelte-30eb53f5.js", "chunks/vendor-dfb9df3e.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/experience/moksha.md": { "entry": "pages/experience/moksha.md-73ac5ded.js", "css": ["assets/pages/experience/layout.svelte-35e46340.css", "assets/BackTo-02f76bde.css"], "js": ["pages/experience/moksha.md-73ac5ded.js", "chunks/vendor-dfb9df3e.js", "pages/experience/layout.svelte-30eb53f5.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/experience/axios.md": { "entry": "pages/experience/axios.md-8c33cdca.js", "css": ["assets/pages/experience/layout.svelte-35e46340.css", "assets/BackTo-02f76bde.css"], "js": ["pages/experience/axios.md-8c33cdca.js", "chunks/vendor-dfb9df3e.js", "pages/experience/layout.svelte-30eb53f5.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/experience/socom.md": { "entry": "pages/experience/socom.md-f05e99c6.js", "css": ["assets/pages/experience/layout.svelte-35e46340.css", "assets/BackTo-02f76bde.css"], "js": ["pages/experience/socom.md-f05e99c6.js", "chunks/vendor-dfb9df3e.js", "pages/experience/layout.svelte-30eb53f5.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/experience/tpl.md": { "entry": "pages/experience/tpl.md-1b15d019.js", "css": ["assets/pages/experience/layout.svelte-35e46340.css", "assets/BackTo-02f76bde.css"], "js": ["pages/experience/tpl.md-1b15d019.js", "chunks/vendor-dfb9df3e.js", "pages/experience/layout.svelte-30eb53f5.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/project/index.svelte": { "entry": "pages/project/index.svelte-b48403fa.js", "css": ["assets/pages/project/index.svelte-11ccdf9b.css", "assets/BackTo-02f76bde.css", "assets/TransitionInView-36466010.css"], "js": ["pages/project/index.svelte-b48403fa.js", "chunks/vendor-dfb9df3e.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/TransitionInView-b5bbebe8.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/project/map-houston-homicides.md": { "entry": "pages/project/map-houston-homicides.md-96cb682a.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/map-houston-homicides.md-96cb682a.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/state-police-spending.md": { "entry": "pages/project/state-police-spending.md-c7fa242d.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/state-police-spending.md-c7fa242d.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/bob-ross-art-gallery.md": { "entry": "pages/project/bob-ross-art-gallery.md-1f643dcb.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/bob-ross-art-gallery.md-1f643dcb.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/map-missing-migrants.md": { "entry": "pages/project/map-missing-migrants.md-5796f0d5.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/map-missing-migrants.md-5796f0d5.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/how-many-people.md": { "entry": "pages/project/how-many-people.md-295c2b83.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/how-many-people.md-295c2b83.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/police-killings.md": { "entry": "pages/project/police-killings.md-f04b883b.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/police-killings.md-f04b883b.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/media-mentions.md": { "entry": "pages/project/media-mentions.md-8df97392.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/media-mentions.md-8df97392.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/one-line-hacks.md": { "entry": "pages/project/one-line-hacks.md-44577a09.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/one-line-hacks.md-44577a09.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/tpl-schools-db.md": { "entry": "pages/project/tpl-schools-db.md-39d097b8.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/tpl-schools-db.md-39d097b8.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/covid-masking.md": { "entry": "pages/project/covid-masking.md-270fe9bd.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/covid-masking.md-270fe9bd.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/quarantunes.md": { "entry": "pages/project/quarantunes.md-08f873c5.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/quarantunes.md-08f873c5.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/cudi-hums.md": { "entry": "pages/project/cudi-hums.md-f192b5b9.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/cudi-hums.md-f192b5b9.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/compas.md": { "entry": "pages/project/compas.md-e6dbc74d.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/compas.md-e6dbc74d.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/project/layout.svelte": { "entry": "pages/project/layout.svelte-0fd35314.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/layout.svelte-0fd35314.js", "chunks/vendor-dfb9df3e.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/project/atus.md": { "entry": "pages/project/atus.md-d2609d04.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/project/atus.md-d2609d04.js", "chunks/vendor-dfb9df3e.js", "pages/project/layout.svelte-0fd35314.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/about/index.svelte": { "entry": "pages/about/index.svelte-0307c3c8.js", "css": ["assets/pages/about/index.svelte-e794dbec.css", "assets/BackTo-02f76bde.css"], "js": ["pages/about/index.svelte-0307c3c8.js", "chunks/vendor-dfb9df3e.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js"], "styles": [] }, "src/routes/award/index.svelte": { "entry": "pages/award/index.svelte-f09329d5.js", "css": ["assets/pages/award/index.svelte-84333ddc.css", "assets/Award-3545467f.css", "assets/TransitionInView-36466010.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/index.svelte-f09329d5.js", "chunks/vendor-dfb9df3e.js", "chunks/Award-eea2e85e.js", "chunks/TransitionInView-b5bbebe8.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/rstudio-table-contest-2021.md": { "entry": "pages/award/rstudio-table-contest-2021.md-84005dbd.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/rstudio-table-contest-2021.md-84005dbd.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/d2k-showcase-2020.md": { "entry": "pages/award/d2k-showcase-2020.md-34462170.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/d2k-showcase-2020.md-34462170.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/northeastern-2020.md": { "entry": "pages/award/northeastern-2020.md-ebc3ce19.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/northeastern-2020.md-ebc3ce19.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/pudding-cup-2020.md": { "entry": "pages/award/pudding-cup-2020.md-404cdb9b.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/pudding-cup-2020.md-404cdb9b.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/nationals-2017.md": { "entry": "pages/award/nationals-2017.md-b0a17a33.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/nationals-2017.md-b0a17a33.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/datathon-2020.md": { "entry": "pages/award/datathon-2020.md-47ec0d40.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/datathon-2020.md-47ec0d40.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/hudspeth-2020.md": { "entry": "pages/award/hudspeth-2020.md-748c5866.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/hudspeth-2020.md-748c5866.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/malofiej-2020.md": { "entry": "pages/award/malofiej-2020.md-4e6ac535.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/malofiej-2020.md-4e6ac535.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/malofiej-2021.md": { "entry": "pages/award/malofiej-2021.md-b88e1ce1.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/malofiej-2021.md-b88e1ce1.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/bipp-2018.md": { "entry": "pages/award/bipp-2018.md-5eefde65.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/bipp-2018.md-5eefde65.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/chrp-2020.md": { "entry": "pages/award/chrp-2020.md-ad24c52d.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/chrp-2020.md-ad24c52d.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/hpc-2018.md": { "entry": "pages/award/hpc-2018.md-4a9ffdd1.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/hpc-2018.md-4a9ffdd1.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/hpc-2019.md": { "entry": "pages/award/hpc-2019.md-a20b96a4.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/hpc-2019.md-a20b96a4.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/hpc-2020.md": { "entry": "pages/award/hpc-2020.md-da7b5518.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/hpc-2020.md-da7b5518.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/snd-2021.md": { "entry": "pages/award/snd-2021.md-bdec5480.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/snd-2021.md-bdec5480.js", "chunks/vendor-dfb9df3e.js", "pages/award/layout.svelte-633b925c.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/award/layout.svelte": { "entry": "pages/award/layout.svelte-633b925c.js", "css": ["assets/CornerTitle-85b81caa.css", "assets/BackTo-02f76bde.css"], "js": ["pages/award/layout.svelte-633b925c.js", "chunks/vendor-dfb9df3e.js", "chunks/CornerTitle-3a53cda1.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/post/index.svelte": { "entry": "pages/post/index.svelte-94cafe6a.js", "css": ["assets/pages/post/index.svelte-690c2c55.css", "assets/Star-4c3ba909.css", "assets/TransitionInView-36466010.css", "assets/BackTo-02f76bde.css"], "js": ["pages/post/index.svelte-94cafe6a.js", "chunks/vendor-dfb9df3e.js", "chunks/utils-419e8671.js", "chunks/Star-6bfb9ffc.js", "chunks/global-164a8ca5.js", "chunks/TransitionInView-b5bbebe8.js", "chunks/BackTo-f09ad798.js", "chunks/store-b0ba4c19.js"], "styles": [] }, "src/routes/post/economist-table-replication-using-reactable.md": { "entry": "pages/post/economist-table-replication-using-reactable.md-4a1e9718.js", "css": ["assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css"], "js": ["pages/post/economist-table-replication-using-reactable.md-4a1e9718.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/post/adding-a-chart-to-your-d3-tooltip.md": { "entry": "pages/post/adding-a-chart-to-your-d3-tooltip.md-470b475c.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css", "assets/Code-304e9aa7.css", "assets/HighlightFromProp-c6af3753.css"], "js": ["pages/post/adding-a-chart-to-your-d3-tooltip.md-470b475c.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js", "chunks/Code-46ee5f1b.js", "chunks/HighlightFromProp-a3212567.js", "chunks/Info-a85e8c05.js"], "styles": [] }, "src/routes/post/tidy-tuesday-powerlifting.md": { "entry": "pages/post/tidy-tuesday-powerlifting.md-b71c5801.js", "css": ["assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css"], "js": ["pages/post/tidy-tuesday-powerlifting.md-b71c5801.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/post/tidy-tuesday-replication.md": { "entry": "pages/post/tidy-tuesday-replication.md-18654a80.js", "css": ["assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css"], "js": ["pages/post/tidy-tuesday-replication.md-18654a80.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/post/automation-scrollytell.md": { "entry": "pages/post/automation-scrollytell.md-63ad1e56.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css", "assets/Code-304e9aa7.css", "assets/HighlightFromProp-c6af3753.css"], "js": ["pages/post/automation-scrollytell.md-63ad1e56.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Code-46ee5f1b.js", "chunks/HighlightFromProp-a3212567.js"], "styles": [] }, "src/routes/post/animate-hugo-academic.md": { "entry": "pages/post/animate-hugo-academic.md-e41f6722.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css", "assets/Code-304e9aa7.css"], "js": ["pages/post/animate-hugo-academic.md-e41f6722.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js", "chunks/Code-46ee5f1b.js", "chunks/Info-a85e8c05.js"], "styles": [] }, "src/routes/post/introducing-tpltheme.md": { "entry": "pages/post/introducing-tpltheme.md-40e694f6.js", "css": ["assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css"], "js": ["pages/post/introducing-tpltheme.md-40e694f6.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/post/color-in-data-vis.md": { "entry": "pages/post/color-in-data-vis.md-c9f4425a.js", "css": ["assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css"], "js": ["pages/post/color-in-data-vis.md-c9f4425a.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/post/do-something-else.md": { "entry": "pages/post/do-something-else.md-40610d93.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css"], "js": ["pages/post/do-something-else.md-40610d93.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js", "chunks/Info-a85e8c05.js"], "styles": [] }, "src/routes/post/nuxt-blog-starter.md": { "entry": "pages/post/nuxt-blog-starter.md-adf4f231.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css", "assets/Code-304e9aa7.css"], "js": ["pages/post/nuxt-blog-starter.md-adf4f231.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js", "chunks/Info-a85e8c05.js", "chunks/Code-46ee5f1b.js"], "styles": [] }, "src/routes/post/covid-gun-spikes.md": { "entry": "pages/post/covid-gun-spikes.md-1f6ca05c.js", "css": ["assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css", "assets/TableHandler-cb54b39c.css", "assets/Code-304e9aa7.css"], "js": ["pages/post/covid-gun-spikes.md-1f6ca05c.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js", "chunks/TableHandler-d5a8eb42.js", "chunks/Code-46ee5f1b.js"], "styles": [] }, "src/routes/post/covid-on-campus.md": { "entry": "pages/post/covid-on-campus.md-9d8c9ebf.js", "css": ["assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css", "assets/TableHandler-cb54b39c.css"], "js": ["pages/post/covid-on-campus.md-9d8c9ebf.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js", "chunks/TableHandler-d5a8eb42.js"], "styles": [] }, "src/routes/post/map-springfield.md": { "entry": "pages/post/map-springfield.md-2235a07d.js", "css": ["assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css"], "js": ["pages/post/map-springfield.md-2235a07d.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/post/dumbbell-plots.md": { "entry": "pages/post/dumbbell-plots.md-4836f1bc.js", "css": ["assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css"], "js": ["pages/post/dumbbell-plots.md-4836f1bc.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/post/refugee-trends.md": { "entry": "pages/post/refugee-trends.md-588d138f.js", "css": ["assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css"], "js": ["pages/post/refugee-trends.md-588d138f.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/post/svelte-scatter.md": { "entry": "pages/post/svelte-scatter.md-65230b8d.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css"], "js": ["pages/post/svelte-scatter.md-65230b8d.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Info-a85e8c05.js"], "styles": [] }, "src/routes/post/svelte-and-d3.md": { "entry": "pages/post/svelte-and-d3.md-323d43d5.js", "css": ["assets/pages/post/svelte-and-d3.md-829f18dc.css", "assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css", "assets/Code-304e9aa7.css"], "js": ["pages/post/svelte-and-d3.md-323d43d5.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Code-46ee5f1b.js", "chunks/Info-a85e8c05.js"], "styles": [] }, "src/routes/post/covid-posts.md": { "entry": "pages/post/covid-posts.md-c235751c.js", "css": ["assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css"], "js": ["pages/post/covid-posts.md-c235751c.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Image-4d50732f.js"], "styles": [] }, "src/routes/post/flat-data-r.md": { "entry": "pages/post/flat-data-r.md-aa74f121.js", "css": ["assets/Image.svelte_svelte&type=style&lang-a3a01521.css", "assets/Info.svelte_svelte&type=style&lang-4136c559.css", "assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css", "assets/Code-304e9aa7.css"], "js": ["pages/post/flat-data-r.md-aa74f121.js", "chunks/vendor-dfb9df3e.js", "pages/post/layout.svelte-b65b887a.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js", "chunks/Code-46ee5f1b.js", "chunks/Image-4d50732f.js", "chunks/Info-a85e8c05.js"], "styles": [] }, "src/routes/post/layout.svelte": { "entry": "pages/post/layout.svelte-b65b887a.js", "css": ["assets/pages/post/layout.svelte-745e8606.css", "assets/BackTo-02f76bde.css", "assets/CornerTitle-85b81caa.css"], "js": ["pages/post/layout.svelte-b65b887a.js", "chunks/vendor-dfb9df3e.js", "chunks/BackTo-f09ad798.js", "chunks/global-164a8ca5.js", "chunks/utils-419e8671.js", "chunks/CornerTitle-3a53cda1.js", "chunks/store-b0ba4c19.js"], "styles": [] } };
async function load_component(file) {
  const { entry, css: css2, js, styles } = metadata_lookup[file];
  return {
    module: await module_lookup[file](),
    entry: assets + "/_app/" + entry,
    css: css2.map((dep) => assets + "/_app/" + dep),
    js: js.map((dep) => assets + "/_app/" + dep),
    styles
  };
}
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({ ...request, host }, options, { prerender });
}
export { add_attribute as a, assign as b, create_ssr_component as c, noop as d, escape as e, safe_not_equal as f, getContext as g, each as h, identity as i, createEventDispatcher as j, null_to_empty as k, loop as l, set_store_value as m, now as n, compute_rest_props as o, spread as p, escape_attribute_value as q, escape_object as r, subscribe as s, init as t, render as u, validate_component as v };
