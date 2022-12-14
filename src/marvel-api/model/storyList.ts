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
import {MarvelStorySummary} from './storySummary';


export interface MarvelStoryList {
    available?: number;
    returned?: number;
    /**
     * The path to the full list of stories in this collection.
     */
    collectionURI?: string;
    items?: Array<MarvelStorySummary>
}

