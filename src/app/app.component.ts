import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild('scrollMyWallets', { read: ElementRef }) public scrollMyWallets: ElementRef<any>;
  @ViewChild('scrollOtherWallets', { read: ElementRef }) public scrollOtherWallets: ElementRef<any>;

  public arrayImage = [

    'https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg',

    'https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg',

    'https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg',

    'https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg',

    'https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg',

    'https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg',

    'https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg',

  ];

  ngAfterViewInit(): void {

  }
  title = 'Carousel-Project';

  scrollWallets(wallet, optionSide) {

    let value = 220;

    if (wallet === 'up') {

      if (optionSide === 'right') {

        value = - 220;

      }

      this.scrollMyWallets.nativeElement.scrollTo({ left: (this.scrollMyWallets.nativeElement.scrollLeft + value), behavior: 'smooth' });

    } else {

      if (optionSide === 'right') {

        value = - 220;

      }

      this.scrollOtherWallets.nativeElement.scrollTo({ left: (this.scrollOtherWallets.nativeElement.scrollLeft + value), behavior: 'smooth' });

    }

  }
  constructor(){
      
  }

}
