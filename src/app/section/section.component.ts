import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  onJoinNew(): void {
    console.log('JoinNew clicked');
  }


}
