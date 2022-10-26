import { Pipe, PipeTransform } from "@angular/core";
import { MarvelImage } from "~/marvel-api";

declare type MarvelImageFormat =
  | "portrait_small"
  | "portrait_medium"
  | "portrait_xlarge"
  | "portrait_fantastic"
  | "portrait_uncanny"
  | "portrait_incredible"
  | "landscape_small"
  | "landscape_medium"
  | "landscape_large"
  | "landscape_xlarge"
  | "landscape_amazing"
  | "landscape_incredible"
  | "standard_small"
  | "standard_medium"
  | "standard_large"
  | "standard_xlarge"
  | "standard_fantastic"
  | "standard_amazing";

@Pipe({
  name: "marvelImageUrl",
})
export class MarvelImageUrlPipe implements PipeTransform {
  transform(
    value: MarvelImage,
    format: MarvelImageFormat = "standard_small"
  ): string {
    if (value) {
      return (
        value.path.replace("http", "https") +
        "/" +
        format +
        "." +
        value.extension
      );
    }
    return null;
  }
}
