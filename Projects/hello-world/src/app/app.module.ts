import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsService } from './authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCase } from './title-case.pipe';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    FavoriteComponent,
    TitleCaseComponent,
    TitleCase,
    PostsComponent,
    ZippyComponent,
    CourseFormComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [AuthorsService, PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
