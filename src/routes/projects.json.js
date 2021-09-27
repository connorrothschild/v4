export async function get() {
    const imports = import.meta.glob("./projects/*.{md,svx}");
    let body = [];

    for (const path in imports) {
        body.push(
            imports[path]().then(({ metadata }) => {
                return {
                    metadata,
                    path,
                };
            })
        );
    }

    const projects = await Promise.all(body);
    
    return {
        body: JSON.stringify(projects)
    }
}