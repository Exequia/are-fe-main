import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files/files.service';
// import { Card } from "src/app/template/components/card/models/card";

interface Card {
  id: number;
  dateInit: Date;
  key: string;
  link?: Link;
}

interface Link {
  url: string;
  text: string;
  icon?: string;
}

export enum CardTypes {
  News = 'news',
  Studies = 'studies'
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cardTypes = CardTypes;
  private loadingAppNews = false;
  public appNews: Card[];
  private loadingAppStudies = false;
  public appStudies: Card[];

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    this.invokeGetAppNews();
    this.invokeGetAppStudies();
  }

  private invokeGetAppNews() {
    this.loadingAppNews = true;
    this.filesService.getLocalFile('assets/files/appNews.json').subscribe(
      (studiesResponse: Card[]) => {
        this.loadingAppNews = false;
        this.appNews = studiesResponse;
      },
      (error) => {
        this.loadingAppNews = false;
        console.error('invokeGetAppNews', error);
      }
    );
  }

  private invokeGetAppStudies() {
    this.loadingAppStudies = true;
    this.filesService.getLocalFile('assets/files/studies.json').subscribe(
      (studiesResponse: Card[]) => {
        this.loadingAppStudies = false;
        this.appStudies = studiesResponse.slice(0, 2);
      },
      (error) => {
        this.loadingAppStudies = false;
        console.error('invokeGetAppStudies', error);
      }
    );
  }
}
