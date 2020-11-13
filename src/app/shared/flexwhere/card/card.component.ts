import { Component, OnInit, Input } from '@angular/core';
import { FwCardOptions } from './card-options.interface';

@Component({
  selector: 'fw-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class FwCardComponent {
  
  @Input() card: FwCardOptions;
}