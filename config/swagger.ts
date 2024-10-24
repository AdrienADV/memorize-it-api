// for AdonisJS v6
import path from "node:path";
import url from "node:url";
// ---

export default {
    path: path.dirname(url.fileURLToPath(import.meta.url)) + "/../", // for AdonisJS v6
    title: "Memorize-it",
    version: "1.0.0",
    description: "",
    tagIndex: 2,
    ignore: ["/swagger", "/docs"],
    info: {
        title: "Memorize-it",
        version: "1.0.0",
        description: "",
    },
    snakeCase: true,

    debug: true, 
    preferredPutPatch: "PUT",
    common: {
        parameters: {},
        headers: {},
    },
    securitySchemes: {},
    authMiddlewares: ["auth", "auth:api"],
    defaultSecurityScheme: "BearerAuth",
    persistAuthorization: true,
    showFullPath: true,
};