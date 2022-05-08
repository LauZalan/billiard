import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Table } from '../models/Table';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  collectionName = 'Tables';

  constructor(private afs: AngularFirestore) { }

  create(table: Table){
    return this.afs.collection<Table>(this.collectionName).doc().set(table)
  }

  getAll(){
    return this.afs.collection<Table>(this.collectionName).valueChanges();
  }

  getAllFree(res: boolean){
    return this.afs.collection<Table>(this.collectionName, ref =>
      ref.where('reserved', "==", res)).valueChanges();
  }

  getById(id: string){
    return this.afs.collection<Table>(this.collectionName).doc(id).valueChanges();
  }

  getByType(type: string) {
    return this.afs.collection<Table>(this.collectionName ,ref => 
      ref.where('type', "==", type)).valueChanges();
  }

  update(table: Table){
    return this.afs.collection<Table>(this.collectionName).doc(table.name).set(table)
  }

  delete(id: string){
    return this.afs.collection<Table>(this.collectionName).doc(id).delete();
  }
}
