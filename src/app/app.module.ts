import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostItemComponent } from './post/post-item/post-item.component';
import { PostService } from './post.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule,  BrowserAnimationsModule ],
  declarations: [ AppComponent, PostComponent, PostItemComponent, HeaderComponent, FooterComponent, HomeComponent, UserComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PostService]
})
export class AppModule { }
