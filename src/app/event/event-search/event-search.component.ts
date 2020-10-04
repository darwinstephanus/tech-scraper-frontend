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

  constructor( private eventService: EventService) { }

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
}
