
export class User {
    constructor(public email: string, public id: string, private _token: string, private _tokenExpiratoinDate: Date) {
    }

    get token() {
        if(!this._tokenExpiratoinDate || new Date() > this._tokenExpiratoinDate) {
            return null
        }
        return this._token
    }   
}