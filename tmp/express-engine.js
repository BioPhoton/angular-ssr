//hacky express wrapper thingy.
import { renderModuleFactory } from '@angular/platform-server';
import * as fs from 'fs';
var templateCache = {};
export function ngExpressEngine(setupOptions) {
    return function (filePath, options, callback) {
        if (!templateCache[filePath]) {
            var file = fs.readFileSync(filePath);
            templateCache[filePath] = file.toString();
        }
        renderModuleFactory(setupOptions.bootstrap[0], {
            document: templateCache[filePath],
            url: options.req.url
        })
            .then(function (string) {
            callback(null, string);
        });
    };
}
