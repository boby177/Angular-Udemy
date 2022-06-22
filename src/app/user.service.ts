import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService{
    // activatedEmitter = new EventEmiter<boolean>()
    activatedEmitter = new Subject<boolean>()
}