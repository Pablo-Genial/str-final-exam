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


  columnKey: string = '';
  direction: string = '';



  constructor(
     private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  // deleteItem(user: User): void {
  //    this.userService.delete(user).subscribe(
  //       () => {
  //        this.userService.getAll();
  //        }
  //   );
  // }



  onColumnSelect(key: string): void {
    if (this.columnKey != key) {
      this.direction = 'asc';
    } else {
      this.direction = this.swichDirectionValue();
    }
    this.columnKey = key;
  }

  swichDirectionValue(): any {
    switch (this.direction) {
      case 'asc':
        return this.direction = 'dsc';
      case 'dsc':
        return this.direction = 'asc';
      default:
        return this.direction = 'asc';
    }
  }



}
