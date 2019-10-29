import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolkit',
  templateUrl: './toolkit.component.html',
  styleUrls: ['./toolkit.component.scss']
})


export class ToolkitComponent implements OnInit {

  public htmlTools = [
    {title:'HTML Cheatsheet',subtitle:'lots of useful stuff', link:'https://htmlcheatsheet.com/', icon: 'code'},
    {title:'Fontawesome',subtitle:'Nice icons, but need to register', link:'https://fontawesome.com/'},
    {title:'Picsum photos',subtitle:'The Lorem Ipsum for photos - random pictures', link:'https://picsum.photos/'},
    {title:'Meet the ipsums',subtitle:'Generate paragraphs of different Lorem Ipsums', link:'https://meettheipsums.com/'},
      {link: "https://www.reveal.js", title: "Reveal",subtitle: "Do presentations"},
      {link: "https://www.macaw.co", title: "Macaw", subtitle: "Make prototypes"},
      {link: "https://www.programmableweb.com/", title: "Programmable web",subtitle: "Appi's directory"},
      {
        link: "http://www.freeformatter.com/json-formatter.html",
        title: "Json formatter",
        subtitle: "Json formatter"
      },
      {
        link: "https://www.freeformatter.com/xml-formatter.html",
        title: "Xml formatter",
        subtitle: "Xml formatter"
      },
      {
        link: "https://emilkowalski.github.io/css-effects-snippets/",
        title: "Animation css",
        subtitle: "Cool animations with css"
      },
      {
        link: "https://www.cloudflare.com/es-es/",
        title: "Cloud flare",
        subtitle: "Secure your web"
      },
      {
        link: "https://www.screamingfrog.co.uk/seo-spider/",
        title: "Screaming frog",
        subtitle: "Analyze SEO"
      },
      {
        link: "https://romualdfons.com/curso-seo/",
        title: "Romuald Fons",
        subtitle: "Seo tips"
      },
      {
        link: "https://answerthepublic.com",
        title: "Answer the public",
        subtitle: "Find keywords"
      },
      {
        link: "https://www.aeuroweb.com/200-factores-seo/",
        title: "200 factores que afectan SEO",
        subtitle: "Pues eso, 200 cosas a tomar en cuenta"
      },
      {
        link: "https://contrast-ratio.com/",
        title: "Contrast ratio",
        subtitle: "Contrast checker, fonts and background (UX)"
      },
      {
        link: "https://www.cssfontstack.com/",
        title: "CSS font stack",
        subtitle: "Web safe fonts"
      },
      {
        link: "fontsquirrel.com ",
        title: "Fontsquirrel",
        subtitle: "Free font generator"
      },
      {
        link: "https://fonts.adobe.com/",
        title: "Adobe fonts",
        subtitle: "typekit fonts"
      },
      {
        link: "https://fonts.google.com/",
        title: "Google Fonts",
        subtitle: "google fotns"
      },
      {
        link: "https://tympanus.net/codrops/css_reference/",
        title: "Css reference",
        subtitle: "Learn css"
      },
      {
        link: "https://pixlr.com/",
        title: "Pixlr",
        subtitle: "Editor like photoshop"
      },
      {
        link: "https://www.paulirish.com/2012/box-sizing-border-box-ftw/",
        title: "Box sizing",
        subtitle: "box sizing snippet"
      },
      {
        link: "https://www.layoutit.com/build",
        title: "Layoutit",
        subtitle: "Build html and css layouts"
      },
      {
        link: "http://www.cheat-sheets.org/saved-copy/jsquick.pdf",
        title: "Javascript cheat sheet",
        subtitle: "js cheat sheet"
      },
      {
        link: "https://gist.github.com/planetoftheweb/6729f849d7db31061b2e",
        title: "Smooth scrolling",
        subtitle: "Repo of a smooth scrolling scrollspy"
      },
      {
        link: "https://raybo.org/bootstrap4layouts/",
        title: "Bootstrap template",
        subtitle: "Nice bootstrap template from the course"
      },
      {
        link: "https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/  ",
        title: "How to connect api with js",
        subtitle: "Call an api with javascript"
      },
      {
        link: "https://www.makeareadme.com/",
        title: "Make read me",
        subtitle: "Super easy way to do a read me with markdown"
      },
      {
        link: "https://www.youtube.com/watch?v=Mus_vwhTCq0",
        title: "JavaScript Pro Tips - Code This, NOT That",
        subtitle: "Good practices javascript - un ejemplo del reduce, filter ok"
      },
      {
        link: "https://www.youtube.com/playlist?list=PLAwxTw4SYaPkv4LG-0UHNfhPkKPfYacOg",
        title: "Jasmine course",
        subtitle: "I should learn more about this"
      },
      {
        link: "https://daneden.github.io/animate.css/",
        title: "Animate CSS",
        subtitle: "More cool css animations"
      },
      {
        link: "https://randomuser.me/api/",
        title: "Random user",
        subtitle: "Api with fake data useful if you need users"
      },
      {
        link: "https://frontendmasters.com/books/front-end-handbook/2019/#6.42",
        title: "Front end hand book",
        subtitle: "Front end book"
      },
      {
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Element",
        title: "Element properties",
        subtitle: "element properties"
      },
      {
        link: "https://developer.marvel.com/",
        title: "Marvel Api",
        subtitle: "Access information about Marvel's vast library of comics"
      },
      {
        link: "https://www.jslint.com/",
        title: "JsLint",
        subtitle: "check quality of code - strict"
      },
      {
        link: "https://jshint.com/",
        title: "JsHint",
        subtitle: "check quality of code"
      },
      {
        link: "https://minifier.org",
        title: "Minifier",
        subtitle: "Minify your code"
      },
      {
        link: "https://regexone.com/",
        title: "Regex one",
        subtitle: "regex exercise"
      },
      {
        link: "https://twitter.com/calebporzio/status/1122924167769264130?s=11",
        title: "Toggle with html and css",
        subtitle: "listado toggle solo con html y css"
      },
      {
        link: "http://letteringjs.com/",
        title: "Lettering js",
        subtitle: "Style letters with js"
      },
      {
        link: "https://30secondsofinterviews.org/",
        title: "30 seconds of interviews",
        subtitle: "Questions someone might ask"
      },
      {
        link: "https://techbrij.com/css-selector-adjacent-child-sibling",
        title: "Understand ‘+’, ‘>’ and ‘~’ symbols in CSS Selector",
        subtitle: "adjacent sibling"
      },
      {
        link: "http://slides.com/adajs/tdd-101-workshop#/",
        title: "Test driven development",
        subtitle: "A presentation"
      },
      {
        link: "https://github.com/adabcnjs/tdd-workshop",
        title: "Tdd workshop",
        subtitle: "Code of the presentation"
      },
      {
        link: "https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/",
        title: "Clean code practices",
        subtitle: "Javascript clean code practices"
      },
      {
        link: "https://coolefriend.com/know-names-of-symbols-in-your-computer-keyboard/",
        title: "Know Names of Symbols in Your Computer Keyboard",
        subtitle: "Lifesaver"
      },
      {
        link: "https://jstherightway.org/#must-see",
        title: "Javascript must see",
        subtitle: "Best practices, patrones y tutoriales. listado de librerias"
      },
      {
        link: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",
        title: "Typescript docs",
        subtitle: "Learn typescript in 5 minutes"
      },
      {
        link: "https://www.estudionexos.com/post/animando-graficos-svg-con-css/",
        title: "Animando graficos con css",
        subtitle: "Animar svg"
      },
      {
        link: "https://pages.github.com/",
        title: "Github Pages",
        subtitle: "Get your own page from your repo"
      },
      {
        link: "https://www.creativebloq.com/web-design/what-is-sass-111517618",
        title: "What is Sass",
        subtitle: "Blog expaining what is sass"
      },
      {
        link: "https://unsplash.com/",
        title: "Unsplash",
        subtitle: "Cool free pictures"
      },
      {
        link: "https://necolas.github.io/normalize.css/",
        title: "Normalize css",
        subtitle: "Render all elements more consistently "
      },
      {
        link: "https://jsonplaceholder.typicode.com/",
        title: "Json placeholder",
        subtitle: "Fake Online REST API for Testing and Prototyping"
      },
      {
        link: "https://www.youtube.com/watch?v=_cS3uOf04zM",
        title: "Instalar php my admin",
        subtitle: "instalar php my admin"
      },
      {
        link: "https://getavataaars.com/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=Red&clotheType=ShirtScoopNeck&eyeType=Happy&eyebrowType=DefaultNatural&hairColor=BrownDark&topType=LongHairBun",
        title: "Get avataar",
        subtitle: "avatar generator"
      },
      {
        link: "https://material.io/design/",
        title: "Angular material design",
        subtitle: "Material design - angular, palettes, typographies, icons etc"
      },
      {
        link: "https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example",
        title: "Angular validations",
        subtitle: "Explaining Angular validations"
      },
      {
        link: "https://www.netlify.com/",
        title: "Netlify",
        subtitle: "Deploy web"
      },
      {
        link: "http://www.tutorialesprogramacionya.com/angularya/",
        title: "Programación Ya Angular",
        subtitle: "angular tutorial"
      },
      {
        link: "https://docs.google.com/presentation/d/1Z1GflVo4uMdOg7CgJioX7HACG__Xzl1bXdjiKy8Y2Yk/edit#slide=id.p1",
        title: "Usabilidad web",
        subtitle: "Presentación de usabilidad web"
      },
      {
        link: "https://docs.google.com/presentation/d/10fM5PhEQeniAh9mDWq2HYPAKT7OZ8dGQo5slBgfeCqc/edit#slide=id.p16",
        title: "Patrones arquitectura y diseño",
        subtitle: "Presentación de patrones de arquitectura y diseño"
      },
      {
        link: "https://www.youtube.com/watch?v=lxYB79ANJM8",
        title: "Super completo video para hacer web",
        subtitle: "Angular Mysql CRUD Tutorial, REST API Node & Typescript"
      },
      {
        link: "https://bootswatch.com/",
        title: "Bootswatch",
        subtitle: "Free bootstrap templates"
      },
      {
        link: "https://codinglatte.com/posts/angular/deploying-angular-apps-github-pages/",
        title: "Deploy github angular pages",
        subtitle: "Step by step"
      },
      {
        link: "https://stackoverflow.com/questions/42465667/github-pages-images-not-showing",
        title: "Deploy github angular pages - images not showing",
        subtitle: "Solving the problem"
      },
      {
        link: "http://www.tutorialesprogramacionya.com/angularya/detalleconcepto.php?punto=24&codigo=24&inicio=20",
        title: "Programación Ya Typescript",
        subtitle: "resuelve muchas dudas de funciones en typescript"
      },
      {
        link: "https://ninjamock.com",
        title: "Ninja mock",
        subtitle: "Create basic mock ups"
      },
      {
        link: "https://www.youtube.com/watch?v=fgQeQeEGvLk",
        title: "Video Xampp",
        subtitle: "cuando no sirve xampp - phopmyadmin - iniciar apache..."
      },
      {
        link: "https://www.materialpalette.com/indigo/teal",
        title: "Angular material palette",
        subtitle: "Check angular material palette"
      },
      {
        link: "https://www.slideshare.net/ladyleet/an-introduction-into-using-angulars-material-design",
        title: "Introduction to angular material",
        subtitle: "angular material powerpoint"
      },
      {
        link: "https://scotch.io/tutorials/3-ways-to-pass-async-data-to-angular-2-child-components",
        title: "Angular: pass child components",
        subtitle: "para pasar a child asyncrono"
      },
      {
        link: "https://desarrolloweb.com/articulos/crear-api-rest-json-server.html",
        title: "Crear un API REST, 5 minutos con json-server",
        subtitle: "Fácil y rápido"
      },
      {
        link: "https://www.zeptobook.com/angular-material-table-with-paging-sorting-and-filtering/",
        title: "Angular Material tables",
        subtitle: "Angular Material Table With Paging, Sorting And Filtering"
      },
      {
        link: "https://www.developerdrive.com/4-ways-to-create-an-object-in-javascript-with-examples/",
        title: "Javascript objetcs",
        subtitle: "4 ways to create objects"
      },
      {
        link: "https://vincentgarreau.com/particles.js/",
        title: "Particles js",
        subtitle: "Cool animation ready to use"
      },
      {
        link: "https://www.youtube.com/watch?v=b3HLNJvVzNo&feature=youtu.be",
        title: "Learn laravel",
        subtitle: "How to Install Vagrant, in 8 minutes - Set up Laravel Homestead tutorial 1"
      },
      {
        link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        title: "A guide to flex box",
        subtitle: "Comprehensive guide to CSS flexbox layout"
      },
      {
        link: "https://docs.google.com/presentation/d/1GNCDj-kNBkFMGzTeKEAO1YcMAntpHEL4ahMkSlXUEs0/edit#slide=id.p1",
        title: "SEO para programadores",
        subtitle: "Presentación"
      },
      {
        link: "http://www.rleonardi.com/tutorial/design-portfolio/",
        title: "Portfolio",
        subtitle: "Animated portfolio"
      },
      {
        link: "https://drive.google.com/file/d/1P102-UaA7z10jf77rsVQ_iOdd1AqaZZR/view",
        title: "Postman",
        subtitle: "Presentación"
      },
      {
        link: "http://overapi.com/",
        title: "Over Api",
        subtitle: "Collects all cheat sheets"
      },
      {
        link: "https://web.dev/measure",
        title: "Web dev",
        subtitle: "SEO - web dev, te da performance, tiempos y como arreglar"
      },
      {
        link: "https://www.thinkwithgoogle.com/feature/testmysite/",
        title: "Test my site",
        subtitle: "test my site -performance, speed, impacto en dinero"
      },
      {
        link: "https://trends.google.com/trends/?geo=US",
        title: "Google trends",
        subtitle: "Explore what the world is searching"
      },
      {
        link: "https://schema.org/",
        title: "Schema.org",
        subtitle: "structured data - palabras para que google entienda mejor"
      },
      {
        link: "https://developers.google.com/search/docs/guides/intro-structured-data",
        title: "Intro structured data",
        subtitle: "para entender mejor structured data ej si es una peli, que google reconozca el rating"
      },
      {
        link: "https://search.google.com/structured-data/testing-tool/u/0/",
        title: "Google structured data testing tool",
        subtitle: "structured data testing tool"
      },
      {
        link: "http://www.siteliner.com/",
        title: "Siteliner",
        subtitle: "Find duplicate content of my web"
      },
      {
        link: "https://buzzsumo.com/",
        title: "Buzz sumo",
        subtitle: "SEO tool - find content -need to pay"
      },
      {
        link: "https://www.semrush.com/",
        title: "Sem rush",
        subtitle: "SEO tool - find content -need to pay"
      },
      {
        link: "https://ahrefs.com/",
        title: "Ahrefs",
        subtitle: "SEO tool - find content -need to pay"
      },
      {
        link: "https://www.microsiervos.com/archivo/internet/head-guia-cabecera-html.html",
        title: "Head, una guía",
        subtitle: "HEAD: una guía completa sobre lo que es obligatorio, recomendable y posible incluir en la cabecera del HTML"
      },
      {
        link: "https://medium.com/employbl/launch-a-website-with-a-custom-url-using-github-pages-and-google-domains-3dd8d90cc33b",
        title: "Article to launch a website",
        subtitle: "Launch a Website with a Custom URL using Github Pages and Google Domains"
      },
      {
        link: "https://www.hackerrank.com/",
        title: "Hackerrrank",
        subtitle: "Practice javascript"
      },
      {
        link: "https://docs.google.com/presentation/d/1ID0kFQpiRloiUy6-IauW9K7RCXW-SoED0OcAEwhCuqw/edit#slide=id.p",
        title: "Media Analytics",
        subtitle: "Presentación"
      }
    
    
  ]

  public cssTools = [
    {title:'Colours Neil Orange Peel',subtitle:'Colors and their names, rgb and hexa', link:'https://colours.neilorangepeel.com/'},
    {title:'Coloors',subtitle:'Color palettes, generate color schemes', link:'https://coolors.co/'},
    {title:'Randoma11y',subtitle:'Random palettes that contrast', link:'https://randoma11y.com/'},
   {title:'Specifity calculator',subtitle:'Understand CSS specificity', link:'https://specificity.keegan.st/'},
   {title:'CSS specificity',subtitle:'Featuring "The shining"', link:'https://cssspecificity.com/'},

     //{title:'',subtitle:'', link:''},

  ]
    

  constructor() { }

  ngOnInit() {
  }

}
