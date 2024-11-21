import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private CharStringForCode = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private key: string = '1a2ab3b4n5n6n7n8n9m0'


  constructor() { }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }
  private decrypt(txt: string) {
    return CryptoJS.AES.decrypt(txt, this.key).toString(CryptoJS.enc.Utf8);
  }


  
}
