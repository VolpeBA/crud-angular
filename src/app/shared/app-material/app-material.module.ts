import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
  ],
})
export class AppMaterialModule {}



// import { AppRoutingModule } from '../../app-routing.module';
// import { AppComponent } from '../../app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCardModule } from '@angular/material/card';
