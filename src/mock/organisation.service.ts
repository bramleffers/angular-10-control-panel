import { Injectable } from '@angular/core';
import { of as observableOf, Observable, of } from 'rxjs';
import * as OrganisationData from './data/cc.data';
import * as IpData from './data/ip.data';

@Injectable()
export class OrganisationService {

  private organisations = OrganisationData.default;

  private totalOrganisations = this.organisations.count;

  getOrganisations(): Observable<any> {
    return of(this.organisations);
  }
  
  getOrganisationIp(): Observable<any> {
    return observableOf(IpData);
  }
}
