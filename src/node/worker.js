const workerUtils = require('../common/worker.js')

process.on('message', function(packet){
    workerUtils.dispatchHandlers(packet, obj => process.send(obj))
})

var TesseractCore;
exports.getCore = function(req, res){
    if(!TesseractCore){
        res.progress()
        TesseractCore = require('tesseract.js-core')
        res.progress()
    }
    return TesseractCore
}

exports.getLanguageData = require('./lang.js')

workerUtils.setAdapter(module.exports);
