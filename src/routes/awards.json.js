export async function get() {
    const imports = import.meta.glob("./award/*.md");
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

    return {
        body: JSON.stringify(awards)
    }
}