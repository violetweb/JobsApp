import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RedditComponent } from "./reddit/reddit.component";
import { HomeComponent } from "./home/home.component";
import { CoverLettersComponent } from "./cover-letters/cover-letters.component";
import { PageNotFoundComponent } from "./page-not-found.component";

const APP_ROUTES: Routes = [
   
	{ path: '',   component: HomeComponent },
	{ path: 'jobs', component: RedditComponent },
	{ path: 'cover-letters', component: CoverLettersComponent },	
	{ path: '**', component: PageNotFoundComponent }
]

export const Routing = RouterModule.forRoot(APP_ROUTES);

