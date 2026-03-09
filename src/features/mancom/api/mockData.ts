import type { MancomData } from '../types';
import type { HeaderData } from '../../../shared/types/header';

export const HEADER_DATA: HeaderData = {
    badge: null,
    title: [],
    background_image_url: "assets/images/headers/mancom.png",

};

export const mockMancomData: MancomData = {
    hero: {
        title: "", // Will be localized in component
        image: "assets/images/mancom/1.jpeg"
    }
};
