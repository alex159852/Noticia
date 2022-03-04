import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';

import {  RouterModule } from '@angular/router';


import {NoticianuevaComponent} from "src/app/components/noticia/noticianueva/noticianueva.component";
import { NoticiaComponent } from "src/app/components/noticia/noticia.component";

//export 
const AdminLayoutRoutes:Routes=[
   
  

    {
        path:'noticia',
        component:NoticiaComponent
    },
    {
        path:'noticiaform',
        component:NoticianuevaComponent
    },
    {
        path:'noticiaform/:id',
        component:NoticianuevaComponent
    }


]
@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutesR{}