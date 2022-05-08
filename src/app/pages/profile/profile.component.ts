import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/User';
import { CompetitionService } from '../../shared/services/competition.service';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import { Competition } from '../../shared/models/Competition';
import { Table } from '../../shared/models/Table';
import { TableService } from '../../shared/services/table.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user?: User;
  comps: Array<string> = [];
  pool?: Competition;
  snooker?: Competition;
  darts?: Competition;
  tables?: Array<string> = [];
  reserved?: Array<Table> = [];

  constructor(private profileService: UserService, private authService: AuthService,
     private compService: CompetitionService,
     private tableService: TableService) {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.profileService.getById(user.uid).subscribe(data => {
      this.user = data;
    }, error => {
      console.error(error);
    });
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.profileService.getById(user.uid).subscribe(data => {
      this.user = data;
    }, error => {
      console.error(error);
    });
    this.compService.getByType('Pool').subscribe(pool => {
      this.pool = pool[0];
      console.log(pool[0]);
      for (let i in this.pool?.competitors) {
        console.log(i)
        console.log((this.user?.name.firstName + " " +  this.user?.name.lastName))
        if (this.pool?.competitors[i] === (this.user?.name.firstName + " " +  this.user?.name.lastName)) {
          this.comps.push(this.pool?.name + " " + this.pool?.date);
        }
      }
    });
    this.compService.getByType('Snooker').subscribe(snooker => {
      this.snooker = snooker[0];
      for (let i in this.snooker?.competitors) {
        if (this.snooker?.competitors[i] === (this.user?.name.firstName + " " +  this.user?.name.lastName)) {
          this.comps.push(this.snooker?.name + " " + this.snooker?.date);
        }
      }
    });
    this.tableService.getAllFree(true).subscribe(table => {
      this.reserved = table;
    })
    this.compService.getByType('Darts').subscribe(dart => {
      this.darts = dart[0];
      for (let i in this.darts?.competitors) {
        if (this.darts?.competitors[i] === (this.user?.name.firstName + " " +  this.user?.name.lastName)) {
          this.comps.push(this.darts?.name + " " + this.darts?.date);
        }
      }
    }); 
  }

  deleteReservations() {
    if (this.reserved?.length) {
      for (let i = 0; i <  this.reserved?.length; i++) {
        this.reserved[i].reserved = false;
        this.reserved[i].who = "";
        this.tableService.update(this.reserved[i]);
      }
    }
  }
}
