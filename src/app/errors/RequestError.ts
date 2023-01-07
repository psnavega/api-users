class RequestError {
    private error: Error | null;

    public statusCode: number;

    public errorCode: string;

    public message: string;

    constructor({error, message, statusCode, errorCode}: {
        error?: Error
        message?: string;
        statusCode?: number;
        errorCode?: string;
    }) {
        this.statusCode = statusCode || 500;
        this.errorCode = errorCode || '000000';
        this.message = message || 'Internal Server Error';

        if(error) this.error = error;
    }
}

export {RequestError};