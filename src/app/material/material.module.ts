import { NgModule, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


const materialComponents = [
  MatCardModule,
  FlexLayoutModule,
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponents,
  ],
  exports: [
    materialComponents,
  ],
})
export class MaterialModule{ 
  
}
