$('#connectButton').on('click', function(){
  go();
});

$('#passwordForm').on('keydown', function(key){
  if (key.keyCode == 13) {
    go();
  }
});
