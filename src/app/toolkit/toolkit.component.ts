import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolkit',
  templateUrl: './toolkit.component.html',
  styleUrls: ['./toolkit.component.scss']
})

//title,subtitle,image, content, link

export class ToolkitComponent implements OnInit {

  public htmlTools = [
    {title:'HTML Cheatsheet',subtitle:'lots of useful stuff', link:'https://htmlcheatsheet.com/'},
    {title:'Fontawesome',subtitle:'Nice icons, but need to register', link:'https://fontawesome.com/'},
  ]
    

  constructor() { }

  ngOnInit() {
  }

}
