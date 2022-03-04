import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


import { MenuComponent } from "../menu/menu.component";
import { MenuModule } from "../menu/menu.module";
import { AdminLayoutComponent } from "./admin-layout.component";
import { AdminLayoutRoutesR } from "./admin-layout.routing";
//import { AdminLayoutRoutes } from "./admin-layout.routing";

@NgModule({
    imports: [
        CommonModule,
        //RouterModule.forChild(
        AdminLayoutRoutesR,
        //AdminLayoutRoutesR,
        //AdminLayoutRoutes//),
        FormsModule,
        MenuModule
        //RouterModule
    ],
    exports: [RouterModule],
    declarations: [
        AdminLayoutComponent,
        
        
       // MenuComponent
    ]
})
export class AdminLayoutmodule{}