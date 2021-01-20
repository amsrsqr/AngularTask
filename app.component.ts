import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hellong';
  public searchInput: string;
    public username = [
      'aryan','kishor','sandeep','jaya','vedant',
      'dipak','balaraj','krishna','bheem','arjun','nakul'
   ]

}
