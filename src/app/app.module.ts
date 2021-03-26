import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
        toolbar: [
          [{ header: [3, 4, false] }],
          ['bold', 'italic', 'underline'],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],
          ['blockquote', 'code-block', 'link'],
        ],
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
