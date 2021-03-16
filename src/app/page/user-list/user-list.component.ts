import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { ConfirmDeleteService } from 'src/app/service/confirm-delete.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  phrase: string = '';
  phraseKey: string = 'name';
  rawProductKeys: User = new User();
  productKeys = Object.getOwnPropertyNames(this.rawProductKeys)






  //   actionEvent: boolean = false;
  // clickedElementID?: number = 0;

  constructor(
     private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

}
