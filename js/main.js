/* Simple pick-from-array using millis % length of array */
function pickCharacter() {
  var heroes = [
    {"name":"ANA","img":"ana"},
    {"name":"BASTION","img":"bastion"},
    {"name":"BRIGITTE","img":"brigitte"},
    {"name":"DOOMFIST","img":"doomfist"},
    {"name":"D.VA","img":"dva"},
    {"name":"GENJI","img":"genji"},
    {"name":"HANZO","img":"hanzo"},
    {"name":"JUNKRAT","img":"junkrat"},
    {"name":"LUCIO","img":"lucio"},
    {"name":"MCCREE","img":"mccree"},
    {"name":"MEI","img":"mei"},
    {"name":"MERCY","img":"mercy"},
    {"name":"MOIRA","img":"moira"},
    {"name":"ORISA","img":"orisa"},
    {"name":"PHARAH","img":"pharah"},
    {"name":"REAPER","img":"reaper"},
    {"name":"REINHARDT","img":"reinhardt"},
    {"name":"ROADHOG","img":"roadhog"},
    {"name":"SOLDIER: 76","img":"soldier-76"},
    {"name":"SOMBRA","img":"sombra"},
    {"name":"SYMMETRA","img":"symmetra"},
    {"name":"TORBJORN","img":"torbjorn"},
    {"name":"TRACER","img":"tracer"},
    {"name":"WIDOWMAKER","img":"widowmaker"},
    {"name":"WINSTON","img":"winston"},
    {"name":"WRECKING BALL","img":"wrecking-ball"},
    {"name":"ZARYA","img":"zarya"},
    {"name":"ZENYATTA","img":"zenyatta"}
  ]

  var time = new Date().getTime();
  var heroIndex = time % heroes.length;
  var hero = heroes[heroIndex];
  var heroName = hero["name"];
  var heroClass = "icon icon-" + hero["img"];
  $("#hero-name").text(heroName);
  $("#hero-image").attr("class", heroClass);
};

function preloadImage(imageSrc) {
  var r = $.Deferred();
	(new Image()).src = imageSrc;
  return r;
};
