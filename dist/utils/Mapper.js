"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
class Mapper {
    static mapMediaObject(mediaObj) {
        const mediaUrlList = [];
        for (let media of mediaObj) {
            if (media.type === 'video') {
                return Mapper.mapMediaObjectForVideos(media);
            }
            mediaUrlList.push(Mapper.mapMediaObjectForImages(media));
        }
        return { isImage: true, media_url: mediaUrlList };
    }
    static mapMediaObjectForVideos(media) {
        let validVariants = media.video_info.variants.filter((x) => x.hasOwnProperty('bitrate'));
        validVariants = validVariants.sort((a, b) => {
            return b.bitrate - a.bitrate;
        });
        return { isVideo: true, media_url: validVariants };
    }
    static mapMediaObjectForImages(media) {
        return { url: media.media_url_https, content_type: 'img/jpg' };
    }
}
exports.Mapper = Mapper;
//# sourceMappingURL=Mapper.js.map