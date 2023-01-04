import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { adminTransitionAnimations } from './admin-transition-animations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [],
})
export class AdminComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  expanded: boolean = true;

  links: any[] = [
    { title: 'Órdenes', link: 'orders', icon: 'local_shipping' },
    {
      title: 'Inventario',
      link: 'inventory',
      svg: 'M11 21H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.175q.275-.875 1.075-1.438Q11.05 1 12 1q1 0 1.788.562.787.563 1.062 1.438H19q.825 0 1.413.587Q21 4.175 21 5v5h-2V5h-2v3H7V5H5v14h6Zm4.5-1.075-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4ZM12 5q.425 0 .713-.288Q13 4.425 13 4t-.287-.713Q12.425 3 12 3t-.712.287Q11 3.575 11 4t.288.712Q11.575 5 12 5Z',
    },
    { title: 'Clientes', link: 'clients', icon: 'person_search' },
    {
      title: 'Categorías',
      link: 'categories',
      icon: 'category',
    },
  ];

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
