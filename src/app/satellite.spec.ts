// import { Satellite } from './satellite';

interface SatelliteInterface {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;
}

class Satellite implements SatelliteInterface{
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;
  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.name = name;
    this.orbitType = orbitType;
    this.type = type
    this.operational = operational;
    this.launchDate = launchDate;
  }

}

export class Satellite {
  
}
