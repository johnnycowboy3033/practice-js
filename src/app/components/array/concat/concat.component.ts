import { Component, OnInit } from '@angular/core';

import { ArrayModule } from '../../../modules/array/array.module'
import { ArrayService } from '../../../services/array.service'

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent extends ArrayModule implements OnInit {

  ngOnInit(): void {
  }

  constructor(arrayService : ArrayService){
    super(arrayService);

    this.title = arrayService.getComponentName().Concatenate;
  };

}
