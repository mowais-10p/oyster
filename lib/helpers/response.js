function getSuccessfullResponse(applicationData, meta) {

    var ret = {
        meta: meta || {code: 200},
        results: applicationData
    };

    return ret;
}

module.exports = getSuccessfullResponse;