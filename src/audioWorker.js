    if (supportsAudio) {
            var index = 0,
                playing = false,
                mediaPath = './audio/Country/',
                extension = '',
                buildPlaylist = $.each(tracks, function(key, value) {
                    var trackNumber = key+1,
                        trackName = value.track,
                        trackLength = value.length;
                    if (trackNumber.toString().length === 1) {
                        trackNumber = '0' + trackNumber;
                    } else {
                        trackNumber = '' + trackNumber;
                    }
                    $('#plList').append(`<li><div class="plItem"><span class="plNum" style="font-weight:900;"> ${trackNumber} </span><span class="plTitle"> ${trackName} </span></span></li>`);
                }),
                trackCount = tracks.length,
                npAction = $('#npAction'),
                npTitle = $('#npTitle'),
                audio = $('#audio1').bind('play', function () {
                    audio.playbackRate = .5;
                    playing = true;
                    npAction.text('Now Playing...');
                }).bind('pause', function () {
                    playing = false;
                    npAction.text('Paused...');
                    $('#playBtn').toggleClass("glyphicon-play glyphicon-pause");
                }).bind('ended', function () {
                    npAction.text('Paused...');
                    if ((index + 1) < trackCount) {
                        index++;
                        loadTrack(index);
                        audio.play();
                    } else {
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
                }).get(0),
                btnPrev = $('#btnPrev').click(function () {
                    if ((index - 1) > -1) {
                        index--;
                        loadTrack(index);
                        if (playing) {
                            audio.play();
                        }
                    } else {
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
                }),
                btnNext = $('#btnNext').click(function () {
                    if ((index + 1) < trackCount) {
                        index++;
                        loadTrack(index);
                        if (playing) {
                            audio.play();
                        }
                    } else {
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
                }),
                li = $('#plList li').click(function () {
                    var id = parseInt($(this).index());
                    if (id !== index) {
                        playTrack(id);
                        $('.npTitle').html(data[id]);
                    }
                }),
                loadTrack = function (id) {
                    $('.plSel').removeClass('plSel');
                    $('#plList li:eq(' + id + ')').addClass('plSel');
                    npTitle.text(tracks[id].name);
                    index = id;
                    audio.src = mediaPath + tracks[id].file + extension;
                },
                playTrack = function (id) {
                    $('#playBtn').toggleClass("glyphicon-play glyphicon-pause");
                    loadTrack(id);
                    console.log(data[id]);
                    $('.npTitle').text(data[id]);
                    audio.play();
                };
            extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
            loadTrack(index);
        }