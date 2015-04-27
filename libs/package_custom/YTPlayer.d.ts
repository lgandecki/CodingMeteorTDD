interface YTPlayer {
    player: {
        loadVideoById(videoId: string): void;
    };
    ready(): boolean;
}

interface YTPlayerFactory {
    new(name: string, playerVars: Object): YTPlayer;
}

declare var YTPlayer: YTPlayerFactory;