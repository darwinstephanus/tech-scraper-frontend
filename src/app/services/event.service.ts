import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Event {
  constructor(
    public eventId: EventId,
    public location: string,
    public endDate: string,
    public link: string
  ) { }
}

export class EventId {
  constructor(
    public name: string,
    public startDate: string
  ) {}
}

export class EventDTO {
  constructor(
    public name: string,
    public location: string,
    public startDate1: string,
    public startDate2: string,
    public endDate1: string,
    public endDate2: string
  ) { }
}

export class EventDTOSorted {
  constructor(
    public name: string,
    public location: string,
    public startDate1: string,
    public startDate2: string,
    public endDate1: string,
    public endDate2: string,
    public sortedBy: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  private urlBackEnd = 'http://localhost:8080/';

  public getEvents() {
    return this.httpClient.get<Event[]>(this.urlBackEnd + 'api/events');
  }

  // public getEventsSortedByName(name) {
  //   return this.httpClient.get<Event>('http://localhost:8080/api/events' + '/?sort=' + name );
  // }

  // public getEventsSortedByLocation(location) {
  //   return this.httpClient.get<Event[]>('http://localhost:8080/api/events' + '/?sort=' + location );
  // }

  // public getEventsByName(name) {
  //   return this.httpClient.get<Event[]>('http://localhost:8080/api/events' + '/?username=' + name );
  // }

  // public getEventsByLocation(location) {
  //   return this.httpClient.get<Event[]>('http://localhost:8080/api/events' + '/?username=' + location );
  // }

  public getEventsByDTO(eventDTO: EventDTO) {
    return this.httpClient.get<Event[]>('http://localhost:8080/api/events' + '/?name=' + eventDTO.name + '&location='
    + eventDTO.location + '&startDateGt=' + eventDTO.startDate1 + '&startDateLt=' + eventDTO.startDate2 + '&endDateGt='
    + eventDTO.endDate1 + '&endDateLt=' + eventDTO.endDate2 );
  }

  public getEventsSorted(sortBy) {
    return this.httpClient.get<Event[]>('http://localhost:8080/api/events' + '/?sort=' + sortBy);
  }

  public getEventsByDTOSorted(eventDTOSorted: EventDTOSorted) {
    return this.httpClient.get<Event[]>('http://localhost:8080/api/events' + '/?name=' + eventDTOSorted.name + '&location='
    + eventDTOSorted.location + '&startDateGt=' + eventDTOSorted.startDate1 + '&startDateLt=' + eventDTOSorted.startDate2 + '&endDateGt='
    + eventDTOSorted.endDate1 + '&eventDateLt=' + eventDTOSorted.endDate2 + '&sort=' + eventDTOSorted.sortedBy);
  }
}
