const STATUS_CODES = {
    OK: 200, 
    BAD_REQUEST: 400, 
    UN_AUTHORISED: 203,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500
}

class AppError extends Error {
    constructor(
        name,
        statusCode,
        description,
        isOperational,
        errorStack,
        logingErrorResponse
    ){
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name, 
        this.statusCode = statusCode, 
        this.isOperational = isOperational,
        this.errorStack = errorStack, 
        this.logError = logingErrorResponse,
        Error.captureStackTrace(this);  

    }
}