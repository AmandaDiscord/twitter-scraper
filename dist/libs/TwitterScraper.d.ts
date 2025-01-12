import { ITweetData } from '../typings';
export declare class TwitterScraper {
    private guestId;
    constructor(guestId: string);
    static create(): Promise<TwitterScraper>;
    getTweetMeta(tweetUrl: string): Promise<ITweetData>;
    reloadGuestId(): Promise<void>;
    private buildGuestIdHeader;
}
