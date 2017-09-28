<script>
    function PlaySound(melody) {
        alert("On Press of "+melody);
        var path = "path\\to\\melody\\"
        var snd = new Audio(path + melody + ".mp3");
        snd.play();
    }
</script>
