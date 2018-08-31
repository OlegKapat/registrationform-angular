import { ComonpageComponent } from '../app/comonpage/comonpage.component';
import {RouterModule} from '@angular/router';
import { NgModule } from "@angular/core";
import {TestpageComponent} from '../app/testpage/testpage.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "app-comonpage",
            pathMatch: "full"
        },
        { path: 'app-testpage', component: TestpageComponent },
         {path:'app-comonpage',component:ComonpageComponent}
    ])],
    exports: [RouterModule] // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule { }