import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: AngularFireList<any>;
  courses;


  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/courses');
    this.courses = db.list('/courses').snapshotChanges();
  }
  add(course: HTMLInputElement) {
    this.courses$.push({
      name: course.value,
      price: 150,
      isLive: true,
      sections: [
        { title: 'Component' },
        { title: 'Directive' },
        { title: 'Template' }
      ]
    }
    );
    course.value = '';
  }
  update(course) {
    this.db.object("/courses/" + course.key)
      .update({
        price: 200
      });
  }
  delete(course) {
    this.db.object("/courses/" + course.key).remove()
      .then(x => console.log("DELETED."));
  }
}
