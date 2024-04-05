import {
  Directive,
  HostBinding,
  HostListener,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appFileUploadDragAndDrop]',
  standalone: true,
})
export class FileUploadDragAndDropDirective {
  @Output() fileDropped = new EventEmitter<FileList>();

  //@HostBinding('class.fileover') fileOver: boolean = false;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'white';
  }

  private inputFIleBg(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  // Dragover listener
  @HostListener('dragover') onDragOver() {
    this.inputFIleBg('lightgray');
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    this.inputFIleBg('white');
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt: any) {
    this.inputFIleBg('lightblue');

    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
