import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Led } from '../interfaces/led';
import { LightPresetService } from '../services/light-preset.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


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

      
  constructor(
    private lightPresetService: LightPresetService,
    private fb: FormBuilder) { }
    
  ngOnInit() {
  }

  presetCreator = this.fb.group({
    colorName: [null, Validators.required],
    rgb: [null, [Validators.required]]
  });
    

  save(): void {
    this.lightPresetService.updatePreset(this.led).subscribe();
  }

  add() {
    console.warn(this.presetCreator.value);
    this.lightPresetService.addPreset(this.presetCreator.value).subscribe(led => {
      this.change.emit(led);
    });
    this.showAdd = false;
  }

}
