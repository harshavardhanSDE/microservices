# Application Error Handling

**app-errors.js :** Defines the common error types the application may cause while using. 

`STATUS_CODE` object stores the key-value pair of HTTP Error codes.

class `AppError` from `app-error.js` extends the Error class available in JavaScript. [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error.capturestacktrace "Mdn: Error class")

The `AppError` class constructor takes in `name`, `statusCode`, `description`, `isOperational`, `errorStack`, `logingErrorResponse`. 

* `name`: Name of the error, this property helps in distinguishing between different kinds of custom errors.
* `StatusCode`: Intended to store HTTP status code that corresponds to the error.
  * Helps in sending appropriate responses to the client in case of an API Error.
* `description:` A detailed message describing the error.
  * It should be user-friendly and descriptive enough to understand the cause of the error.
* `isOperational`: A boolean value indicating if the error is operational or not.
  * **Operational error ( isOperational = true):** are usually expected and can be covered from,such as validation errors or missing resources.
  * **Non-Operational error ( isOperational = false):** are usually unexpected, like programming bugs or critical system failures.
* `errorStack`: The stack trace of the error.
  * useful for debugging and understanding the call stack at the time the error was thrown.
  * inherits from the `stack` property of the build-in `Error` object.
* `logingErrorResponse` : To provide additional context or data specifically for logging purposes.
  * **Provide Additional context**: Include supplementary information that might not be part of the main error message but is useful for debugging and monitoring.
  * **Imporve log clarity:** it makes error loging more informative and easier to understand.
  * **Facilitate Troubleshooting:** Include daa that can help trace the toot cause of an issure more effectively.
