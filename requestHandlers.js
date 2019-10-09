/*
* @Author: omtech.cn
* @Date:   2019-09-29 10:20:43
* @Last Modified by:   ZL
* @Last Modified time: 2019-09-30 18:00:02
*/
var querystring = require('querystring');

function start(response, postData) {
    console.log("Request handler 'start' was called.");

    var body = '';
    body += '<html>';
    body += '<head>';
        body += '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">';
    body += '</head>';
    body += '<body>';
        body += '<form action="/upload" method="post">';
            body += '<textarea name="text" cols="60" rows="20"></textarea>';
            body += '<input type="submit" value="提交">';
        body += '</form>';
    body += '</body>';
    body += '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}


function upload(response, postData) {
    console.log('Request handler "upload" was called.');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('You have sent: ' + postData.text);
    response.end();
}

exports.start = start;
exports.upload = upload;
