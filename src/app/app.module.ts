import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRcodeComponent } from './qrcode/qrcode.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ConfigHeaderComponent } from './config-header/config-header.component';
import { HeaderComponent } from './header/header.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PostsComponent } from './posts/posts.component';
import { PostsRelativeComponent } from './posts-relative/posts-relative.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    QRcodeComponent,
    ConfigHeaderComponent,
    HeaderComponent,
    SlideShowComponent,
    PostsComponent,
    PostsRelativeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
