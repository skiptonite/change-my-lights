import { Component, OnInit } from '@angular/core';
import { Led } from '../interfaces/led';
import { LightPresetService } from '../services/light-preset.service';

@Component({
  selector: 'app-led-state',
  templateUrl: './led-state.component.html',
  styleUrls: ['./led-state.component.css']
})
export class LedStateComponent implements OnInit {

  led: Led;

  constructor(private lightPresetService: LightPresetService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.lightPresetService.get().subscribe(data => console.log(data));
  }

}
