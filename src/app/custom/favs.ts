import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFavs]',
  standalone: false,
})
export class Favs {

  private isLiked: boolean = false;

  // this input will accept color value from the component where this directive is applied
  //@input decorator is used to define the input property for the directive and expose it to the component
  @Input('appFavs')
  color: string |undefined;

  constructor(private eleRef: ElementRef ) { 
    this.update();
    // eleRef.nativeElement.style.color = 'red';
  }

  @HostListener('click')
  onClick() {

   this.update();
    }

    update(){
      this.isLiked = !this.isLiked; // Change from false to true

      if(this.isLiked){
        this.eleRef.nativeElement.style.color = this.color;
        this.eleRef.nativeElement.value = 'Unlike'; 
      }
      else{
        this.eleRef.nativeElement.style.color = 'blue';
        this.eleRef.nativeElement.value = 'Like'; 
      }
    }
  }

//for indentifying the element we need Inject ElementRef- which will allow to identify where this directive is applied
//What is HostListener- it is used to listen to the events on the host element where this directive is applied
