import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  id!: number;

  // получаем id из параметра
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params.imageId);
  }

  ngOnInit(): void {
  }

}
