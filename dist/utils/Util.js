"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
const Mapper_1 = require("./Mapper");
const Request_1 = require("./Request");
class Util {
    static isValidTweetUrl(tweetUrl) {
        return /(?:http)?(?:s:\/\/)?(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/status\/[0-9]{19}/.test(tweetUrl);
    }
    static getTweetId(tweetUrl) {
        return tweetUrl.match(/(?<=status\/\s*)\d+/)[0];
    }
    static async getRandomGuestID() {
        const responseData = await (await Request_1.Request.post('https://api.twitter.com/1.1/guest/activate.json')).json();
        return responseData.guest_token;
    }
    static filterTweetData(tweetData) {
        let returnObject = {
            id: tweetData.id_str,
            created_at: tweetData.created_at,
            description: tweetData.text ? tweetData.text : tweetData.full_text,
            isMedia: tweetData.hasOwnProperty('extended_entities'),
            favorite_count: tweetData.favorite_count,
            retweet_count: tweetData.retweet_count,
            reply_count: tweetData.reply_count,
            quote_count: tweetData.quote_count,
        };
        if (returnObject.isMedia) {
            returnObject = { ...returnObject, ...Mapper_1.Mapper.mapMediaObject(tweetData.extended_entities.media) };
        }
        return returnObject;
    }
}
exports.Util = Util;
//# sourceMappingURL=Util.js.map