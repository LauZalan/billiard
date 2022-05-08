import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Drink } from '../models/Drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  collectionName = 'Drinks';

  constructor(private afs: AngularFirestore) { }

  create(drink: Drink) {
    return this.afs.collection<Drink>(this.collectionName).doc().set(drink);
  }

  getAll() {
    return this.afs.collection<Drink>(this.collectionName).valueChanges();
  }

  getByType(type: string) {
    return this.afs.collection<Drink>(this.collectionName, ref => 
      ref.where('type', "==", type).orderBy('price', 'asc')).valueChanges();
  }

  update(drink: Drink) {
    return this.afs.collection<Drink>(this.collectionName).doc(drink.id).set(drink);
  }

  delete(id: string) {
    return this.afs.collection<Drink>(this.collectionName).doc(id).delete();
  }
}
