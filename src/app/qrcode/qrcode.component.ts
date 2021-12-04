import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QRcodeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  selectedFile: File;
  retrievedImage: any;
  bytesArray : any;
  
  ngOnInit() {
  }

  getImage() {
    console.log("Enter get image");
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/getQRImage' ,{ responseType: 'text' })
      .subscribe(
        res => {
          console.log("Received");
          this.bytesArray  = res;
          this.retrievedImage ='data:image/jpeg;base64,' + res;
        }
      );
  }
}
