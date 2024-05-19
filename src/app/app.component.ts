import { Component } from '@angular/core';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = '土豆 & 豆腐';

  // dateFormatted: string = "";
  // constructor(protected datePipe: DatePipe) {}
  // ngOnInit() {
  //   const today = new Date();
  //   const datePipe = new DatePipe("en-IN");
  //   this.dateFormatted = ""+datePipe.transform(today, "yyyyMMddHHmmss");
  // }

  logToConsole(){
    console.log('Hi')
    alert('Hi')
  }
  
  playAudio() { 
    var audio = new Audio();
    audio.src = "/assets/osg_KO_094.mp3";
    audio.load();
    audio.play();
  } 
//   <audio id="myAudio">
//   <source src="/assets/osg_KO_094.mp3" type="audio/mpeg">
// </audio>
}

