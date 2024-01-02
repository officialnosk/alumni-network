/**
 * @author - Sushant Babu Luitel
 * @date - 12/12/23
 */

import {CustomError} from "../../../shared/exception/CustomError";

export class InstitutionNotFoundException extends CustomError {
    constructor(msg: String) {
        super(msg);
    }
}