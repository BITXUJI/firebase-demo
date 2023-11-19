import { AngularFireDatabase } from '@angular/fire/compat/database'
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').valueChanges();
  }
}
