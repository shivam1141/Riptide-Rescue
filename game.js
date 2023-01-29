var config ={
    width: 1280,
    height: 720,
    backgroundColor: 0x000000,
    scene:[ Intro, GameMenu, School, Conversation, Announcement,
        Quiz1, Quiz2, Quiz3, Quiz4, Quiz5, Quiz6, Quiz7, Quiz8,
        Travel, Arrival,
        DirtCleanign,DoneCleaning, Playing,Drowning,
        DrowningHelp,Attention,
        Tools, Saving,
        Cpr,
        Lesson ]
        // Intro, GameMenu, School, Conversation, Announcement,
        // Quiz1, Quiz2, Quiz3, Quiz4, Quiz5, Quiz6, Quiz7, Quiz8,
        // Travel, Arrival,
        // DirtCleanign,DoneCleaning, Playing,Drowning,
        // DrowningHelp,Attention,


        // Intro, GameMenu, School, Conversation,
        //  Quiz1, Quiz2, Quiz3, Quiz4, Quiz5, Quiz6, Quiz7,
    // Intro, GameMenu, School, Conversation, Announcement,DrowningHelp,Attention, Tools,
}

var game = new Phaser.Game(config);