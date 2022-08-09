import {Directive, ElementRef, HostListener, Inject, Injectable, Input, OnInit, Renderer2} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable()
@Directive({
  selector: '[switcher]'
})

export class SwitchUserInfoDirective implements OnInit {

  allUserTag: any;
  @Input('typeName') typeName: string | undefined;
  @Input('ulTag') ulTag: HTMLUListElement | undefined;

  constructor(@Inject(DOCUMENT) private document: HTMLDocument, private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.allUserTag = this.document.querySelectorAll('li.icon__list_li');
  }

  @HostListener('mouseover') switchInfoUser() {
    if (this.el.nativeElement.classList[0] === 'icon__list_li' && this.el.nativeElement.classList[2] !== 'active') {

      for (let i = 0; i < this.allUserTag.length; i++) {
        this.renderer.removeClass(this.allUserTag[i], 'active');
      }
      this.renderer.addClass(this.el.nativeElement, 'active');
    }
  }

}
