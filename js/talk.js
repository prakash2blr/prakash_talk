var creation=['create','created','creation']
function getJson(){
    var que=$('#que').val();
    if(que.trim()==''){
        que=';
        $.get('makemp3.php',{
            words:que
        },function(data){
            var player=document.getElementById('play-my-idea');
            player.src=''+data;
            player.play(); //start playing
            $('#dont-talk').hide();
            $('#talk').show();
            $('#play-my-idea').on('timeupdate',function(e) {
                if(this.duration - this.currentTime < 0.2) {
                    $('#dont-talk').show();
                    $('#talk').hide();
                }
            });

        });
    }
    else if((que.search(creation[0])>=0) || (que.search(creation[1])>=0) || (que.search(creation[2])>=0)){
        var word=''
        $.get('makemp3.php',{
            words:word
        },function(data){

            var player=document.getElementById('play-my-idea');
            player.src=''+data;
            player.play(); //start playing
            $('#dont-talk').hide();
            $('#talk').show();
            $('#play-my-idea').on('timeupdate',function(e) {
                if(this.duration - this.currentTime < 0.2) {
                    $('#dont-talk').show();
                    $('#talk').hide();
                }
            });

        });
    }
    else{
        $.get(''+que,function(data){
            var reply=data.output[0].actions.say.text;
            if(reply==='Jeannie')
                reply='';
            else if((que.search('abuse'))>=0)
                reply='';
            else if((que.search('scold'))>=0)
                reply='';
            else if((que.toLowerCase().search('don'))>=0)
                reply='';
            else if((que.toLowerCase().search('sachin'))>=0)
                reply='';
            $.get('makemp3.php',{
                words:reply
            },function(data){

                var player=document.getElementById('play-my-idea');
                player.src=''+data;
                player.play(); //start playing
                $('#dont-talk').hide();
                $('#talk').show();
                $('#play-my-idea').on('timeupdate',function(e) {
                    if(this.duration - this.currentTime < 0.2) {
                        $('#dont-talk').show();
                        $('#talk').hide();
                    }
                });
            });
        });

    }

}
