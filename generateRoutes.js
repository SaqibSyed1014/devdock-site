import routesData from './src/core/constants/routes.json'

const routes = routesData
const extractedPaths = [];

// Iterate over each route
for (const routeKey in routes) {
    if (routes.hasOwnProperty(routeKey)) {
        const route = routes[routeKey];

        if (route.meta && route.meta.path) {
            extractedPaths.push(route.meta.path);
        }

        // Check if the route has meta data
        if (route.meta) {
            // Iterate over each meta data object
            for (const metaKey in route.meta) {
                if (route.meta.hasOwnProperty(metaKey) && route.meta[metaKey].path) {
                    // Extract and push the "path" key to the array
                    extractedPaths.push(route.meta[metaKey].path);
                }
            }
        }
    }
}


module.exports = extractedPaths