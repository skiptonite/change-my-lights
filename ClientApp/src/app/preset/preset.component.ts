import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Led } from '../interfaces/led';
import { LightPresetService } from '../services/light-preset.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.css']
})

  export class PresetComponent implements OnInit {

  @Input() led: Led;
  @Input() showAdd: boolean;

  @Output()
  change: EventEmitter<Led> = new EventEmitter<Led>();

      
  constructor(private lightPresetService: LightPresetService) { }
    
  ngOnInit() {
  }

  /*presetEditor = new FormGroup({
    colorName: new FormControl(''),
    rgb: new FormControl('')
  });*/
    

  save(): void {
    this.lightPresetService.updatePreset(this.led).subscribe();
  }

  add(colorName: string, rgb: string): void {
    colorName = colorName.trim();
    rgb = rgb.trim();
    /*if (!name || !rgb) { return };*/
    this.lightPresetService.addPreset({ rgb, colorName } as Led).subscribe(led => {
      this.change.emit(led);
    });
    this.showAdd = false;
  }

}
