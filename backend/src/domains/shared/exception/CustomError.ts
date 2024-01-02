/**
 * @author - Sushant Babu Luitel
 * @date - 12/12/23
 */

export class CustomError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = this.constructor.name;
    }
}
