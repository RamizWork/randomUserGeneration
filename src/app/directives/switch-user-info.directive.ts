import {Directive, ElementRef, HostListener, Inject, Injectable, Input, OnInit, Output, Renderer2} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable()
@Directive({
  selector: '[switcher]'
})

export class SwitchUserInfoDirective implements OnInit {

  descriptionLi: any;
  iconLI: any;
  searchClass: any;
  @Output() showDescriptionInfo: boolean | undefined;
  @Input('iconListName') iconListName: string | undefined;
  @Input('description') description: string | undefined;
  @Input('ulTag') ulTag: HTMLUListElement | undefined;

  constructor(@Inject(DOCUMENT) private document: HTMLDocument, private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.iconLI = this.document.querySelectorAll('li.icon__list_li');
    this.descriptionLi = this.document.querySelectorAll('li.description__li');
  }

  @HostListener('mouseover') switchInfoUser() {
    if (this.el.nativeElement.classList[0] === 'icon__list_li' && this.el.nativeElement.classList[2] !== 'active') {

      for (let i = 0; i < this.iconLI.length; i++) {
        this.renderer.removeClass(this.iconLI[i], 'active');
      }
      this.renderer.addClass(this.el.nativeElement, 'active');
      this.showDescription();

    }
  }

  showDescription() {
    for (let a = 0; a < this.iconLI.length; a++) {
      if (this.iconLI[a].classList[2] === 'active') {
        this.searchClass = this.iconLI[a].classList[1];
      }
    }

    for (let b = 0; b < this.descriptionLi.length; b++) {
      if (this.descriptionLi[b].classList[1] === this.searchClass) {
        this.renderer.addClass(this.descriptionLi[b], 'active');
      } else {
        this.renderer.removeClass(this.descriptionLi[b], 'active');
      }
    }
  }
}
