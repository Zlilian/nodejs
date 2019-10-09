/*
* @Author: omtech.cn
* @Date:   2019-09-27 17:25:01
* @Last Modified by:   ZL
* @Last Modified time: 2019-09-29 10:40:45
*/
var server = require('./server'),
    router = require('./router'),
    requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);