import { ActivatedRoute, Router } from '@angular/router';
import { EventService, EventDTO } from './../../services/event.service';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {

  eventDTO: EventDTO = new EventDTO('', '', '', '', '', '');
  events: Event[];
  sortBy: string;
  order: string;

  constructor( private eventService: EventService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  handleSuccessfulResponse(response) {
    this.events = response;
  }

  getEventsByDTO(): void {
    this.eventService.getEventsByDTO(this.eventDTO)
      .subscribe(
        data => this.handleSuccessfulResponse(data),
    );
  }

  fetchEvents(): void{
    this.eventService.getEventsByDTOSorted(this.eventDTO, this.sortBy, this.order).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  sortEvents(sortBy, order): void {
    this.sortBy = sortBy;
    this.order = order;
    this.fetchEvents();

    this.router.navigate(
      [], {
        relativeTo: this.activatedRoute,
        queryParams: { sortBy, order  },
        queryParamsHandling: 'merge'
      });
  }
}
