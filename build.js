const esbuild = require("esbuild");

(async function() {
    const ui = await esbuild.context({
        // Bundle
        entryPoints: ["frontend/app.js"],
        outfile: "build/app.js",
        bundle: true,
        minify: true,
        sourcemap: true,
        external: ["assets/*"],

        // Preact
        jsxFactory: "h",
        jsxFragment: "Fragment",
        jsxImportSource: "preact",
        jsx: "automatic",
        loader: {
            ".js": "jsx",
        },
    });
    await ui.watch();
    const { host, port } = await ui.serve({ servedir: "build" });

    console.log(`Running at http://${host}:${port}`);
})();