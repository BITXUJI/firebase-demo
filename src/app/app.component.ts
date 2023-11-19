import { AngularFireDatabase } from '@angular/fire/compat/database'
import { Component } from '@angular/core';
import { Observable } from 'rxjs';


export interface author {
  name: string,
  students: number,
  isPremium: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  course$;
  author$: Observable<author>;
  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').valueChanges();
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = (db.object('/authors/profile1').valueChanges()) as Observable<author>;
  }
}
