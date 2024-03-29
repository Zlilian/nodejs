/*
* @Author: omtech.cn
* @Date:   2019-08-30 14:47:58
* @Last Modified by:   ZL
* @Last Modified time: 2019-09-30 17:48:53
*/
var http = require('http'),
    url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var postData = '',
            pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        request.setEncoding('utf8');

        request.addListener('data', function(postDataChunk) {
            postData += postDataChunk;
            console.log('Received POST data chunk "' +  postDataChunk + '".');
        });

        request.addListener('end', function() {
            route(handle, pathname, response, postData);
        });

    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
