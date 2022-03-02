import { Component } from '@angular/core';
@Component({
  selector: 'app-screen',
  template: `<h1>ScreenComponent</h1>`,
    
})
export class ScreensComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor() { }

  ngOnInit(): void {
    
  }
}
