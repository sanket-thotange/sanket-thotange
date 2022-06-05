import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  url: string = '';

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.url = params['url'];
    });
  }

  redirect(): void {
    window.location.href = this.url;
  }

  cancel(): void {
    this.location.back();
  }
}
