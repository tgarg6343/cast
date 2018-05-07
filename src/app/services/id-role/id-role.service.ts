import { Injectable,EventEmitter} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
@Injectable()
export class IdRoleService {

	public id=new EventEmitter<any>();
	public role=new EventEmitter<any>();
	public isLoggedIn=new EventEmitter<any>();

	public id1=new BehaviorSubject<string>('default');
	public role1=new BehaviorSubject<string>('default');
	public isLoggedIn1=new BehaviorSubject<boolean>(false);
	castId=this.id1.asObservable();
	castRole=this.role1.asObservable();
	castIsLoggedIn=this.isLoggedIn1.asObservable();

	constructor() { }
	editId(id){
		this.id1.next(id);
	}
	editRole(role){
		this.role1.next(role);
	}
	editIsLoggedIn(isLoggedIn){
		this.isLoggedIn1.next(isLoggedIn);
	}
}

