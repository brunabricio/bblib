import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AlertComponent } from './alert/alert.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LoaderComponent } from './loader/loader.component';
import { StarsComponent } from './stars/stars.component';
import { NotesComponent } from './notes/notes.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent,
    CarouselComponent,
    AlertComponent,
    BreadcrumbComponent,
    LoaderComponent,
    StarsComponent,
    NotesComponent,
    AccordionComponent,
    SearchComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ButtonComponent,
    NavbarComponent,
    CarouselComponent,
    AlertComponent,
    BreadcrumbComponent,
    LoaderComponent,
    StarsComponent,
    NotesComponent,
    AccordionComponent,
    SearchComponent,
    TableComponent
  ]
})
export class AngularLibModule { }
