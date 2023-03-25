function sidebarCollapse() {
  var v = document.getElementById("check");
  let height = screen.height;
  if (height < 650) {
    if (v.checked) {
      document.getElementById("sidebar").style.left = "0px";
    }
    else if (!v.checked) {
      document.getElementById("sidebar").style.left = "-550px";
    }
  }
  else {
    if (v.checked) {
      document.getElementById("sidebar").style.left = "0px";
    }
    else if (!v.checked) {
      document.getElementById("sidebar").style.left = "-145px";
    }
  }
}
function navbarCollapse(a){
  if(a==1){
    var v=document.getElementById("nav-check");
    if(v.checked){
      document.getElementById("nav-650-650").style.top="0px";
      document.getElementById("nav-650-650").style.zIndex="2";
    }
    else if(!v.checked){
      document.getElementById("nav-650-650").style.top="-290px";
      document.getElementById("nav-650-650").style.zIndex="1";
    }
  }
  else{
    document.getElementById("nav-check").checked = false;
    document.getElementById("nav-650-650").style.top="-290px";
    document.getElementById("nav-650-650").style.zIndex="1";
  }
}

var agents = {
  "gekko": "e370fa57-4757-3604-3648-499e1f642d3f",
  "fade": "dade69b4-4f5a-8528-247b-219e5a1facd6",
  "breach": "5f8d3a7f-467b-97f3-062c-13acf203c006",
  "raze": "f94c3b30-42be-e959-889c-5aa313dba261",
  "chamber": "22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
  "kay/o": "601dbbe7-43ce-be57-2a40-4abd24953621",
  "skye": "6f2a04ca-43e0-be17-7f36-b3908627744d",
  "cypher": "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
  "sova": "320b2a48-4d9b-a075-30f1-1f93a9b638fa",
  "killjoy": "1e58de9c-4950-5125-93e9-a0aee9f98746",
  "harbor": "95b78ed7-4637-86d9-7e41-71ba8c293152",
  "viper": "707eab51-4836-f488-046a-cda6bf494859",
  "phoenix": "eb93336a-449b-9c1b-0a54-a891f7921d69",
  "astra": "41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
  "brimstone": "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
  "neon": "bb2a4828-46eb-8cd1-e765-15848195d751",
  "yoru": "7f94d92c-4234-0a36-9646-3a87eb8b5c89",
  "sage": "569fdd95-4d10-43ab-ca70-79becc718b46",
  "reyna": "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
  "omen": "8e253930-4c05-31dd-1b6c-968525494517",
  "jett": "add6443a-41bd-e414-f6ad-e58d267f4e95"
}
var keys = ["gekko",
  "fade",
  "breach",
  "raze",
  "chamber",
  "kay/o",
  "skye",
  "cypher",
  "sova",
  "killjoy",
  "harbor",
  "viper",
  "phoenix",
  "astra",
  "brimstone",
  "neon",
  "yoru",
  "sage",
  "reyna",
  "omen",
  "jett",]
function setMainAgent(agentName){
    fetch('https://valorant-api.com/v1/agents/'+agents[agentName])
    .then(response => response.json())
    .then(json => {
      document.getElementById("character-image").setAttribute("src", json["data"]["fullPortrait"])
      var ability_logo=document.getElementsByClassName("ability-logo")
      count=0
      for (let i of ability_logo){
        i.setAttribute("src",json["data"]["abilities"][count]["displayIcon"])
        count+=1
      }
      document.getElementById("agent-name").innerHTML=json["data"]["displayName"].toUpperCase()

    })
  }
