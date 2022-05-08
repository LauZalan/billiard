import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Table } from '../../shared/models/Table';
import { TableService } from '../../shared/services/table.service';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  reservation = new FormGroup({
    type: new FormControl(''),
    start: new FormControl(''),
    duration: new FormControl('')
  })

  tables: Array<Table> = [];
  selectedTable!: Table;
  user?: User;

  constructor(private router: Router, private tableService: TableService,
    private userService: UserService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
    });
    this.tableService.getAllFree(false).subscribe(tables => {
      this.tables = tables;
    })
  }

  reserve() {
    this.selectedTable = this.reservation.get('type')?.value;
    this.selectedTable.reserved = true;
    this.selectedTable.who = this.user?.name.firstName + " " + this.user?.name.firstName;
    this.tableService.update(this.selectedTable);
    this.router.navigateByUrl('/reserve/resSuccess');
  }

  cancelRes() {
    window.location.reload();
  }

}
