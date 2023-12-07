import { Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {ArtistListComponent} from "./webclient/artist-list/artist-list.component";
import {ArtistDetailsComponent} from "./webclient/artist-details/artist-details.component";
import {ProfilComponent} from "./service-providers/profil/profil.component";
import {ProfileClientComponent} from "./webclient/profile-client/profile-client.component";
import {ChatComponent} from "./service-providers/chat/chat.component";
import {DashboardComponent} from "./service-providers/dashboard/dashboard.component";
import {PricesComponent} from "./pages/prices/prices.component";

export const routes: Routes = [
  // Pages
  { path: '', component: HomepageComponent },
  { path: 'prices', component: PricesComponent },

  // Auth
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },

  // webclient -> utilisateur classique connecté
  {path: 'artist', component: ArtistListComponent},
  {path: 'artist/:id', component: ArtistDetailsComponent},
  {path: 'profile', component: ProfileClientComponent},

  // service providers -> Fournisseurs des services de tatouage et de piercing
  {path: 'service/dashboard', component: DashboardComponent},
  {path: 'service/chat', component: ChatComponent},
  {path: 'service/profile', component: ProfilComponent},


  { path: '**', redirectTo: '' }

];
