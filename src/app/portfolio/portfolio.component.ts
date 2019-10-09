import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public projects = [
    {title:'CSS animation',subtitle:'Animation done during the IT Academy course', image:'assets/img/stripes.png', link:'https://citlas.github.io/itStripes/'},
    {title:'CV',subtitle:'First attempts for an Angular app', image:'assets/img/cv-site.png', link:'https://citlas.github.io/citlasCV/'},
    {title:'Image gallery',subtitle:'An image gallery made with vanilla JS, using the unsplash API', image:'assets/img/image-gallery.png', link:'https://citlas.github.io/imageGalleryJS/'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
