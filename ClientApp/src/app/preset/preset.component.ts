import { Component, OnInit, Input } from '@angular/core';
import { Led } from '../interfaces/led';
import { LightPresetService } from '../services/light-preset.service';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.css']
})

  export class PresetComponent implements OnInit {

  @Input() led: Led;
  @Input() showAdd: boolean;

  constructor(private lightPresetService: LightPresetService) { }

  ngOnInit() {
  }

  save(): void {
    this.lightPresetService.updatePreset(this.led).subscribe();
  }

  add(colorName: string, rgb: string): void {
    this.lightPresetService.addPreset({ rgb, colorName } as Led).subscribe(led => {  });
    this.showAdd = false
  }

}
