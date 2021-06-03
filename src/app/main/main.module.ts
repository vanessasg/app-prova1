import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './table/table.component';
import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'ng2-charts';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [HomeComponent, TableComponent, GraphComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    ChartsModule
  ]
})
export class MainModule { }
