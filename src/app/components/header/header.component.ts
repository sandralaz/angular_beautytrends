import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  pageTitle = 'MY APP';

  userInfo = {
    image: 'https://i.pinimg.com/736x/66/90/50/66905013b796f82551e02aa7c26cf4db.jpg',
    role: 'SALES'
  }

  constructor() {}

  onDataCheck(e: any) {
    console.log(e);
  }
}
