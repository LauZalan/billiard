import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Competition } from '../../shared/models/Competition';
import { Router } from '@angular/router';
import { CompetitionService } from '../../shared/services/competition.service';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  competitions: Array<Competition> = [];
  user?: User;
  selectedComp!: Competition;

  applicationsForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    competitors: new FormControl('')
  })

  constructor(private router: Router, private competitionService: CompetitionService,
    private userService: UserService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.applicationsForm.get('competitors')?.setValue(((this.user?.name.firstName) + " " +  (this.user?.name.lastName)));
    }, error => {
      console.error(error);
    });
    this.competitionService.getAll().subscribe(comps => {
      this.competitions = comps;
      this.applicationsForm.get('time')?.setValue('18:00');
    });
  }

  apply() {
    this.selectedComp = this.applicationsForm.get('name')?.value;
    this.selectedComp.competitors.push(this.applicationsForm.get('competitors')?.value);
    this.competitionService.update(this.selectedComp);
    this.router.navigateByUrl('/application/applSuccess')
  }

  cancelApplication() {
    window.location.reload();
  }

}
