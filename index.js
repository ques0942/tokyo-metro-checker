STATUS_URL = 'http://www.tokyometro.jp/library/common/operation/status.json';

exports.metro_status = (req, res) => {
    const request = require('request');
    request.get(STATUS_URL, (error, response, body) => {
        parsed_body = JSON.parse(body.replace(/^operate_status_cb_func\(/g, '').replace(/\)$/g, ''));
        res.send(parsed_body.jp);
    });
}
