import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlenderService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected BlenderList: Item[] = [
    {
      id: 0,
      name: 'Блендер SM-7700 серебристый',
      rating: 'Rating: 4.5',
      desc: 'тип: стационарный мощность: 1000.0 Вт управление: механическое количество скоростей: 3 измельчитель: Да цвет: серебристый',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000',
      likes:0,
    },
    {
      id: 1,
      name: 'Блендер Sunqar PRO M8 серый',
      rating: 'Rating: 5.0',
      desc: 'тип: стационарный мощность: 1500.0 Вт управление: механическое количество скоростей: 5 измельчитель: Да цвет: серый',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h53/h54/80944976101406.png?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/sunqar-pro-m8-seryi-110564826/?c=750000000',
      likes:0,
    },
    {
      id: 2,
      name: 'Блендер Braun MQ 5235 белый, серый',
      rating: 'Rating: 4.5',
      desc: 'тип: погружной мощность: 1000.0 Вт управление: механическое количество скоростей: 21 измельчитель: Да цвет: белый, ,серый',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/hee/h94/63861302263838.jpg?format=gallery-large`,
      link: 'https://kaspi.kz/shop/p/braun-mq-5235-belyi-seryi-100435308/?c=750000000',
      likes:0,
    },
    {
      id: 3,
      name: 'Блендер Погружной Slaouwo HB-2075 белый',
      rating: 'Rating: 5.0',
      desc: 'тип: погружной мощность: 800.0 Вт управление: электронное количество скоростей: 6 измельчитель: Да цвет: белый',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/pogruzhnoi-slaouwo-hb-2075-belyi-108151055/?c=750000000',
      likes:0,
    },
    {
      id: 4,
      name: 'Блендер HAROOKO A9 черный',
      rating: 'Rating: 5.0',
      desc: 'тип: портативный мощность: 75.0 Вт управление: механическое количество скоростей: 1 измельчитель: Да цвет: черный',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h87/ha9/83061892743198.png?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/harooko-a9-chernyi-110414586/?c=750000000',
      likes:0,
    }];

    getAllBlenders(): Item[] {
      return this.BlenderList;
    }
  
    getId(id: number): Observable<Item | undefined> {
      const item = this.BlenderList.find((item) => item.id === id);
      return of(item); // Convert to Observable using 'of' from RxJS
    }
    increaseLikes(id: number): void {
      const item = this.BlenderList.find((item) => item.id === id);
      if (item) {
        item.likes++;
      }
    }
    removeItem(id: number): void {
      const index = this.BlenderList.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.BlenderList.splice(index, 1);
      }
    }
  }
  