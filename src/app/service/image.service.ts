import { Injectable, Inject } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor( private storage: Storage) { }
  
  public upLoadImage($event:any, name:string,id:number){
  const file = $event.target.files[0];
  const imgRef = ref( this.storage, `imagen/`+ name)
  uploadBytes(imgRef, file)
  .then(response => {this.getImages()})
  .catch(error => console.error(error)
  )
  }
  getImages(){
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("la url es: " + this.url);
      }
    }) 
    .catch(error => console.error(error))
  } 
}