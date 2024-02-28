import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: Item[] = [
    {
      id: 0,
      name: 'Сковорода универсальная Uakeen VK-345 22 см, алюминий',
      rating: 'Rating: 5.0',
      desc: 'материал: алюминий тип: универсальная диаметр: 22.0 см совместимые плиты: для газовых плит, для электрических плит, для стеклокерамических плит, для индукционных плит крышка: Да',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h3a/h97/64405557739550.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-universal-naja-uakeen-vk-345-22-sm-aljuminii-103829620/?c=750000000',
      likes:0,
    },
    {
      id: 1,
      name: 'Сковорода универсальная Мечта Гранит black С026802 26 см, алюминий',
      rating: 'Rating: 5.0',
      desc: `материал: алюминий 
      тип: универсальная
      диаметр: 26.0 см
      совместимые плиты: для газовых плит, для электрических плит, для стеклокерамических плит
      крышка: Да
      особенности: можно мыть в посудомоечной машине, ,съемная ручка`,
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h8e/h9d/63886432960542.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-universal-naja-mechta-granit-black-s026802-26-sm-aljuminii-100181663/?c=750000000',
      likes:0,
    },
    {
      id: 2,
      name: 'Сковорода блинная Vicalina VL0324 24 см, гранитная крошка',
      rating: 'Rating: 5.0',
      desc: 'материал: гранитная крошкатип: блиннаядиаметр: 24.0 смсовместимые плиты: для газовых плит, ,для электрических плит, ,для индукционных плит крышка: Нет',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/hc6/h94/85260288917534.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-blinnaja-vicalina-vl0324-24-sm-granitnaja-kroshka-100634453/?c=750000000',
      likes:0,
    },
    {
      id: 3,
      name: 'Сковорода универсальная Vicalina VL0228 28 см, гранитная крошка',
      rating: 'Rating: 5.0',
      desc: 'материал: гранитная крошка тип: универсальная диаметр: 28.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для стеклокерамических плит, ,для индукционных плит крышка: Да особенности: антипригарное покрытие',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h75/hc5/85260289048606.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-universal-naja-vicalina-vl0228-28-sm-granitnaja-kroshka-101137790/?c=750000000',
      likes:0,
    },
    {
      id: 4,
      name: 'Сковорода универсальная Vicalina 2000000011226 28 см, алюминий',
      rating: 'Rating: 5.0',
      desc: 'материал: алюминий тип: универсальнаядиаметр: 28.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для стеклокерамических плит, ,для галогеновых конфорок, ,для индукционных плит крышка: Да особенности: можно мыть в посудомоечной машине, ,съемная ручка, ,можно использовать в духовке',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/hee/hbe/84661138456606.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-universal-naja-vicalina-2000000011226-28-sm-aljuminii-100242923/?c=750000000',
      likes:0,
    },
    {
      id: 5,
      name: 'Сковорода гриль Vicalina VL4628 28 см, гранитная крошка',
      rating: 'Rating: 5.0',
      desc: 'материал: гранитная крошкатип: грильдиаметр: 28.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для стеклокерамических плит, ,для индукционных плит крышка: Да особенности: съемная ручка, ,антипригарное покрытие ',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h89/h42/64226090254366.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-gril-vicalina-vl4628-28-sm-granitnaja-kroshka-101137796/?c=750000000',
      likes:0,
    },
    {
      id: 6,
      name: 'Сковорода блинная IKEA Ховера 700.854.92 22 см, алюминий',
      rating: 'Rating: 5.0',
      desc: 'материал: алюминий тип: блинная диаметр: 22.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для стеклокерамических плит крышка: Нет',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h32/hb1/63814873415710.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-blinnaja-ikea-hovera-700-854-92-22-sm-aljuminii-15901606/?c=750000000',
      likes:0,
    },
    {
      id: 7,
      name: 'Сковорода блинная Vari 5093393 22 см, алюминий',
      rating: 'Rating: 5.0',
      desc: 'материал: алюминий тип: блинная диаметр: 22.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для стеклокерамических плит крышка: Нет',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h12/h4b/68696146903070.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-blinnaja-vari-5093393-22-sm-aljuminii-108775511/?c=750000000',
      likes:0,
    },
    {
      id: 8,
      name: 'Сковорода сотейник Vicalina Saute Pan VL4728 28 см, гранитная крошка',
      rating: 'Rating: 5.0',
      desc: 'материал: гранитная крошка тип: сотейник диаметр: 28.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для духовки крышка: Да особенности: можно мыть в посудомоечной машине, ,съемная ручка, ,антипригарное покрытие',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h8c/ha4/64001083047966.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-soteinik-vicalina-saute-pan-vl4728-28-sm-granitnaja-kroshka-100749020/?c=750000000',
      likes:0,
    },
    {
      id: 9,
      name: 'Сковорода универсальная Rondell Arabesco RDA-874 28 см, алюминий',
      rating: 'Rating: 5.0',
      desc: 'материал: алюминий тип: универсальная диаметр: 28.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для стеклокерамических плит, ,для галогеновых конфорок, ,для индукционных плиткрышка: Да особенности: можно мыть в посудомоечной машине',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h09/h7a/63780061544478.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-universal-naja-rondell-arabesco-rda-874-28-sm-aljuminii-15901008/?c=750000000',
      likes:0,
    }
  ];

  getAllHousingLocations(): Item[] {
    return this.housingLocationList;
  }

  getId(id: number): Observable<Item | undefined> {
    const item = this.housingLocationList.find((item) => item.id === id);
    return of(item); // Convert to Observable using 'of' from RxJS
  }
  increaseLikes(id: number): void {
    const item = this.housingLocationList.find((item) => item.id === id);
    if (item) {
      item.likes++;
    }
  }
  removeItem(id: number): void {
    const index = this.housingLocationList.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.housingLocationList.splice(index, 1);
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/