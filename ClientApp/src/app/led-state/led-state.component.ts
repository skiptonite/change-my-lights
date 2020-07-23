import { Component, OnInit } from '@angular/core';
import { Led } from '../interfaces/led';
import { LightPresetService } from '../services/light-preset.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-led-state',
  templateUrl: './led-state.component.html',
  styleUrls: ['./led-state.component.css']
})
export class LedStateComponent implements OnInit {

  leds: Led[];
  selectedPreset: Led;
  showVar: boolean = false;

  constructor(private lightPresetService: LightPresetService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getData();
  }

  updateLedArray(event) {
    if (event) {
      this.getData();
    }
    
  }

  getData(): void {
    this.lightPresetService.getPresets().subscribe(leds => this.leds = leds);
  }

  onSelect(led: Led): void {
    this.selectedPreset = led;
    this.messageService.add(`LedStateComponent: Selected preset id${led.id}`);
  }

  delete(led: Led): void {
    this.leds = this.leds.filter(l => l !== led);
    this.lightPresetService.deletePreset(led).subscribe();
  }

  toggleChild() {
    this.showVar = !this.showVar;
  }

}
