import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
  }

  //Elementos para el dropdown---------------------------------------------------------
  options: Array<String> = ["Casa", "Deportes", "Electrónicos"];
  
  public currentValue:any;
  public dropdownOpen: boolean = false;
  public get dropdownElement(): Element {return this.elem.nativeElement.querySelector('.dropdown-list')}
  private currentIndex = -1;

  closeDropdown() {
    this.dropdownElement.setAttribute('aria-expanded', "false");
    this.currentIndex = -1;
    this.dropdownOpen = false;
  }

  selectByIndex(i: number) {
    let value = this.options[i];
    this.select(value);
  }

  select(value:any) {
    this.currentValue = value;
    this.closeDropdown();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownElement.setAttribute('aria-expanded', this.dropdownOpen ? "true" : "false");
  }
}
