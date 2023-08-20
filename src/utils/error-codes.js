const ClientErrorsCodes= Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORIZED:401,
    NOT_FOUND: 404
});

//Object.freeze({})-> using this so that no other class or controller can update it.

const ServerErrorsCodes= Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
});

const SuccessCodes= Object.freeze({
    OK: 200,
    CREATED: 201
});

module.exports={
    ClientErrorsCodes,
    ServerErrorsCodes,
    SuccessCodes
}