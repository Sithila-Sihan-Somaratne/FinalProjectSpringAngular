import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { StartStudentPageComponent } from './pages/student/start-student-page/start-student-page.component';
import { CommonStudentPageComponent } from './pages/student/start-student-page/common-student-page/common-student-page.component';
import { AddStudentComponent } from './pages/student/add-student/add-student.component';
import { GetAllStudentsComponent } from './pages/student/get-all-students/get-all-students.component';
import { DeleteStudentComponent } from './pages/student/delete-student/delete-student.component';
import { SearchStudentComponent } from './pages/student/search-student/search-student.component';
import { UpdateStudentComponent } from './pages/student/update-student/update-student.component';
import { StartTeacherPageComponent } from './pages/teacher/start-teacher-page/start-teacher-page.component';
import { CommonTeacherPageComponent } from './pages/teacher/start-teacher-page/common-teacher-page/common-teacher-page.component';
import { GetAllTeachersComponent } from './pages/teacher/get-all-teachers/get-all-teachers.component';
import { AddTeacherComponent } from './pages/teacher/add-teacher/add-teacher.component';
import { DeleteTeacherComponent } from './pages/teacher/delete-teacher/delete-teacher.component';
import { SearchTeacherComponent } from './pages/teacher/search-teacher/search-teacher.component';
import { UpdateTeacherComponent } from './pages/teacher/update-teacher/update-teacher.component';
import { StartClassroomPageComponent } from './pages/classroom/start-classroom-page/start-classroom-page.component';
import { CommonClassroomPageComponent } from './pages/classroom/start-classroom-page/common-classroom-page/common-classroom-page.component';
import { GetAllClassroomsComponent } from './pages/classroom/get-all-classrooms/get-all-classrooms.component';
import { AddClassroomComponent } from './pages/classroom/add-classroom/add-classroom.component';
import { DeleteClassroomComponent } from './pages/classroom/delete-classroom/delete-classroom.component';
import { SearchClassroomComponent } from './pages/classroom/search-classroom/search-classroom.component';
import { UpdateClassroomComponent } from './pages/classroom/update-classroom/update-classroom.component';
import { ForgotPwdComponent } from './pages/forgot-pwd/forgot-pwd.component';

const routes: Routes = [
  {
    path:"",
    component: LogInComponent
  },
  {
    path:"sign-up",
    component: SignUpComponent
  },
  {
    path:"forgot-pwd",
    component: ForgotPwdComponent 
  },
  {
    path:"home-page",
    component: HomePageComponent
  },
  {
    path: "student",
    component: StartStudentPageComponent,
    children: [
      {
        path: "",
        component: CommonStudentPageComponent
      },
      {
        path:"get-all-students",
        component: GetAllStudentsComponent
      },
      {
        path:"add-student",
        component: AddStudentComponent
      },
      {
        path:"delete-student",
        component: DeleteStudentComponent
      },
      {
        path:"search-student",
        component: SearchStudentComponent
      },
      {
        path:"update-student",
        component: UpdateStudentComponent
      }
    ]
  },
  {
    path: "teacher",
    component: StartTeacherPageComponent,
    children: [
      {
        path: "",
        component: CommonTeacherPageComponent
      },
      {
        path:"get-all-teachers",
        component: GetAllTeachersComponent
      },
      {
        path:"add-teacher",
        component: AddTeacherComponent
      },
      {
        path:"delete-teacher",
        component: DeleteTeacherComponent
      },
      {
        path:"search-teacher",
        component: SearchTeacherComponent
      },
      {
        path:"update-teacher",
        component: UpdateTeacherComponent
      }
    ]
  },
  {
    path: "classroom",
    component: StartClassroomPageComponent,
    children: [
      {
        path: "",
        component: CommonClassroomPageComponent
      },
      {
        path:"get-all-classrooms",
        component: GetAllClassroomsComponent
      },
      {
        path:"add-classroom",
        component: AddClassroomComponent
      },
      {
        path:"delete-classroom",
        component: DeleteClassroomComponent
      },
      {
        path:"search-classroom",
        component: SearchClassroomComponent
      },
      {
        path:"update-classroom",
        component: UpdateClassroomComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }