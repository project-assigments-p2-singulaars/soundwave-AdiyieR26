import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent  {
}
