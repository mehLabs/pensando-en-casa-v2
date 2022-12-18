import { Component } from '@angular/core';
import { Client } from '../../models/client.model';
import { AdminClientsService } from '../../services/admin-clients.service';

type Column = {
  name: string;
  title: string;
};

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent {
  constructor(private clientsService: AdminClientsService) {
    this.columns = [];
    clientsService.getClients().subscribe((clients) => {
      if (clients.length > 0) {
        this.clients = clients;
        this.originalClients = clients;
      }
    });
    clientsService.getColumns().subscribe((columns) => {
      this.columns = columns;
    });
  }

  clients: Client[] = [];
  originalClients: Client[] = [];

  sorting() {}

  columns: Column[];

  getColumnNames(columns: Column[]) {
    return columns.map((column) => column.name);
  }

  cleanOutput(element: any) {
    return element == false && element !== 0 ? '-' : element;
  }

  search(found: any[]) {
    this.clients = this.originalClients;
    let ordersFiltered: Client[] = [];
    found.forEach((id) => {
      ordersFiltered.push(
        this.clients.filter((order: Client) => order.id === id)[0]
      );
    });
    this.clients = ordersFiltered;
  }
}
