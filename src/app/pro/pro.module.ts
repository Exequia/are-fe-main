import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProRoutingModule } from './pro-routing.module';
import { ProHomeComponent } from './views/pro-home/pro-home.component';
import { ArchitectureComponent } from './components/architecture/architecture.component';
import { StudiesComponent } from './views/studies/studies.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { TimeLineListComponent } from './components/time-line-list/time-line-list.component';
import { TimeLineFilterComponent } from './components/time-line-filter/time-line-filter.component';
import { WorksComponent } from './views/works/works.component';

@NgModule({
  declarations: [
    ProHomeComponent,
    ArchitectureComponent,
    StudiesComponent,
    TimeLineComponent,
    TimeLineListComponent,
    TimeLineFilterComponent,
    WorksComponent
  ],
  imports: [CommonModule, SharedModule, ProRoutingModule]
})
export class ProModule {}
