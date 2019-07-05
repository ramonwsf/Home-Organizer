import { Component } from '@angular/core';
import { NotePage } from '../note/note.page';
import { NoteServiceService } from '../note-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  //notes:{titulo: String} []=[];

  constructor( ) {//public navCtrl: NavController, private noteServiceService: { getAllNotes: () => void; }

  }
  
 // ionViewWillEnter(){
   // this.notes=this.getAllNotes();
  //}

// NotePage(){
  //this.navCtrl.push(NotePage);
//}

//getAllNoytes(){
  //return this.noteServiceService.getAllNotes();
//}

}