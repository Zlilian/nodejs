/*
* @Author: omtech.cn
* @Date:   2019-09-27 17:37:24
* @Last Modified by:   ZL
* @Last Modified time: 2019-09-30 17:50:04
*/
function route(handle, pathname, response, postData) {
    console.log('About to route a request for ' + pathname);

    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        console.log('No request handler found for ' + pathname);
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('404 Not found');
        response.end();
    }
}

exports.route = route;
