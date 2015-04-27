interface YTPlayer {
    player: {
        loadVideoById(videoId: string): void;
        cueVideoById(videoId: string): void;
        addEventListener(event: string, listener: Function): void;
    };
    ready(): boolean;
}

interface YTPlayerFactory {
    new(name: string, playerVars: Object): YTPlayer;
}

declare var YTPlayer: YTPlayerFactory;