export async function get() {
    const imports = import.meta.glob("./post/*.{md,svx}");
    let body = [];

    for (const path in imports) {
        body.push(
            imports[path]().then(({ metadata, slug }) => {
                return {
                    metadata,
                    slug,
                    path,
                };
            })
        );
    }

    const posts = await Promise.all(body);

    return {
        body: JSON.stringify(posts)
    }
}