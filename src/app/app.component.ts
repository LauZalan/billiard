import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'billiard';
  page = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
        this.page = (evts.urlAfterRedirects as string).split('/')[1] as string;
    })
  }

  changePage(SelectedPage: string) {
    this.router.navigateByUrl(SelectedPage);
  }
}