// function setMatchHistoryAgent(agentNames){
//     let count=0
//     // var a=document.getElementsByClassName("match-agent-img")
//     for (let i=0; i<agentNames.length; i++){
//       fetch('https://valorant-api.com/v1/agents/'+agents[agentNames[i]])
//       .then(response => response.json())
//       .then(json => {
//         var agent_hist_img=document.getElementsByClassName("match-agent-img")[i]
//         agent_hist_img.setAttribute("src",json["data"]["displayIcon"])
//       });
//     }
// }
function setStatValue(statValues){
  let stats_div=document.getElementsByClassName("stats-value")
  for (let i=0; i<statValues.length; i+=1){
    stats_div[i].innerHTML=statValues[i]
  }
}
function setAbilityStatValue(abilityValues){
  let abilityStats=document.getElementsByClassName("ability-kills-value")
  for (let i=0; i<abilityValues.length; i+=1){
    abilityStats[i].innerHTML=abilityValues[i]
  }
}
function setMatchHistoryStat(wins,losses,kda,map,agentNames,ratings)
{
  let match_wins=document.getElementsByClassName("match-score-win")
  for (let i=0; i<match_wins.length; i++){
    match_wins[i].innerHTML=wins[i];
  }

  let match_losses=document.getElementsByClassName("match-score-loss")
  for (let i=0; i<match_losses.length; i++){
    match_losses[i].innerHTML=losses[i];
  }

  let match_kda=document.getElementsByClassName("match-kda-value")
  for (let i=0; i<match_kda.length; i++){
    match_kda[i].innerHTML=kda[i];
  }

  let match_map=document.getElementsByClassName("match-map")
  for (let i=0; i<match_map.length; i++){
    match_map[i].innerHTML=map[i];
  }

  let match_rating=document.getElementsByClassName("rating-img")
  for (let i=0; i<ratings.length; i++){
    setRatingImg(match_rating[i],ratings[i])
  }
  

  for (let i=0; i<agentNames.length; i++){
    fetch('https://valorant-api.com/v1/agents/'+agents[agentNames[i]])
    .then(response => response.json())
    .then(json => {
      var agent_hist_img=document.getElementsByClassName("match-agent-img")[i]
      agent_hist_img.setAttribute("src",json["data"]["displayIcon"])
    });
  }
}



  function setRatingImg(element,rating) {
    fetch('https://valorant-api.com/v1/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04')
    .then(response => response.json())
    .then(json => {
      a=json["data"]["tiers"]
      for(let i=0;i<a.length;i++)
      {
        if(rating==json["data"]["tiers"][i]["tierName"])
        {
          element.setAttribute("src",json["data"]["tiers"][i]["smallIcon"])
        }
      }
      });
  }
  var unrated={
    "main-agent":"gekko",
    "agent-played-time":"Played 198Hrs",
    "stats-value":["1.2","130.5","60%","40%"],
    "ability-kills-value":["0.76","0.53","0.2"],
    "match-score-win":["13","10","2","13"],
    "match-score-loss":["7","13","13","5"],
    "match-kda-value":["12/3/4","24/7/9","5/6/8","31/13/4"],
    "match-map":["IceBox","Haven","Split","Haven"],
    "rating-img":["UNRANKED","UNRANKED","UNRANKED","UNRANKED"],
    "match-agent-img":["breach","fade","sova","reyna"]
  }
  var ranked={
    "main-agent":"neon",
    "agent-played-time":"Played 210Hrs",
    "stats-value":["1.5","120.5","70%","30%"],
    "ability-kills-value":["0.66","0.73","0.4"],
    "match-score-win":["13","10","2","13"],
    "match-score-loss":["7","13","13","5"],
    "match-kda-value":["40/3/4","24/7/9","5/6/8","31/13/4"],
    "match-map":["IceBox","Haven","Split","Haven"],
    "rating-img":["IMMORTAL 3","IMMORTAL 2","IMMORTAL 2","IMMORTAL 1"],
    "match-agent-img":["sova","reyna","neon","neon"]
  }
  function setContent(){}

  function changePage(mode){
    
    if (mode=="ur")
    {
      document.getElementById("agent-played-time").innerHTML=unrated["agent-played-time"]
      setMatchHistoryStat(unrated["match-score-win"],unrated["match-score-loss"],unrated["match-kda-value"],unrated["match-map"],unrated["match-agent-img"],unrated["rating-img"])
      setMainAgent(unrated["main-agent"])
      setStatValue(unrated["stats-value"])
      setAbilityStatValue(unrated["ability-kills-value"])
    }
    else if(mode=="ra"){
      document.getElementById("agent-played-time").innerHTML=ranked["agent-played-time"]
      setMatchHistoryStat(ranked["match-score-win"],ranked["match-score-loss"],ranked["match-kda-value"],ranked["match-map"],ranked["match-agent-img"],ranked["rating-img"])
      setMainAgent(ranked["main-agent"])
      setStatValue(ranked["stats-value"])
      setAbilityStatValue(ranked["ability-kills-value"])
    }
    else if(mode=="dm"){
      document.getElementById("agent-played-time").innerHTML=deathmatch["agent-played-time"]
      setMatchHistoryStat(deathmatch["match-score-win"],deathmatch["match-score-loss"],deathmatch["match-kda-value"],deathmatch["match-map"],deathmatch["match-agent-img"],deathmatch["rating-img"])
      setMainAgent(deathmatch["main-agent"])
      setStatValue(deathmatch["stats-value"])
      setAbilityStatValue(deathmatch["ability-kills-value"])
    }
    else if(mode=="re"){
      document.getElementById("agent-played-time").innerHTML=replication["agent-played-time"]
      setMatchHistoryStat(replication["match-score-win"],replication["match-score-loss"],replication["match-kda-value"],replication["match-map"],replication["match-agent-img"],replication["rating-img"])
      setMainAgent(replication["main-agent"])
      setStatValue(replication["stats-value"])
      setAbilityStatValue(replication["ability-kills-value"])
    }
    

  }

  document.getElementById("agent-played-time").innerHTML=unrated["agent-played-time"]
  setMatchHistoryStat(unrated["match-score-win"],unrated["match-score-loss"],unrated["match-kda-value"],unrated["match-map"],unrated["match-agent-img"],unrated["rating-img"])
  setMainAgent(unrated["main-agent"])
  setStatValue(unrated["stats-value"])
  setAbilityStatValue(unrated["ability-kills-value"])

ranks=[
  "UNRANKED",
"Unused1",
"Unused2",
"IRON 1",
"IRON 2",
"IRON 3",
"BRONZE 1",
"BRONZE 2",
"BRONZE 3",
"SILVER 1",
"SILVER 2",
"SILVER 3",
"GOLD 1",
"GOLD 2",
"GOLD 3",
"PLATINUM 1",
"PLATINUM 2",
"PLATINUM 3",
"DIAMOND 1",
"DIAMOND 2",
"DIAMOND 3",
"ASCENDANT 1",
"ASCENDANT 2",
"ASCENDANT 3",
"IMMORTAL 1",
"IMMORTAL 2",
"IMMORTAL 3",
"RADIANT",
]
