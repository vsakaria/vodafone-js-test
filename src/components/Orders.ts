
export interface ResponseObject {
    title: string;
    message: string | null;
}

export type Order = {
    state: StateProcessing | StateError | StateSuccess;
    errorCode?: ErrorCodeNoStock | ErrorCodeIncorrectDetails | ErrorCodeNull | ErrorCodeUndefined;
}

export const States: States = {
    SUCCESS: 'success',
    ERROR: 'error',
    PROCESSING: 'processing'
}

interface States {
    SUCCESS: StateSuccess;
    ERROR: StateError;
    PROCESSING: StateProcessing;
}

type StateProcessing = 'processing';
type StateError = 'error';
type StateSuccess = 'success';

type ErrorCodeNoStock = 'NO_STOCK';
type ErrorCodeIncorrectDetails = 'INCORRECT_DETAILS';
type ErrorCodeNull = null
type ErrorCodeUndefined = undefined;