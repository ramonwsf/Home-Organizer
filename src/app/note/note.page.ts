import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  constructor() { } //public navCtrl: NavController, public navParams: NavParams, private noteServiceService: NoteServiceService

  ngOnInit() {
  }
 // saveNote(value: {titulo: string} ){
   // this.noteServiceService.saveNote(value);

  //}

}
