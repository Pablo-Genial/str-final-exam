import { Component, OnInit } from '@angular/core';
import { ConfirmDeleteService } from 'src/app/service/confirm-delete.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {
  message: any;
  constructor(private confirmDeleteService: ConfirmDeleteService) { }

  ngOnInit(): any {
    this.confirmDeleteService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

}
