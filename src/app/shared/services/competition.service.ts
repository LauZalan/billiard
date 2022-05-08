import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Competition } from '../models/Competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  collectionName = 'Competitions';

  constructor(private afs: AngularFirestore) { }

  create(competition: Competition) {
    return this.afs.collection<Competition>(this.collectionName).doc().set(competition);
  }

  getAll() {
    return this.afs.collection<Competition>(this.collectionName).valueChanges();
  }

  getByName(name: string) {
    return this.afs.collection<Competition>(this.collectionName).doc(name).valueChanges();
  }

  getByType(type: string) {
    return this.afs.collection<Competition>(this.collectionName, ref => 
      ref.where('name', "==", type)).valueChanges();
  }

  update(competition: Competition) {
    return this.afs.collection<Competition>(this.collectionName).doc(competition.name).set(competition);
  }

  delete(id: string) {
    return this.afs.collection<Competition>(this.collectionName).doc(id).delete();
  }
}
