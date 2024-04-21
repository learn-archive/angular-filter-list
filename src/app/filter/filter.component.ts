import { Component, OnInit } from '@angular/core';
import { Item, items } from './items';
import { FilterState } from './models';

@Component({
  standalone: true,
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filteredItems: Item[] = [...items];

  filterState: FilterState = {
    search: '',
    color: {
      red: false,
      blue: false,
      green: false,
    },
  };

  constructor() {}

  ngOnInit() {}

  toggleColorState(name: string) {
    this.filterState.color[name] = !this.filterState.color[name];
    console.log('color: ', this.filterState.color);
  }

  filter() {
    const collectedTrueKeys = {
      color: [],
    };
    const { color, gender, material, category } = this.state.passingTags;
    for (let colorKey in color) {
      if (color[colorKey]) collectedTrueKeys.color.push(colorKey);
    }
    return collectedTrueKeys;
  }
}
