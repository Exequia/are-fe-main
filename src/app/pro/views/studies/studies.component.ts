import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files/files.service';
// import { TimeLineItem } from "../../components/time-line/models/TimeLine";
interface TimeLineItem {
  id: number;
  type: StudiesType;
  key: string;
  center: string;
  dateInit: string;
  endDate: string;
  qualify?: string;
  comments?: string;
  link?: string;
}

enum StudiesType {
  All = '',
  Regular = 'regular',
  Other = 'other'
}

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  public studies: TimeLineItem[];
  public filterProp = 'type';
  public templateId = 'studies';
  public loadingStudies = false;

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    this.invokeGetStudies();
  }

  private invokeGetStudies() {
    this.loadingStudies = true;
    this.filesService.getLocalFile('assets/files/studies.json').subscribe(
      (studiesResponse: TimeLineItem[]) => {
        this.loadingStudies = false;
        this.studies = studiesResponse;
      },
      (error) => {
        this.loadingStudies = false;
        console.error('invokeGetStudies', error);
      }
    );
  }
}
