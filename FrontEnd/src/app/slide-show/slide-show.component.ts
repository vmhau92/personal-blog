import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// import { MessageService } from './message.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {
  
  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getImage();
    console.log('init');
    
    
  }
  listImages: any[] 
  getImage() {
    console.log("Enter get image");
    this.httpClient.get('http://127.0.0.1:8081/listImage' ,{ responseType: 'json' })
      .subscribe(
        (res:Response) => {
          if(res == null){
            console.log("Res is null");
          }
          
           this.listImages = Array.of(res);
          //this.listImages = res.json().results;
          console.log("Received" + this.listImages);
        }
      );
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}
}
