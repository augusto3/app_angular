import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDocs, getDoc, where,addDoc, deleteDoc, query} from '@angular/fire/firestore';

const DATOS="productos";

@Injectable({providedIn: 'root'})
export class FirestoreService {
  constructor (private firestore:Firestore){}
  async getProductos():Promise<any>{
    return await getDocs(collection(this.firestore, DATOS));
  }
  async getProducto(id:string):Promise<any>{
    return await getDoc(doc(this.firestore, DATOS,id))
  }
}