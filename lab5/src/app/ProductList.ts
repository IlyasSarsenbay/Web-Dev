import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { Item } from './item';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Сковорода универсальная Uakeen VK-345 22 см, алюминий',
      city: 'Rating: 5.0',
      state: 'материал: алюминий тип: универсальная диаметр: 22.0 см совместимые плиты: для газовых плит, для электрических плит, для стеклокерамических плит, для индукционных плит крышка: Да',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h3a/h97/64405557739550.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-universal-naja-uakeen-vk-345-22-sm-aljuminii-103829620/?c=750000000',
    },
    {
      id: 1,
      name: 'Сковорода универсальная Мечта Гранит black С026802 26 см, алюминий',
      city: 'Rating: 5.0',
      state: `материал: алюминий 
      тип: универсальная
      диаметр: 26.0 см
      совместимые плиты: для газовых плит, для электрических плит, для стеклокерамических плит
      крышка: Да
      особенности: можно мыть в посудомоечной машине, ,съемная ручка`,
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h8e/h9d/63886432960542.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-universal-naja-mechta-granit-black-s026802-26-sm-aljuminii-100181663/?c=750000000',
    },
    {
      id: 2,
      name: 'Сковорода блинная Vicalina VL0324 24 см, гранитная крошка',
      city: 'Rating: 5.0',
      state: 'материал: гранитная крошкатип: блиннаядиаметр: 24.0 смсовместимые плиты: для газовых плит, ,для электрических плит, ,для индукционных плит крышка: Нет',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/hc6/h94/85260288917534.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-blinnaja-vicalina-vl0324-24-sm-granitnaja-kroshka-100634453/?c=750000000',
    },
    {
      id: 3,
      name: 'Сковорода универсальная Vicalina VL0228 28 см, гранитная крошка',
      city: 'Rating: 5.0',
      state: 'материал: гранитная крошка тип: универсальная диаметр: 28.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для стеклокерамических плит, ,для индукционных плит крышка: Да особенности: антипригарное покрытие',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h75/hc5/85260289048606.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-universal-naja-vicalina-vl0228-28-sm-granitnaja-kroshka-101137790/?c=750000000',
    },
    {
      id: 4,
      name: 'Сковорода универсальная Vicalina 2000000011226 28 см, алюминий',
      city: 'Rating: 5.0',
      state: 'материал: алюминий тип: универсальнаядиаметр: 28.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для стеклокерамических плит, ,для галогеновых конфорок, ,для индукционных плит крышка: Да особенности: можно мыть в посудомоечной машине, ,съемная ручка, ,можно использовать в духовке',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/hee/hbe/84661138456606.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-universal-naja-vicalina-2000000011226-28-sm-aljuminii-100242923/?c=750000000',
    },
    {
      id: 5,
      name: 'Сковорода гриль Vicalina VL4628 28 см, гранитная крошка',
      city: 'Rating: 5.0',
      state: 'материал: гранитная крошкатип: грильдиаметр: 28.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для стеклокерамических плит, ,для индукционных плит крышка: Да особенности: съемная ручка, ,антипригарное покрытие ',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h89/h42/64226090254366.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-gril-vicalina-vl4628-28-sm-granitnaja-kroshka-101137796/?c=750000000',
    },
    {
      id: 6,
      name: 'Сковорода блинная IKEA Ховера 700.854.92 22 см, алюминий',
      city: 'Rating: 5.0',
      state: 'материал: алюминий тип: блинная диаметр: 22.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для стеклокерамических плит крышка: Нет',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h32/hb1/63814873415710.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-blinnaja-ikea-hovera-700-854-92-22-sm-aljuminii-15901606/?c=750000000',
    },
    {
      id: 7,
      name: 'Сковорода блинная Vari 5093393 22 см, алюминий',
      city: 'Rating: 5.0',
      state: 'материал: алюминий тип: блинная диаметр: 22.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для стеклокерамических плит крышка: Нет',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h12/h4b/68696146903070.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-blinnaja-vari-5093393-22-sm-aljuminii-108775511/?c=750000000',
    },
    {
      id: 8,
      name: 'Сковорода сотейник Vicalina Saute Pan VL4728 28 см, гранитная крошка',
      city: 'Rating: 5.0',
      state: 'материал: гранитная крошка тип: сотейник диаметр: 28.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для духовки крышка: Да особенности: можно мыть в посудомоечной машине, ,съемная ручка, ,антипригарное покрытие',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h8c/ha4/64001083047966.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-soteinik-vicalina-saute-pan-vl4728-28-sm-granitnaja-kroshka-100749020/?c=750000000',
    },
    {
      id: 9,
      name: 'Сковорода универсальная Rondell Arabesco RDA-874 28 см, алюминий',
      city: 'Rating: 5.0',
      state: 'материал: алюминий тип: универсальная диаметр: 28.0 см совместимые плиты: для газовых плит, ,для электрических плит, ,для стеклокерамических плит, ,для галогеновых конфорок, ,для индукционных плиткрышка: Да особенности: можно мыть в посудомоечной машине',
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h09/h7a/63780061544478.jpg?format=gallery-medium`,
      link: 'https://kaspi.kz/shop/p/skovoroda-universal-naja-rondell-arabesco-rda-874-28-sm-aljuminii-15901008/?c=750000000',
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
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
      photo: `https://resources.cdn-kaspi.kz/img/m/p/h01/hc3/81692716957726.jpg?format=gallery-medium`,
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
  
    getHousingLocationById(id: number): Item | undefined {
      return this.BlenderList.find(Item => Item.id === id);
    }
  }