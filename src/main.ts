import { ApplicationConfig, bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter, withEnabledBlockingInitialNavigation } from "@angular/router";
import { APP_ROUTES } from "./app/app.routes";

const APP_CONFIG = {
  providers: [
    provideAnimations(),
    provideRouter(APP_ROUTES, withEnabledBlockingInitialNavigation())
  ]
}

bootstrapApplication(AppComponent, APP_CONFIG).catch(e => console.error(e))

// wiht ngModules
// platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
