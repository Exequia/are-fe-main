import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";

import { ProRoutingModule } from "./pro-routing.module";
import { ProHomeComponent } from "./views/pro-home/pro-home.component";
import { ArchitectureComponent } from "./components/architecture/architecture.component";

@NgModule({
  declarations: [ProHomeComponent, ArchitectureComponent],
  imports: [CommonModule, SharedModule, ProRoutingModule]
})
export class ProModule {}
