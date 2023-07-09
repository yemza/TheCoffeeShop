import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name :"imageDecoderPipe"
})
export class ImageDecoderPipe implements PipeTransform{
  transform(value: string, contentType: string): string {
    var base64Content = `data:${contentType};base64,${value}`;
    return base64Content;
  }

}
