export function dateFormat(date) {
    const parsed = new Date(date);
    const month = parsed.toLocaleString("default", { month: "long" });
    const year = parsed.getUTCFullYear();

    return `${month} ${year}`;
};

export function sleep (milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};