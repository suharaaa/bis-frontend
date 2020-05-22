import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(
    private afStorage: AngularFireStorage
  ) { }

  upload(uid, file) {
    const ref = this.afStorage.ref(`/bis/${uid}.jpeg`);
    return ref.put(file);
  }

  getDownloadUrl(fileName) {
    const ref = this.afStorage.ref(`/bis/${fileName}.jpeg`);
    return ref.getDownloadURL();
  }
}
