export async function GET() {
    const imports = import.meta.glob("../award/**/*.md");
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

    const awards = await Promise.all(body);

    return new Response(
        JSON.stringify(awards)
    )
}