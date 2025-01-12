import { ITweetData } from '../typings';
export declare class Util {
    static isValidTweetUrl(tweetUrl: string): boolean;
    static getTweetId(tweetUrl: string): string;
    static getRandomGuestID(): Promise<string>;
    static filterTweetData(tweetData: any): ITweetData;
}
