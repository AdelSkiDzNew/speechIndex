import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren } from '@angular/core';
import { HomeService } from './home.service';
import { Media } from './model/home.media';
import { WindowRef } from '../commun/window';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  

  videos: any       = [];
  keyWords : string = '';
  media : Media = {} as Media;
  listeMedia  : Array<Media> ;
  dataTemp : Array<any> ;
  showProgressBar : boolean ;
  @ViewChildren('videoPlayer') videoPlayer: ElementRef;
  timeValue :any;
  numberPage: number; //Declare the variable that you're using in currentPage
  LOGO_PATH : string = '../../assets/images/logo-medi-audio.png';


  

  constructor(private __homeService:HomeService,private __winRef: WindowRef,private __elementRef:ElementRef) 
  { 
    this.showProgressBar = false;
  }

  init() 
  {
      this.listeMedia  =  new Array();
      this.dataTemp    =  new Array();
      let tab  = [];
      let tabKeyAndColor : Array <any> = new Array ();
      if(this.keyWords !== '')
      {
        this.showProgressBar = true;
      }
      
      this.__homeService.GET(this.keyWords).subscribe(response =>
      {
        if(this.keyWords !== '' && this.keyWords !== null && this.keyWords !== undefined)
        {
          //supprimer les ,
          if(this.keyWords.includes(','))
          {
              tab = this.keyWords.split(',');
          }else
          {
              tab = [this.keyWords];
          }
          
          //suprimmer les espaces.
          if(this.keyWords.includes(' '))
          {
              tab = tab.map(Function.prototype.call, String.prototype.trim);
          }
          // affecter des couleurs pour chaque keyword
          for (let index = 0; index < tab.length; index++) 
          {
              tabKeyAndColor.push({value : tab[index],color:this.changeColor(index)});
          }
          
          response.forEach(elementX => 
          {
              this.media  = {} as Media;
              this.media.url   = elementX.mediaUrl;
              this.media.jobId = elementX.transcription.job.id;
              this.media.date  = elementX.transcription.job.created_at;
              this.media.title = elementX.transcription.job.name;
              this.media.duration = elementX.transcription.job.duration;
              let text = '';
              let key  = '';
              elementX.transcription.words.forEach(elementY => 
              {
                  text = text +' '+elementY.name;
                  for (let index = 0,size = tab.length; index < size; index++) 
                  {
                    if(elementY.name.toLocaleLowerCase() == tab[index].toLocaleLowerCase())
                    {
                        this.dataTemp.push({keyWords:tabKeyAndColor[index].value,time : elementY.time,timeConverted:this.calculateTimeVideo(elementY.time),jobId : elementX.transcription.job.id,color:tabKeyAndColor[index].color});
                        if(key === '')
                        {
                          key  = key + '' + elementY.time;
                        }
                    }
                    
                  }
              });
              this.media.content = text;
              this.media.firstKeyWords = key;
              this.listeMedia.push(this.media);
          });
          this.listeMedia.forEach(item =>
          {
             item.keyWords = new Array();
             this.dataTemp.forEach(it =>{
                if(item.jobId == it.jobId)
                {
                    item.keyWords.push(it);
                }
             });
          });
          console.log(this.listeMedia);
          this.showProgressBar = false;
          this.numberPage = 1;
        }
        
      },error =>
      {
        console.log(error);
      }
    );
  }

  search()
  {
    this.init();
  
  }


  step(point)
  {
    this.timeValue = point;
  }

  setCurrentTime(event)
  {
    event.target.currentTime = this.timeValue;
    if(event.target.paused)
    {
        event.target.play();
    }else
    {
        event.target.pause();
    }
  }

  changeColor(index)
  {
    let tabColor = ['#6200EE','#C51162','#ffcd4f','#03DAC6','black'];
    return tabColor[index];
  }

  calculateTimeVideo(time) :string{
    let hr = ~~(time / 3600);
    let min = ~~((time % 3600) / 60);
    let sec = time % 60;
    let secMin = "";
    if (hr > 0) {
      secMin += "" + hr + ":" + (min < 10 ? "0" : "");
    }
    secMin += "" + min + ":" + (sec < 10 ? "0" : "");
    secMin += "" + sec.toFixed(2);
    return secMin+ " min";
 }

}
