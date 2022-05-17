$(document).ready(function () {

    'use strict';

    var chatMsgFlag1 = false;
    var chatMsgFlag2 = false;
    var chatMsgFlag3 = false;
    var chatMsgFlag4 = false;
    var chatMsgFlag5 = false;
    var chatMsgFlag6 = false;
    var chatMsgFlag7 = false;

    var play_pause      = $('.playButton'),
        stop            = $('.stopButton'),
        back_10s        = $('.back10s'),
        fast_10s        = $('.fast10s'),

        play70742        = $('.play70742'),
        play89919        = $('.play89919'),
        play184560       = $('.play184560'),
        play192030       = $('.play192030'),
        play224061       = $('.play224061'),

        speed_050x       = $('.speed050x'),
        speed_075x       = $('.speed075x'),
        speed_100x       = $('.speed100x'),
        speed_125x       = $('.speed125x'),
        speed_150x       = $('.speed150x'),
        speed_175x       = $('.speed175x'),
        speed_200x       = $('.speed200x'),
        speed_250x       = $('.speed250x'),
        speed_300x       = $('.speed300x'),

        fullscreen       = $('.fullscreenmode'),
        pipmode          = $('.pipmode'),

        mute             = $('.mute'),
        unmute           = $('.unmute'),

        timeline         = $('.timelineVideo'),
        volumerange      = $('.volumeRange'),

        log_clear        = $('.logClear'),
        chat_clear       = $('.chatClear'),
        rawlog_clear     = $('.rawlogClear'),

        update;

    var source70742 = {
        src: "https://finup-finup-koct1.streaming.media.azure.net/e0b107c6-4da2-4868-9d2c-a3beef8c68a5/70742.ism/manifest(format=mpd-time-csf,encryption=cbc)", 
        type: "application/vnd.ms-sstr+xml", 
        protectionInfo: [{ 
            type: "AES", 
            authenticationToken: "Bearer=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiJiOGVjM2UyOC1mOWU3LTRmYzEtYTU0MS1mZDliMzQyNTM1ZjAiLCJuYmYiOjE2NDkxMjMyODgsImV4cCI6MTY1Njg5OTU4OCwiaXNzIjoiZmludXAiLCJhdWQiOiJmaW51cHZpZGVvIn0._qb_nj0_TLuQpnWiK_ffW2XrV7oXaMI-T796GMgi-AU" 
        }] 
    };
    var source192030 = {
        src: "https://finup-finup-koct1.streaming.media.azure.net/caca8af1-3f53-4f82-9244-1e059decaee1/192030.ism/manifest(format=mpd-time-csf,encryption=cbc)", 
        type: "application/vnd.ms-sstr+xml", 
        protectionInfo: [{ 
            type: "AES", 
            authenticationToken: "Bearer=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiJlZDIwZDkwMi0xODc5LTQxZWEtYjMzOS03ZGYwMDNjMmQzMGQiLCJuYmYiOjE2NDkxMjM0MDksImV4cCI6MTY1Njg5OTcwOSwiaXNzIjoiZmludXAiLCJhdWQiOiJmaW51cHZpZGVvIn0.FMqJ6UdDL3NBhVFanpqPE9h9QfiEwgmL2w8IHMmtIIY" 
        }] 
    };
    var source184560 = {
        src: "https://finup-finup-koct1.streaming.media.azure.net/2127b516-8e74-4f4a-9404-031fe98339f3/184560.ism/manifest(format=mpd-time-csf,encryption=cbc)", 
        type: "application/vnd.ms-sstr+xml", 
        protectionInfo: [{ 
            type: "AES", 
            authenticationToken: "Bearer=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiJiNDY2ZTU3My05NWYwLTRlNzUtYWJkOS1iOWI3OWMwMmQwOWUiLCJuYmYiOjE2NDkxMjM1NDAsImV4cCI6MTY1Njg5OTg0MCwiaXNzIjoiZmludXAiLCJhdWQiOiJmaW51cHZpZGVvIn0.5_Z-o4RlqLPGsMHaYqcU6byJBSVs6xejPEdzSYAeyxA" 
        }] 
    };
    var source89919 = {
        src: "https://finup-finup-koct1.streaming.media.azure.net/61882597-9164-44f3-a254-f8d2e6d0cb66/89919.ism/manifest(format=mpd-time-csf,encryption=cbc)", 
        type: "application/vnd.ms-sstr+xml", 
        protectionInfo: [{ 
            type: "AES", 
            authenticationToken: "Bearer=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiI1MmQzZjA1Mi1kMDYwLTQ2ZGUtODVhNi0zZjQ0YmYyZjUwOWIiLCJuYmYiOjE2NDkxMjM2MTgsImV4cCI6MTY1Njg5OTkxOCwiaXNzIjoiZmludXAiLCJhdWQiOiJmaW51cHZpZGVvIn0.rqauLAzSZjI9VdMXVXMjTMtD7OkQEY9BEWDFQJjwNIE" 
        }] 
    };
    var source224061 = {
        src: "https://finup-finup-koct1.streaming.media.azure.net/1d457d42-1732-4141-bbc3-9a756a4eac4d/224061.ism/manifest(format=mpd-time-csf,encryption=cbc)", 
        type: "application/vnd.ms-sstr+xml", 
        protectionInfo: [{ 
            type: "AES", 
            authenticationToken: "Bearer=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiJhZjkwMGY3Yi0yYjZiLTQ3MjAtODhjYS03OTE0MDFlZDVlNTgiLCJuYmYiOjE2NDkxMjM3MDEsImV4cCI6MTY1NjkwMDAwMSwiaXNzIjoiZmludXAiLCJhdWQiOiJmaW51cHZpZGVvIn0.w8nnUBYPh_7CjNNNy5kFURPzBa-SvQmon40BTGUGXq4" 
        }] 
    };

    var source = { 
        src: "https://finup-finup-koct1.streaming.media.azure.net/8cada545-75e1-4ce0-8305-0b2cfb8a13bc/세력주 매매법 (238186).ism/manifest(format=mpd-time-csf,encryption=cbc)", 
        type: "application/vnd.ms-sstr+xml", 
        protectionInfo: [{ 
            type: "AES", 
            authenticationToken: "Bearer=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiIxYTA2OGIyNC03Y2I3LTQ1ZWYtODVmZC02OGRjZTUxMWY3ZmMiLCJuYmYiOjE2NDg3MTIwMTIsImV4cCI6MTY1NjQ4ODMxMiwiaXNzIjoiZmludXAiLCJhdWQiOiJmaW51cHZpZGVvIn0.H7_Qc8D-18LnI1JCdZoEyhdZokIwTHBKB3cUkJb4BPE" 
        }] 
    };
    var myOptions = {
        "language": "ko",
        fluid: true,
        autoplay: true,
        controls: true,
        width: "640",
        height: "360",
        poster: "",
        logo: { enabled: false },
        playbackSpeed: {
            enabled: true,
            initialSpeed: 1.0,
            speedLevels: [
                { name: "x3.0", value: 3.0 },
                { name: "x2.0", value: 2.0 },
                { name: "x1.75", value: 1.75 },
                { name: "x1.5", value: 1.5 },
                { name: "x1.25", value: 1.25 },
                { name: "x1.0", value: 1.0 },
                { name: "x0.75", value: 0.75 },
                { name: "x0.5", value: 0.5 },
            ]
        },
        hotKeys: {
            "volumeStep": 0.1,
            "seekStep": 5,
            "enableMute": false,
            "enableFullscreen": false,
            "enableNumbers": false,
            "enableJogStyle": false
        },
        ampAds:{
            preRoll: {
                sourceUri: 'finup_ads1.xml', // 'http://sr-test.azurewebsites.net/Plugins/AMP2/Preroll_amp/ie_browser.xml',
                language: 'en',
                options: 
                {
                    skipAd:  { enabled: true, offset:5 }
                }                                
            },
            midRoll: [{
                sourceUri:'finup_ads2.xml', 
                language: 'en',
                startTime: 360,
                options: 
                {
                    skipAd:  { enabled: true, offset: 5 }
                }
            }
            // {
            //     sourceUri:'http://sr-test.azurewebsites.net/Plugins/AMP2/Preroll_amp/ie_browser.xml', 
            //     language: 'en',
            //     startTime: 900,
            //     options: 
            //     {
            //         skipAd:  { enabled: true, offset: 5 }
            //     }
            // }
            ],
            mainProgram: {
                source: source70742,
            }
        }
    };
    var defaultOptions = {
        "language": "ko",
        fluid: true,
        autoplay: true,
        controls: true,
        width: "640",
        height: "360",
        poster: "",
        logo: { enabled: false },
        playbackSpeed: {
            enabled: true,
            initialSpeed: 1.0,
            speedLevels: [
                { name: "x3.0", value: 3.0 },
                { name: "x2.0", value: 2.0 },
                { name: "x1.75", value: 1.75 },
                { name: "x1.5", value: 1.5 },
                { name: "x1.25", value: 1.25 },
                { name: "x1.0", value: 1.0 },
                { name: "x0.75", value: 0.75 },
                { name: "x0.5", value: 0.5 },
            ]
        },
        hotKeys: {
            "volumeStep": 0.1,
            "seekStep": 5,
            "enableMute": false,
            "enableFullscreen": false,
            "enableNumbers": false,
            "enableJogStyle": false
        }
    };
    // var myPlayer = amp("finupvideo", myOptions);
    var myPlayer = amp("finupvideo", defaultOptions);
    myPlayer.src([source70742]);
    

        playerStart();
        registerPlayerEvent();

        play_pause.click(function () { playVideo(); });
        stop.click(function () { stopVideo(); });
        back_10s.click(function () { back10sVideo(); });
        fast_10s.click(function () { fast10sVideo(); });

        play70742.click(function () { play70742Video(); });
        play89919.click(function () { play89919Video(); });
        play184560.click(function () { play184560Video(); });
        play192030.click(function () { play192030Video(); });
        play224061.click(function () { play224061Video(); });

        speed_050x.click(function () { playSpeed050x(); });
        speed_075x.click(function () { playSpeed075x(); });
        speed_100x.click(function () { playSpeed100x(); });
        speed_125x.click(function () { playSpeed125x(); });
        speed_150x.click(function () { playSpeed150x(); });
        speed_175x.click(function () { playSpeed175x(); });
        speed_200x.click(function () { playSpeed200x(); });
        speed_250x.click(function () { playSpeed250x(); });
        speed_300x.click(function () { playSpeed300x(); });

        fullscreen.click(function () { fullscreenVideo(); });
        pipmode.click(function () { pipmodeVideo(); });

        mute.click(function () { muteVideo(); });
        unmute.click(function () { unmuteVideo(); });

        timeline.click(function () {timelineVideo(); });
        volumerange.click(function () {volumeVideo(); });

        log_clear.click(function () { logClearVideo(); });
        chat_clear.click(function () { chatClearVideo(); });
        rawlog_clear.click(function () { rawlogClearVideo(); });

    function logWrite(text) {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        var objLogBox = document.getElementById("logMsg");
        objLogBox.innerText += "[" + dateTime + "] " + text + "\r\n"
        objLogBox.scrollTop = objLogBox.scrollHeight;
    }

    function rawlogWrite(text) {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        var objLogBox = document.getElementById("rawlogMsg");
        objLogBox.innerText += "[" + dateTime + "] " + text + "\r\n"
        objLogBox.scrollTop = objLogBox.scrollHeight;
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
    }

    function playerStart() {
        document.getElementById("logMsg").innerText = ""
        logWrite("Video Loading Success.")
        document.getElementById("chatMsg").innerText = ""
        document.getElementById("rawlogMsg").innerText = ""
    }
    function registerPlayerEvent() {
        myPlayer.addEventListener(amp.eventName.loadedmetadata, metadataLog);
        myPlayer.addEventListener(amp.eventName.downloadbitratechanged, metadataLog);
        myPlayer.addEventListener(amp.eventName.playbackbitratechanged, metadataLog);
        var videoBuffer = myPlayer.videoBufferData();
        var audioBuffer = myPlayer.audioBufferData();

        if (videoBuffer) {
            videoBuffer.addEventListener(amp.bufferDataEventName.downloadrequested, metadataLog);
            videoBuffer.addEventListener(amp.bufferDataEventName.downloadcompleted, metadataLog);
            videoBuffer.addEventListener(amp.bufferDataEventName.downloadfailed, metadataLog);
        }

        if (audioBuffer) {
            audioBuffer.addEventListener(amp.bufferDataEventName.downloadrequested, metadataLog);
            audioBuffer.addEventListener(amp.bufferDataEventName.downloadcompleted, metadataLog);
            audioBuffer.addEventListener(amp.bufferDataEventName.downloadfailed, metadataLog);
        }
        myPlayer.addEventListener(amp.eventName.volumechange, metadataLog);
        myPlayer.addEventListener(amp.eventName.ended, metadataLog);
        myPlayer.addEventListener(amp.eventName.timeupdate, metadataLog);

        myPlayer.addEventListener(amp.eventName.pause, metadataLog);
        myPlayer.addEventListener(amp.eventName.play, metadataLog);
        myPlayer.addEventListener(amp.eventName.playing, metadataLog);
        myPlayer.addEventListener(amp.eventName.seeking, metadataLog);
        myPlayer.addEventListener(amp.eventName.seeked, metadataLog);

        myPlayer.addEventListener(amp.eventName.loadstart, metadataLog);
        myPlayer.addEventListener(amp.eventName.loadeddata, metadataLog);
        myPlayer.addEventListener(amp.eventName.fullscreenchange, metadataLog);

        myPlayer.addEventListener(amp.eventName.waiting, metadataLog);
        myPlayer.addEventListener(amp.eventName.canplaythrough, metadataLog);
        myPlayer.addEventListener(amp.eventName.error, metadataLog);
        myPlayer.addEventListener(amp.eventName.errorInPlayingAd, metadataLog);

        volumeVideo();
    }
    function convertHMS(value) {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours   = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
        let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
        // add 0 if value < 10; Example: 2 => 02
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
    }

    function updateplayer() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        var objChatBox = document.getElementById("chatMsg");        

        if (parseInt(myPlayer.currentTime()) == 3 && chatMsgFlag1 == false){
            objChatBox.innerText += "[" + dateTime + "] (테스터) 채팅 메세지 입니다. 1\r\n"
            chatMsgFlag1 = true
            logWrite("Chat Measage Added.");
        }
        else if (parseInt(myPlayer.currentTime()) == 6 && chatMsgFlag2 == false){
            objChatBox.innerText += "[" + dateTime + "] (테스터) 채팅 메세지 입니다. 2\r\n"
            chatMsgFlag2 = true
            logWrite("Chat Measage Added.");
        }
        else if (parseInt(myPlayer.currentTime()) == 10 && chatMsgFlag3 == false){
            objChatBox.innerText += "[" + dateTime + "] (테스터) 채팅 메세지 입니다. 3\r\n"
            chatMsgFlag3 = true
            logWrite("Chat Measage Added.");
        }
        else if (parseInt(myPlayer.currentTime()) == 11 && chatMsgFlag4 == false){
            objChatBox.innerText += "[" + dateTime + "] (테스터) 채팅 메세지 입니다. 4\r\n"
            chatMsgFlag4 = true
            logWrite("Chat Measage Added.");
        }
        else if (parseInt(myPlayer.currentTime()) == 15 && chatMsgFlag5 == false){
            objChatBox.innerText += "[" + dateTime + "] (테스터) 채팅 메세지 입니다. 5\r\n"
            chatMsgFlag5 = true
            logWrite("Chat Measage Added.");
        }
        else if (parseInt(myPlayer.currentTime()) == 20 && chatMsgFlag6 == false){
            objChatBox.innerText += "[" + dateTime + "] (테스터) 채팅 메세지 입니다. 6\r\n"
            chatMsgFlag6 = true
            logWrite("Chat Measage Added.");
        }
        else if (parseInt(myPlayer.currentTime()) == 22 && chatMsgFlag7 == false){
            objChatBox.innerText += "[" + dateTime + "] (테스터) 채팅 메세지 입니다. 7\r\n"
            chatMsgFlag7 = true
            logWrite("Chat Measage Added.");
        }

        objChatBox.scrollTop = objChatBox.scrollHeight;

        // Time Set
        timePrint();
    }
    function timePrint() {
        document.getElementById("timelineVideoText").value = convertHMS(myPlayer.currentTime())
    }
    function volumePrint() {
        document.getElementById("volumeRangeText").value = parseInt(myPlayer.volume() * 100) + "%"
    }
    function playVideo() {
        if (myPlayer.paused()) {
            myPlayer.play();
            // update = setInterval(updateplayer, 1000);

            logWrite("Play");
        } else {
            myPlayer.pause();
            logWrite("Pause");
        }
    }
    function stopVideo() {
        myPlayer.currentTime(0);
        myPlayer.pause();

        chatMsgFlag1 = false;
        chatMsgFlag2 = false;
        chatMsgFlag3 = false;
        chatMsgFlag4 = false;
        chatMsgFlag5 = false;
        chatMsgFlag6 = false;
        chatMsgFlag7 = false;

        playerStart();

        logWrite("Stop and Reset Player");
    }
    function back10sVideo() {
        console.log("back 10 sec" + myPlayer.currentTime());
        myPlayer.currentTime(myPlayer.currentTime() - 10);

        logWrite("Back 10 Second : " + myPlayer.currentTime());
    }
    function fast10sVideo() {
        console.log("fast 10 sec" + myPlayer.currentTime());
        myPlayer.currentTime(myPlayer.currentTime() + 10);

        logWrite("Fast 10 Second : " + myPlayer.currentTime());
    }
    function fullscreenVideo() {
        let elem = document.querySelector("video");

        if (!document.pictureInPictureElement) {
            if (!document.fullscreenElement) {
                myPlayer.enterFullscreen();
            } else {
                myPlayer.exitFullscreen();
                document.exitFullscreen();
            }    
        }
        else {
            alert(`pip mode 일 때에는 전체 화면 전환이 불가능합니다.`);
        }

        logWrite("Fullscreen Mode Enable.");
    }
    function pipmodeVideo() {
        let elem = document.querySelector("video");

        elem.requestPictureInPicture().catch(err => {
            alert(`pip mode 가 동작하지 않습니다. 브라우저 버전을 확인해주세요. (크롬 권장): ${err.message} (${err.name})`);
        });

        logWrite("Picture in Picture Mode Enable.");
    }
    function muteVideo() {
        myPlayer.muted(true);
        volumePrint();

        logWrite("Mute Volume.");
    }
    function unmuteVideo() {
        myPlayer.muted(false);
        volumePrint();

        logWrite("unMute Volume.");
    }
    function logClearVideo() {
        document.getElementById("logMsg").innerText = ""

        logWrite("Log Clear.");
    }
    function chatClearVideo() {
        document.getElementById("chatMsg").innerText = ""

        logWrite("Chat Message Clear.");
    }
    function rawlogClearVideo() {
        document.getElementById("rawlogMsg").innerText = ""

        rawlogWrite("Raw Log Clear.");
    }

    function playSpeed050x() {
        myPlayer.playbackRate(0.5)
        logWrite("Play Speed 0.5x");
    }
    function playSpeed075x() {
        myPlayer.playbackRate(0.75)
        logWrite("Play Speed 0.75x");
    }
    function playSpeed100x() {
        myPlayer.playbackRate(1.0)
        logWrite("Play Speed 1.0x");
    }
    function playSpeed125x() {
        myPlayer.playbackRate(1.25)
        logWrite("Play Speed 1.25x");
    }
    function playSpeed150x() {
        myPlayer.playbackRate(1.5)
        logWrite("Play Speed 1.5x");
    }
    function playSpeed175x() {
        myPlayer.playbackRate(1.75)
        logWrite("Play Speed 1.75x");
    }
    function playSpeed200x() {
        myPlayer.playbackRate(2.0)
        logWrite("Play Speed 2.0x");
    }
    function playSpeed250x() {
        myPlayer.playbackRate(2.5)
        logWrite("Play Speed 2.5x");
    }
    function playSpeed300x() {
        myPlayer.playbackRate(3.0)
        logWrite("Play Speed 3.0x");
    }

    function timelineVideo() {
        var mouseX = event.pageX - timeline.offset().left;
        var width  = timeline.outerWidth();

        if (mouseX <= 0) {
            mouseX = 0
        }
        if (mouseX >= width) {
            mouseX = width
        }

        myPlayer.currentTime((mouseX / width) * myPlayer.duration());
        myPlayer.pause();

        logWrite("Seek to Time : " + myPlayer.currentTime());

        timePrint();
    }
    function volumeVideo() {
        var nowPosition = document.getElementById('volumeRange').value;

        if (nowPosition <= 0) {
            nowPosition = 0
        }
        if (nowPosition >= 1) {
            nowPosition = 1
        }

        myPlayer.volume(nowPosition);
        
        if (myPlayer.volume() != 0 ) {
            myPlayer.muted(false);
        }
        else {
            myPlayer.muted(true);
        }

        volumePrint();

        logWrite("Volume value : " + myPlayer.volume());
    }

    function resetPlayer() {
        chatMsgFlag1 = false;
        chatMsgFlag2 = false;
        chatMsgFlag3 = false;
        chatMsgFlag4 = false;
        chatMsgFlag5 = false;
        chatMsgFlag6 = false;
        chatMsgFlag7 = false;

        document.getElementById("chatMsg").innerText = ""

        logWrite("Reset Player");
    }

    function play70742Video() {
        resetPlayer();
        myPlayer.src([source70742]);
    }
    function play89919Video() {
        resetPlayer();
        myPlayer.src([source89919]);
    }
    function play184560Video() {
        resetPlayer();
        myPlayer.src([source184560]);
    }
    function play192030Video() {
        resetPlayer();
        myPlayer.src([source192030]);
    }
    function play224061Video() {
        resetPlayer();
        myPlayer.src([source224061]);
    }

    // RAW LOG 
    function metadataLog(evt, bufferData) {
        if (evt.type === amp.eventName.loadedmetadata) {
            rawlogWrite("[user-agent] " + navigator.userAgent);
            rawlogWrite("[mimetype] " + myPlayer.currentType());
            rawlogWrite("[mediaSource] " + myPlayer.currentSrc());
            rawlogWrite("[mediaTime] " + myPlayer.currentMediaTime());
            rawlogWrite("[protectionType] " + myPlayer.currentProtectionInfo().type);
        }
        else if (evt.type === amp.eventName.error) {
            rawlogWrite("[error code] " + myPlayer.error().code.toString(16));
            rawlogWrite("[error msg] " + highlevelError(myPlayer.error().code) + " : " + myPlayer.error().message);
        }
        else if (evt.type === amp.eventName.errorInPlayingAd) {
            rawlogWrite("[error ADS] " + bufferData);
        }
        else if (evt.type === amp.eventName.downloadbitratechanged) {
            rawlogWrite("[downloadbitratechanged] " + myPlayer.currentDownloadBitrate());
        }
        else if (evt.type === amp.eventName.playbackbitratechanged) {
            rawlogWrite("[playbackbitratechanged] " + myPlayer.currentPlaybackBitrate());
        }
        else if (evt.type === amp.bufferDataEventName.downloadfailed) {
            rawlogWrite("[downloadfailed] " + bufferData.downloadFailed.code.toString(8));
            rawlogWrite("[downloadfailed] " + bufferData.downloadFailed.message);
        }
        else if (evt.type === amp.bufferDataEventName.downloadcompleted) {
            rawlogWrite("[downloadcompleted-bufferLevel] " + bufferData.bufferLevel);
        }
        else if (evt.type === amp.eventName.timeupdate) {
            updateplayer()
        }
        else {
            var eventType = evt.type
            rawlogWrite("[" + eventType + "]");
        }
    }
    function highlevelError(errorCode){
        var errorDesc;
        var uiCodeMask = 0xff00000;
        var uiCode = (errorCode & uiCodeMask) >> 20;
        switch (uiCode) {
            case 0:
                errorDesc = "MEDIA_ERR_CUSTOM"
                break;
            case 1:
                errorDesc = "MEDIA_ERR_ABORTED";
                break;
            case 2:
                errorDesc = "MEDIA_ERR_NETWORK";
                break;
            case 3:
                errorDesc = "MEDIA_ERR_DECODE";
                break;
            case 4:
                errorDesc = "MEDIA_ERR_SRC_NOT_SUPPORTED";
                break;
            case 5:
                errorDesc = "MEDIA_ERR_ENCRYPTED";
                break;
            case 6:
                errorDesc = "SRC_PLAYER_MISMATCH";
                break;
            default:
                errorDesc = "MEDIA_ERR_UNKNOWN";
        }
        return errorDesc;
    }

    $(window).keypress(function (e) {
        if (e.keyCode === 0 || e.keyCode === 32) {
            e.preventDefault()
            playVideo();
        }
        if (e.keyCode==37) {       //left arrow
            back10sVideo()
        }
        if (e.keyCode==39) { //right arrow
            fast10sVideo()
        }
     });
});