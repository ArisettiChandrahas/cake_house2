var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.cakesCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.cakesReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.cakesUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
 module.exports.cakesDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};