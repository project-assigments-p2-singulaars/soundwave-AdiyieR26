import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  onDiscover(): void {
    console.log('Discover clicked');
  }

  onJoin(): void {
    console.log('Join clicked');
  }


}
