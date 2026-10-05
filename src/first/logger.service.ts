export class LoggerService {

    constructor() {
        console.log("Creation de LoggerService");
        
    }
    log(message: unknown): void {
        console.log('From Prod Logger');
        console.log({message});
    }
}