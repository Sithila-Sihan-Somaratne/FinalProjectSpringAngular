import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddStudentComponent } from './pages/student/add-student/add-student.component';
import { GetAllStudentsComponent } from './pages/student/get-all-students/get-all-students.component';
import { DeleteStudentComponent } from './pages/student/delete-student/delete-student.component';
import { UpdateStudentComponent } from './pages/student/update-student/update-student.component';
import { SearchStudentComponent } from './pages/student/search-student/search-student.component';
import { StudentHeaderComponent } from './pages/student/student-header/student-header.component';
import { StudentSidebarComponent } from './pages/student/student-sidebar/student-sidebar.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartStudentPageComponent } from './pages/student/start-student-page/start-student-page.component';
import { CommonStudentPageComponent } from './pages/student/start-student-page/common-student-page/common-student-page.component';
import { AddClassroomComponent } from './pages/classroom/add-classroom/add-classroom.component';
import { AddTeacherComponent } from './pages/teacher/add-teacher/add-teacher.component';
import { DeleteTeacherComponent } from './pages/teacher/delete-teacher/delete-teacher.component';
import { SearchTeacherComponent } from './pages/teacher/search-teacher/search-teacher.component';
import { UpdateTeacherComponent } from './pages/teacher/update-teacher/update-teacher.component';
import { TeacherHeaderComponent } from './pages/teacher/teacher-header/teacher-header.component';
import { TeacherSidebarComponent } from './pages/teacher/teacher-sidebar/teacher-sidebar.component';
import { StartTeacherPageComponent } from './pages/teacher/start-teacher-page/start-teacher-page.component';
import { DeleteClassroomComponent } from './pages/classroom/delete-classroom/delete-classroom.component';
import { SearchClassroomComponent } from './pages/classroom/search-classroom/search-classroom.component';
import { GetAllTeachersComponent } from './pages/teacher/get-all-teachers/get-all-teachers.component';
import { GetAllClassroomsComponent } from './pages/classroom/get-all-classrooms/get-all-classrooms.component';
import { UpdateClassroomComponent } from './pages/classroom/update-classroom/update-classroom.component';
import { ClassroomHeaderComponent } from './pages/classroom/classroom-header/classroom-header.component';
import { ClassroomSidebarComponent } from './pages/classroom/classroom-sidebar/classroom-sidebar.component';
import { StartClassroomPageComponent } from './pages/classroom/start-classroom-page/start-classroom-page.component';
import { CommonClassroomPageComponent } from './pages/classroom/start-classroom-page/common-classroom-page/common-classroom-page.component';
import { CommonTeacherPageComponent } from './pages/teacher/start-teacher-page/common-teacher-page/common-teacher-page.component';
import { ForgotPwdComponent } from './pages/forgot-pwd/forgot-pwd.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddStudentComponent,
    GetAllStudentsComponent,
    DeleteStudentComponent,
    UpdateStudentComponent,
    SearchStudentComponent,
    StudentHeaderComponent,
    StudentSidebarComponent,
    SignUpComponent,
    LogInComponent,
    StartStudentPageComponent,
    CommonStudentPageComponent,
    AddClassroomComponent,
    AddTeacherComponent,
    DeleteTeacherComponent,
    SearchTeacherComponent,
    UpdateTeacherComponent,
    TeacherHeaderComponent,
    TeacherSidebarComponent,
    StartTeacherPageComponent,
    CommonTeacherPageComponent,
    DeleteClassroomComponent,
    SearchClassroomComponent,
    GetAllTeachersComponent,
    GetAllClassroomsComponent,
    UpdateClassroomComponent,
    ClassroomHeaderComponent,
    ClassroomSidebarComponent,
    StartClassroomPageComponent,
    CommonClassroomPageComponent,
    ForgotPwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
