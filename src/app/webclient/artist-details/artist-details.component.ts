import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-artist-details',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './artist-details.component.html',
  styleUrl: './artist-details.component.scss'
})
export class ArtistDetailsComponent {

}
