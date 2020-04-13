
export interface ResponseObject {
    title: string;
    message: string | null;
}

export interface State {
    state: StateProcessing | StateError | StateSuccess;
    errorCode?: ErrorCodeNoStock | ErrorCodeIncorrectDetails | ErrorCodeNull | ErrorCodeUndefined;
}

type StateProcessing = 'processing';
type StateError = 'error';
type StateSuccess = 'success';

type ErrorCodeNoStock = 'NO_STOCK';
type ErrorCodeIncorrectDetails = 'INCORRECT_DETAILS';
type ErrorCodeNull = null
type ErrorCodeUndefined = undefined;