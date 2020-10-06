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
    // this.eventService.getEventsByDTO(this.eventDTO).subscribe(
    //   response => this.handleSuccessfulResponse(response),
    // );
  }

  handleSuccessfulResponse(response) {
    // this.events.forEach{
    //   element => element.endDate = element.endDate.substring(0,10);
    // }
    this.events = response;
    // this.events.map(event => {
    //     event.endDate = event.endDate.substring(0, 5);
    // })
    // for (i = 0; i < this.events.length; i++){
    //   this.events.
    // }
  }

  getEventsByDTO(): void {
    this.eventService.getEventsByDTO(this.eventDTO)
      .subscribe(
        data => this.handleSuccessfulResponse(data),
    );
  }

  fetchEvents(): void{
    // console.log('sortBy: ', this.sortBy);
    // console.log('order: ',this.order);
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
