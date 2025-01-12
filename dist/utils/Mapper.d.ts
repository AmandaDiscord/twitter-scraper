import { ITemporaryMediaObject } from '../typings';
export declare class Mapper {
    static mapMediaObject(mediaObj: any): ITemporaryMediaObject;
    static mapMediaObjectForVideos(media: any): ITemporaryMediaObject;
    static mapMediaObjectForImages(media: any): {
        url: any;
        content_type: string;
    };
}
