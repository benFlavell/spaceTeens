import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaceTeens0.1.1';

  constructor(private router: Router) {
    let path = localStorage.getItem('path');
    console.log(path);
    if (path) {
      console.log(path);
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
  }
}
