import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ``,
  styles: [],
})
export class AppComponent {

  constructor() {

    if(IS_DEV_MODE) {
      const loggerService = inject(LoggerService);
      loggerService.log();
    }

  }

  
}
