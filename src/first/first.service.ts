export class LoggerDevService {

    constructor() {
        console.log("Creation de LoggerService");
        
    }
    log(message: unknown): void {
        console.log('From Dev Logger');
        console.log({message});
    }
}