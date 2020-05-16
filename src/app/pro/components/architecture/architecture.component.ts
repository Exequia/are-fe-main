import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files/files.service';
import { Observable } from 'rxjs';

interface Architecture {
  id: number;
  key: string;
  title: string;
  description: string;
  images: Image[];
}

interface Image {
  id: number;
  name: string;
  src: string;
}

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent implements OnInit {
  private loadingArchitecture = false;
  public architectures: Observable<Architecture[]>;
  private loadingImages = false;
  public images: Image[];

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    this.architectures = this.filesService.getLocalFile(
      'assets/files/architecture.json'
    );
    // this.invokeGetArchitecture();
    // this.invokeGetImages();
  }

  // /**
  //  * Consume service to recover the data on architecture.json local file
  //  */
  // private invokeGetArchitecture() {
  //   this.loadingArchitecture = true;
  //   this.filesService.getLocalFile('assets/files/architecture.json').subscribe(
  //     (architecturesResponse: Architecture[]) => {
  //       this.loadingArchitecture = false;
  //       this.architectures = architecturesResponse;
  //     },
  //     (error) => {
  //       this.loadingArchitecture = false;
  //       console.error('invokeGetStudies', error);
  //     }
  //   );
  // }

  // /**
  //  * Consume service to recover the data on images.json local file
  //  */
  // private invokeGetImages() {
  //   this.loadingImages = true;
  //   this.filesService.getLocalFile('assets/files/images.json').subscribe(
  //     (imagesResponse: Image[]) => {
  //       this.loadingImages = false;
  //       this.images = imagesResponse;
  //       this.completeImages();
  //     },
  //     (error) => {
  //       this.loadingImages = false;
  //       console.error('invokeGetImages', error);
  //     }
  //   );
  // }

  // private completeImages() {
  //   if (this.architectures && this.images) {
  //     this.architectures.forEach((_arc) => {
  //       if (!_arc.images) {
  //         _arc.images = [];
  //       }

  //       _arc.images = _arc.imagesIds.map((_id) => {
  //         const matchImage = this.images.find((image) => _id === image.id);
  //         if (matchImage) {
  //           return matchImage;
  //         }
  //       });
  //     });
  //   }
  // }
}
