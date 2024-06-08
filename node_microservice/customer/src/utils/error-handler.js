const { createLogger, transports } = require('winston'); 
const { AppError }  = require('./app-error'); 

const logErrors = createLogger({
    transports : [
        new transports.Console(),
        new transports.File({ filename : "app_error.log"})

    ],
}); 

class ErrorLogger {
    constructor (){}
    async logError(err){
        console.log("--- Logging Error ---");
        logErrors.log({
            private: true, 
            level: 'error', 
            message : `${new Date()}-${JSON.stringify(err)}`
        }); 
        console.log("--- error logged ---")

        return false; 
    }

    isTrustError(error){
        if ( error instanceof AppError ){
            return error.isOperational;
        } else {
            return false; 
        }
    }

}


const ErrorHandler = async ( err,req, res, next) => {

    const errorLogger = new ErrorLogger(); 
}