import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoffeMachineService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected CoffeMachineList: Item[] = [
    {
      id: 0,
      name: 'Кофемашина SOKANY SK-6862 серебристый',
      rating: 'Rating: 4.5',
      desc: 'вид: автоматическая тип: кофемашина приготовление эспрессо: автоматическое используемый кофе: молотый возможность приготовления капучино: Да противокапельная система: Да цвет: серебристый',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/he4/hf1/79877587238942.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/kofemashina-sokany-sk-6862-serebristyi-109791914/?c=750000000',
      likes:0,
    },
    {
      id: 1,
      name: 'Кофемашина Philips LatteGo EP3241 черный',
      rating: 'Rating: 4.5',
      desc: 'вид: автоматическая тип: кофемашина приготовление эспрессо: автоматическое используемый кофе: молотый, ,зерновой возможность приготовления капучино: Да противокапельная система: Нет цвет: черный',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h65/h23/63831906779166.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/kofemashina-philips-lattego-ep3241-chernyi-4400565/?c=750000000',
      likes:0,
    },
    {
      id: 2,
      name: 'Кофемашина DSP KA-3092 черный',
      rating: 'Rating: 5.0',
      desc: 'вид: рожковая тип: кофемашинаприготовление эспрессо: автоматическое используемый кофе: молотый возможность приготовления капучино: Да противокапельная система: Да цвет: черный',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h01/hc3/81692716957726.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/kofemashina-dsp-ka-3092-chernyi-111322478/?c=750000000',
      likes:0,
    },
    {
      id: 3,
      name: 'Кофемашина Philips EP1224 Series 1200 черный',
      rating: 'Rating: 5.0',
      desc: 'вид: автоматическая тип: кофемашина приготовление эспрессо: автоматическое используемый кофе: молотый, ,зерновой возможность приготовления капучино: Да противокапельная система: Нет цвет: черный',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h29/hd9/63921244897310.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/kofemashina-philips-ep1224-series-1200-chernyi-100563966/?c=750000000',
      likes:0,
    },
    {
      id: 4,
      name: 'Кофемашина Hipresso CM1001 черный',
      rating: 'Rating: 5.0',
      desc: 'вид: автоматическая тип: кофемашина приготовление эспрессо: автоматическое используемый кофе: молотый, ,зерновой возможность приготовления капучино: Да противокапельная система: Нет цвет: черный',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/hcd/h72/64409002868766.jpg?format=gallery-large`,
      link: 'https://kaspi.kz/shop/p/kofemashina-hipresso-cm1001-chernyi-106248969/?c=750000000',
      likes:0,
    }];
    getAllCoffeMachines(): Item[] {
      return this.CoffeMachineList;
    }
  
    getId(id: number): Observable<Item | undefined> {
      const item = this.CoffeMachineList.find((item) => item.id === id);
      return of(item); // Convert to Observable using 'of' from RxJS
    }
    increaseLikes(id: number): void {
      const item = this.CoffeMachineList.find((item) => item.id === id);
      if (item) {
        item.likes++;
      }
    }
    removeItem(id: number): void {
      const index = this.CoffeMachineList.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.CoffeMachineList.splice(index, 1);
      }
    }
  }