export async function GET() {
    const imports = import.meta.glob("../post/**/*.md");
    let body = [];

    for (const path in imports) {
        body.push(
            imports[path]().then(({ metadata }) => {
                return {
                    metadata: metadata,
                    path: path,
                };
            })
        );
    }

    const posts = await Promise.all(body);

    return new Response(
        JSON.stringify(posts)
    )
}