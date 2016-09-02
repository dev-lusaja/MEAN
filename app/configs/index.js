// Server config
exports.port = process.env.PORT || 8080;
exports.apiPrefix = process.env.APIPREFIX || '/api/v1';

// Database config
exports.dbUri = process.env.DBURI || 'mongodb://localhost:27017/test';

// Status Codes
exports.errorCode = process.env.ERRORCODE || 500;
exports.okCode = process.env.OKCODE || 200;