/**
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: Cable
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import {MarvelCreatorList} from './creatorList';
import {MarvelImage} from './image';
import {MarvelSeriesSummary} from './seriesSummary';

import {MarvelCharacterList} from './characterList';
import {MarvelEventList} from './eventList';
import {MarvelStoryList} from './storyList';


export interface MarvelComic {
    id?: number;
    digitalId?: number;
    /**
     * The canonical title of the comic.
     */
    title?: string;
    issueNumber?: number;
    /**
     * If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant.
     */
    variantDescription?: string;
    /**
     * The preferred description of the comic.
     */
    description?: string;
    modified?: Date;
    /**
     * The ISBN for the comic (generally only populated for collection formats).
     */
    isbn?: string;
    /**
     * The UPC barcode number for the comic (generally only populated for periodical formats).
     */
    upc?: string;
    /**
     * The Diamond code for the comic.
     */
    diamondCode?: string;
    /**
     * The EAN barcode for the comic.
     */
    ean?: string;
    /**
     * The ISSN barcode for the comic.
     */
    issn?: string;
    /**
     * The publication format of the comic e.g. comic, hardcover, trade paperback.
     */
    format?: string;
    pageCount?: number;
    textObjects?: Array<string>
    /**
     * The canonical URL identifier for this resource.
     */
    resourceURI?: string;
    urls?: Array<string>
    series?: MarvelSeriesSummary;
    variants?: Array<string>
    collections?: Array<string>
    collectedIssues?: Array<string>
    dates?: Array<string>
    prices?: Array<string>
    thumbnail?: MarvelImage;
    images?: Array<string>
    creators?: MarvelCreatorList;
    characters?: MarvelCharacterList;
    stories?: MarvelStoryList;
    events?: MarvelEventList;
}
