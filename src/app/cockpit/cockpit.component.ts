import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
// import {  } from 'stream';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    // @Output used for calling the property on different components
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onServerAdded(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
    this.serverCreated.emit({
    serverName: nameInput.value, 
    serverContent: this.serverContentInput.nativeElement.value})
  }

  onBlueprintAdded(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value})
  }
}
