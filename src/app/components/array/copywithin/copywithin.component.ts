import {Component, OnInit} from '@angular/core';

import { ArrayModule } from '../../../modules/array/array.module'
import { ArrayService } from '../../../services/array.service'

@Component({
  selector: 'app-copywithin',
  templateUrl: './copywithin.component.html',
  styleUrls: ['./copywithin.component.css']
})
export class CopywithinComponent extends ArrayModule implements OnInit{

  ngOnInit(): void {
  }

  constructor(arrayService : ArrayService){
    super(arrayService);

    this.title = arrayService.getComponentNames().CopyWithin;

    arrayService.sendActiveComponent(this.title);
  };
}
