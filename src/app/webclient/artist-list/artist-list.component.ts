import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.scss'
})
export class ArtistListComponent {

}
