import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TosterService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected TosterList: Item[] = [
    {
      id: 0,
      name: 'Тостер Vitek VT-7170 серебристый',
      rating: 'Rating: 5.0',
      desc: 'тип управления: механическое количество тостов: 2 поддон для крошек: Да материал корпуса: металл цвет: серебристый',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h13/h2a/64215853334558.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/vitek-vt-7170-serebristyi-102738917/?c=750000000',
      likes:0,
    },
    {
      id: 1,
      name: 'Proliss PRO-010 черный',
      rating: 'Rating: 4.5',
      desc: `тип управления: механическое
      количество тостов: 2
      поддон для крошек: Да
      материал корпуса: пластик
      цвет: черный`,
      photo: `https://resources.cdn-kaspi.kz/img/m/p/hca/had/64369485742110.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/proliss-pro-010-chernyi-103106632/?c=750000000',
      likes:0,
    },
    {
      id: 2,
      name: 'Philips HD 2581/00 белый',
      rating: 'Rating: 5.0',
      desc: 'тип управления: механическое количество тостов: 2 поддон для крошек: Да материал корпуса: пластик цвет: белый',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h0a/hf3/63764400570398.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/philips-hd-2581-00-belyi-11000101/?c=750000000',
      likes:0,
    },
    {
      id: 3,
      name: 'Vitek VT-7169 черный',
      rating: 'Rating: 5.0',
      desc: 'тип управления: механическое количество тостов: 2 поддон для крошек: Нет материал корпуса: пластик цвет: черный',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h26/h0a/63882102341662.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/vitek-vt-7169-chernyi-101964651/?c=750000000',
      likes:0,
    },
    {
      id: 4,
      name: 'Тостер Smeg TSF01CREU бежевый',
      rating: 'Rating: 5.0',
      desc: 'тип управления: электронное количество тостов: 2 поддон для крошек: Да материал корпуса: металл цвет: бежевый',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h50/h97/65798105104414.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/smeg-tsf01creu-bezhevyi-11000154/?c=750000000',
      likes:0,
    }];
    getAllTosters(): Item[] {
      return this.TosterList;
    }
  
    getId(id: number): Observable<Item | undefined> {
      const item = this.TosterList.find((item) => item.id === id);
      return of(item); // Convert to Observable using 'of' from RxJS
    }
    increaseLikes(id: number): void {
      const item = this.TosterList.find((item) => item.id === id);
      if (item) {
        item.likes++;
      }
    }
    removeItem(id: number): void {
      const index = this.TosterList.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.TosterList.splice(index, 1);
      }
    }
  }