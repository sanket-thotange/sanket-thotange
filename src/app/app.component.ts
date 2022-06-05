import { Component } from '@angular/core';
import { RedirectService } from './services/redirect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private rs: RedirectService) {}

  redirect(url: string): void {
    this.rs.navigate(url);
  }
}
