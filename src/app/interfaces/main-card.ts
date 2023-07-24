import { DetailsItem } from './DetailsItem';
import { ImagesItem } from './ImagesItem';

export interface MainCard {
  images: ImagesItem[];
  details: DetailsItem[];
  price: string;
  title: string;
  location: string;
  medal: boolean;
  verified: boolean;
}
