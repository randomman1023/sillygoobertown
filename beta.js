var complete = 1;

var endings = 0;

var deathendings = 0;

var surendings = 0;

var big = 0;

var floor2 = false;

var voidalert = false;

var glumb = false;

var demon = false;

var fillers = false;

var game = {
  image: [
    "original.png",
    "dream.png",
    "radpoison.png",
    "mutation.png",
    "ascension.png",
    "catgirlending1.png",
    "treatment.png",
    "deathregion/burial.png",
    "cancured.png",
    "bingus.png",
    "falsealarm.png",
    "betrayal.png",
    "deathregion/afterlife.png",
    "deathregion/heaven.png",
    "deathregion/hell.png",
    "deathregion/ripntear.png",
    "deathregion/doom.png",
    "noclip.png",
    "hospital.png",
    "survivor.png",
    "survival/survival.png",
    "deathregion/pain.png",
    "survival/berger.png",
    "survival/bongo.png",
    "survival/dabloons.png",
    "survival/comeon.gif",
    "survival/catgirl2.png",
    "survival/rat.png",
    "survival/halflife.png",
    "survival/filler.png",
    "survival/cheezit.png",
    "survival/vibe.png",
    "survival/vibing.png",
    "survival/totem.png",
    "survival/overworld.png",
    "survival/nether.png",
    "floor2/federalcrime.png",
    "floor2/freehim.png",
    "floor2/mmmpotstew.png",
    "floor2/jail.png",
    "floor2/relax.png",
    "floor2/chilling.png",
    "floor2/smol.png",
    "floor2/slap.png",
    "floor2/slapslap.png",
    "floor2/floppa.png",
    "floor2/bigfloppa.png",
    "floor2/watermelon.png",
    "floor2/birthday.png",
    "floor2/suffering.png",
    "floor2/water.png",
    "floor2/drought.png",
    "floor2/government.png",
    "floor2/plains.png",
    "floor2/dime3.png",
    "void/void.png",
    "void/cat.png",
    "void/pills.png",
    "void/matrix.png",
    "void/surge.png",
    "void/cracked.png",
    "void/shutdown.png",
    "floor2/anarchy.png",
    "floor2/angelcat.png",
    "glumbo/glumbo.png",
    "glumbo/sub.png",
    "glumbo/chile.png",
    "glumbo/butternut.png",
    "glumbo/tallcate.png",
    "glumbo/d.png",
    "glumbo/r.png",
    "glumbo/pieces.png",
    "glumbo/first.png",
    "glumbo/second.png",
    "glumbo/third.png",
    "glumbo/tallcate.png",
    "glumbo/godcat.png",
    "glumbo/battle.png",
    "glumbo/bending.png",
    "glumbo/nending.png",
    "finals/demoncat.png",
    "finals/study.png",
    "finals/beings.png",
    "finals/study.png",
    "finals/infpain.png",
    "finals/good.png"

  ],

  title: [
    "The Beginning",
    "It was just a dream.",
    "Suffering radiation poisoning",
    "Getting mutated, becoming horrors",
    "Cat gains sentience and immense power",
    "Cat and I fuse together",
    "The government treated our sickness.",
    "Cat lays me to my last rest",
    "Cat gets cured of cancer",
    "AHHHHHHHHHHHHHHHHHHHHHHHH.",
    "Just a false alarm",
    "Cat was the bomb.",
    "We perished.",
    "Reunited in heaven",
    "Helped in Hell",
    "Rip and Tear",
    "Doom Eternal Storyline Reached",
    "No-clipped out of reality",
    "Society collapses",
    "Joined Survivor Group",
    "We survived the blast",
    "Nevermind",
    "BurgerKing!",
    "Cat learns to play bongos",
    "Cat earns 4 dabloons",
    "COME ON TURN INTO A CATGIRL ALREADY",
    "Cat Becomes Catgirl",
    "Teleported to parallel universe",
    "Resonance Cascade Disaster",
    "We swapped bodies",
    "Covered in Cheez Itz",
    "Cat starts vibing",
    "Cats Vibing Dimesion Reached",
    "Cat saves me from dying",
    "The overworld isn't safe anymore",
    "Stuck in the nether",
    "He CANNOT BE STOPPED",
    "Free him?",
    "Final Chance",
    "Stuck in Jail Forever",
    "Going to Dismantle the Government",
    "Chilling",
    "smol cat chilling too",
    "Cat acts silly",
    "Cat makes funny noise",
    "Floppa kinda chilling too ngl",
    "Big Floppa offers a watermelon",
    "Watermelon was accepted.",
    "Cat has birthday but nobody came",
    "LOOK ME IN THE EYES",
    "Cat starts drink water",
    "Cat drinks too much. DC has drought.",
    "The US government has collapsed.",
    "Cats Advertising Fav Snacks and Drinks",
    "Advertisment Dimesion Reached",
    "We are in the Void",
    "The Ceiling Cat has come to save you.",
    "Pick a pill, any pill!",
    "Welcome to the Matrix",
    "WHAT IS THIS POWER",
    "The cracks in the simulation are showing",
    "This is the END",
    "The world is in anarchy",
    "The Angel Cat bestows Glumbo onto the world in hopes of fixing the timeline.",
    "GLUMBO HAS BEEN BORN",
    "Glumbo breaks jailed cat out and converts him into glumbo subordinate",
    "The pain from the second nuclear bomb converts into cosmic energy, creating glumbo chile",
    "Glumbo chile uses pent up rage to make butternut a manipulative master.",
    "Glumbo converts smol cate into tall cate.",
    "D cat awakens to fight tall cate",
    "D cat loses life in battle, but still succeeds in his goal.",
    "Tall cate was split into three and was scattered across the temporal plane.",
    "Glumbo subordinate located the first piece",
    "Glumbo subordinate located the second piece",
    "Glumbo subordinate located the third piece",
    "Tall Cate has been rebuilt.",
    "God Cat has returned, and must save the universe",
    "The Battle for the Universe commences!",
    "God Cat was over powered and manipulated into giving Glumbo control of the universe",
    "God Cat defeated Glumbo in an epic battle but lost control of the universe. A new ruler needs to be chosen.",
    "The demon cat is awoken by the many endings of the timelines",
    "Cat and Protaganist study the many timelines",
    "Demon Cat summons the remaining cosmic beings to destroy the universe",
    "Which filler ending? How will we find out?",
    "Demon cat has destroyed the universe. I can't believe you chose the wrong ending.",
    "The universe is saved."
  ],

  description: [
    "This is the start of the game.",
    "Turns out the nuclear blast was just a bad dream.",
    "Y'know, radiation poisoning is really painful.",
    "I was wrong, getting mutated is the opitome of pain.",
    "It's... amazing. Simply incredible.",
    "Hmm, who has control of the body?",
    "Well, at least we're still alive.",
    "Sorry I couldn't save myself. Stay careful cat.",
    "Just because he's hairless doesn't mean I love him less.",
    "hi bingus...",
    "Phew, I was worried for a sec.",
    "How could you!?",
    "Oh come on!",
    "We lived a good life.",
    "Thanks bud, now let's have some fun.",
    "Ummmm...",
    "So that's why its seemed familiar!",
    "This place feels familiar, but not in a good way.",
    "Thank goodness we found some medications",
    "This is nice, except the post apocalyptic part, that sucks.",
    "That was scary",
    "Ow",
    "NOM NOM NOM",
    "These are some sweet jams!",
    "WE'RE RICH!!!",
    "DO IT!",
    "Catgirls become a normal part of society",
    "You're a rat now?! No matter, you are still amazing.",
    "No kitty, dont push that crystal, kitty nooooooooooooo",
    "And the machine broke. I guess we're stuck like this.",
    "Won't budge.",
    "Cat is vibing",
    "Cats ARE vibing",
    "That was a close one",
    "I'll miss this place",
    "I don't know how this is safer",
    "What did I do",
    "Nevermind he was stopped.",
    "I'm sorta hungry...",
    "Wishing you didn't commit a crime now huh!",
    "Are you sure?",
    "Not right now...",
    "chilling together",
    "SLAP SLAP",
    "SLAPSLAPSLAPSLAP",
    "chilling together",
    "ooooh",
    "Cat eats watermelon and becomes one himself. Lays there for eternity.",
    "He's very sad now.",
    "DO YOU FEEL IT",
    "Me thirsty",
    "The president died",
    "THE END IS NIGH!",
    "srou pacht kid s",
    "mimt oro",
    "The three higher dimensions collapsed, forming a rift to the void.",
    "(Yay! Ceiling Cat! Woo!)",
    "Blu pill to go back to the fake reality, red to learn the truth.",
    "Transitions to matrix storyline.",
    "WHAT IS HAPPENING",
    "It's close to the end",
    "At least we're together",
    "Sigh",
    "Oh, great angel cat, thank you... hold on, oh no, WHAT IS THAT THING!",
    "He is hungry for POWER",
    "Glumbo sub shall serve master glumbo",
    "THE PAIN, IT FUELS ME",
    "Can I hav some foowd pweease, mweh heh heh",
    "He must be defeated",
    "Help us great d cat!",
    "Becomes the deceased r cat",
    "Hopefully no-one rebuilds tall cate.",
    "Wait no way.",
    "He's actually doing it! :0",
    "We're all dead",
    "Once joined with the other glumbo forces, we will be UNSTOPPABLE",
    "Ok how does intertemporal transportation work like how to go back in time but stay in the present and the future and... I give up.",
    "I don't know anymore, I just hope that Glumbo is defeated I'm not even sure if the previous timelines are relevant anymore this is just a rant on how I'm confused. This decription doesnt't make sense to mere mortals like I, the commentator.",
    "Glumbo killed god cat. God Cat has been defeated.",
    "Cate is chosen as the new ruler.",
    "Ok. Just Ok.",
    "HMMMMMMM",
    "Well, we're dead.",
    "Hint: you may need something that can't budge, something literally immovable",
    "Sooooooo...",
    "Phew I was scared for a sec."
  ],

  direct: [
    "What happens next?",
    "[OPTIONAL ENDING]",
    "What happens next?",
    "What mutations occur?",
    "ASCENSION ENDING ACQUIRED",
    "CATGIRL ENDING ACQUIRED",
    "What happens next?",
    "BURIAL ENDING ACQUIRED",
    "What happens next?",
    "BINGUS ENDING ACQUIRED",
    "What happens next?",
    "BETRAYAL ENDING ACQUIRED",
    "Which path did we choose?",
    "AFTERLIFE ENDING ACQUIRED",
    "What are we going to do here?",
    "okay um",
    "DOOM ENDING ACQUIRED",
    "BACKROOMS ENDING ACQUIRED",
    "Time to survive",
    "We survived, I guess.",
    "What do we want to do?",
    "Ow",
    "BURGER KING ENDING ACQUIRED",
    "Hmm, maybe you can make some money!",
    "PROFIT ENDING ACQUIRED",
    "Hmm",
    "CAT GIRL ENDING 2 ACQUIRED",
    "RAT ENDING ACQUIRED",
    "HALFLIFE ENDING ACQUIRED",
    "FILLER EPISODE ENDING ACQUIRED",
    "CHEEZIT ENDING ACQUIRED",
    "Hmm is that a dimesional rift?",
    "ETERNAL VIBING ENDING ACQUIRED",
    "What happens next?",
    "To the Nether!",
    "MINECRAFT ENDING ACQUIRED",
    "What does he decide?",
    "Do you free him?",
    "Do you free him?",
    "JAIL ENDING ACQUIRED",
    "What does he do?",
    "What happens next?",
    "SMOL CAT ENDING ACQUIRED",
    "What happens next?",
    "SLAPSLAP ENDING ACQUIRED",
    "What happens next?",
    "Do you accept?",
    "WATERMELON ENDING ACQUIRED",
    "What happens to cat?",
    "SUFFERING ENDING ACQUIRED",
    "What will happen next?",
    "Ohno! Anyways... wait, this is actually a big problem! What happens next?!",
    "How will we cope with this tragedy!",
    "What could this possibly transition too?",
    "ETERNAL ADVERTISMENT ENDING ACQUIRED",
    "Do you really expect a way out of here.",
    "Once again I have been proven wrong.",
    "Which one?",
    "MATRIX ENDING ACQUIRED",
    "AAAAAAAAAHHHHH",
    "...",
    "NOTHINGNESS ENDING ACQUIRED",
    "Who will save us now?!",
    "And now the BIRTH OF GLUMBO",
    "Who does he affect first. btw reload to go back to the beginning",
    "Now for the others",
    "Patience, we still have some more to do",
    "MWAH HAH HAH",
    "Who shall save us from the cosmic beast?",
    "Does d cat win?",
    "What happened to tall cate?",
    "Let's hope someone doesn't reassemble tall cate.",
    "Pls don't assemble him",
    "Wait I can't stop glumbo subordinate I'm a mere mortal",
    "What's the point in trying anymore",
    "Ok so here's what happens next... Tall Cate and the others *crash sound* MPHHM PHMMMPHM PMHMPPMPMMMMMMM!!!",
    "So... what happens next?",
    "WHO WINS?",
    "BAD ENDING ACQUIRED",
    "NEUTRAL ENDING ACQUIRED",
    "Who will stop him?",
    "How will demon cat retaliate?",
    "What will you do?",
    "Which filler ending do you choose.",
    "INFINITE PAIN ENDING ACQUIRED",
    "GOOD ENDING ACQUIRED"

  ],

  type: ["path", "ending", "path", "path", "ending", "ending", "path", "deathending", "path", "ending", "path", "ending", "path", "deathending", "path", "path", "deathending", "ending", "path", "path", "path", "path", "survival", "path", "survival", "path", "survival", "survival", "survival", "survival", "survival", "path", "survival", "path", "path", "survival", "path", "path", "path", "ending", "path", "path", "ending", "path", "ending", "path", "path", "ending", "path", "ending", "path", "path", "path", "path", "ending", "path", "path", "path", "ending", "path", "path", "bigending", "path", "path", "path", "path", "path", "path", "path", "path", "path", "path", "path", "path", "path", "path", "path", "path", "bigending", "bigending", "path", "path", "path", "path", "cosmic", "cosmic"],

  completed: [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],

  requirements: {
    req0: [0],
    req1: [0],
    req2: [0],
    req3: [0],
    req4: [0],
    req5: [0],
    req6: [0],
    req7: [0],
    req8: [0],
    req9: [0],
    req10: [0],
    req11: [0],
    req12: [0],
    req13: [0],
    req14: [0],
    req15: [0],
    req16: [0],
    req17: [0],
    req18: [0],
    req19: [0],
    req20: [0],
    req21: [0],
    req22: [0],
    req23: [22],
    req24: [0],
    req25: [22],
    req26: [0],
    req27: [25, 26],
    req28: [25, 26],
    req29: [25, 26],
    req30: [28, 29],
    req31: [28, 29],
    req32: [0],
    req33: [28, 29],
    req34: [0],
    req35: [0],
    req36: [1, 4, 5, 7, 9, 11, 13, 16, 17, 22, 24, 26, 27, 28, 29, 30, 32, 35],
    req37: [0],
    req38: [0],
    req39: [0],
    req40: [1, 4, 5, 7, 9, 11, 13, 16, 17, 22, 24, 26, 27, 28, 29, 30, 32, 35],
    req41: [0],
    req42: [0],
    req43: [0],
    req44: [0],
    req45: [0],
    req46: [0],
    req47: [0],
    req48: [0],
    req49: [0],
    req50: [39, 42, 21, 49],
    req51: [0],
    req52: [39, 42, 21, 49],
    req53: [0],
    req54: [0],
    req55: [17, 32, 54],
    req56: [0],
    req57: [0],
    req58: [0],
    req59: [0],
    req60: [0],
    req61: [0],
    req62: [0],
    req63: [0],
    req64: [0],
    req65: [0],
    req66: [0],
    req67: [0],
    req68: [0],
    req69: [0],
    req70: [0],
    req71: [0],
    req72: [71, 65],
    req73: [0],
    req74: [0],
    req75: [72, 73, 65],
    req76: [0],
    req77: [76, 67],
    req78: [0],
    req79: [0],
    req80: [61, 78, 79],
    req81: [1, 4, 5, 7, 9, 11, 13, 16, 17, 22, 24, 26, 27, 28, 29, 30, 32, 35, 39, 42, 44, 47, 49, 54, 58],
    req82: [0],
    req83: [0],
    req84: [0],
    req85: [0],
    req86: [0]
  },

  choices: {
    title0: ["Was just a dream...", "Survives the blast but...", "False alarm", "We perish", "No-clip"],
    direction0: [1, 2, 10, 12, 17],

    title1: ["The dream was real!"],
    direction1: [0],

    title2: ["Sickness isn't treated.", "Government treats sickness.", "Society collapses"],
    direction2: [3, 6, 18],

    title3: ["Cat gains sentience", "Cat and I fuse"],
    direction3: [4, 5],

    title4: ["Return to the beginning."],
    direction4: [0],

    title5: ["Return to the beginning."],
    direction5: [0],

    title6: ["Cat lives but...", "Cat gets cancer treatment", "Both die of cancer", "Cured completely"],
    direction6: [7, 8, 12, 20],

    title7: ["Return to the beginning."],
    direction7: [0],

    title8: ["Become meme"],
    direction8: [9],

    title9: ["Return to the beginning."],
    direction9: [0],

    title10: ["umm...", "Life goes on..."],
    direction10: [11, 20],

    title11: ["Return to the beginning."],
    direction11: [0],

    title12: ["A good life", "A bad life"],
    direction12: [13, 14],

    title13: ["Return to the beginning."],
    direction13: [0],

    title14: ["You ok there buddy?"],
    direction14: [15],

    title15: ["Seems familiar..."],
    direction15: [16],

    title16: ["Return to the beginning."],
    direction16: [0],

    title17: ["Return to the beginning.", "Rift"],
    direction17: [0, 55],

    title18: ["Find survivor group"],
    direction18: [19],

    title19: ["Survive"],
    direction19: [20],

    title20: ["Another bomb is launched", "Another bomb is launched, I promise this is different", "Go to Burger King", "Learn Bongos", "COTIACGA", "Go to parallel universe", "Trigger the Resonance Cascade Disaster", "Body-Swap Machine", "cheezit", "Cat starts vibing", "Minceraft", "Commit a federal crime.", "Relax...", "Cat starts drinking water"],
    direction20: [0, 21, 22, 23, 25, 27, 28, 29, 30, 31, 33, 36, 40, 50],

    title21: ["We died Ow"],
    direction21: [12],

    title22: ["Return to the beginning."],
    direction22: [0],

    title23: ["Make Dabloons"],
    direction23: [24],

    title24: ["Return to the beginning."],
    direction24: [0],

    title25: ["*turns into catgirl*"],
    direction25: [26],

    title26: ["Return to the beginning."],
    direction26: [0],

    title27: ["Return to the beginning."],
    direction27: [0],

    title28: ["Return to the beginning."],
    direction28: [0],

    title29: ["Return to the beginning."],
    direction29: [0],

    title30: ["Return to the beginning."],
    direction30: [0],

    title31: ["Continue Vibing"],
    direction31: [32],

    title32: ["Return to the beginning.", "Rift"],
    direction32: [0, 55],

    title33: ["The overworld is uninhabitable"],
    direction33: [34],

    title34: ["Stuck in nether."],
    direction34: [35],

    title35: ["Return to the beginning."],
    direction35: [0],

    title36: ["Gets caught", "Doesn't commit federal crime."],
    direction36: [37, 41],

    title37: ["Yes", "No"],
    direction37: [41, 38],

    title38: ["Free him", "mmm pot stew"],
    direction38: [41, 39],

    title39: ["Return to the beginning."],
    direction39: [0],

    title40: ["Gets caught", "Relaxes too long", "Succeeds"],
    direction40: [37, 41, 52],

    title41: ["smol cat chilling too", "cat acts silly", "floppa chilling too", "Cat has birthday", "Cat starts advertising it's fav snacks and drinks"],
    direction41: [42, 43, 45, 48, 53],

    title42: ["Return to the beginning."],
    direction42: [0],

    title43: ["makes funny noise"],
    direction43: [44],

    title44: ["Return to the beginning."],
    direction44: [0],

    title45: ["Floppa has an offer"],
    direction45: [46],

    title46: ["Yes", "Commit War Crimes against Serbia"],
    direction46: [47, 52],

    title47: ["Return to the beginning."],
    direction47: [0],

    title48: ["Torment and Suffering"],
    direction48: [49],

    title49: ["Return to the beginning."],
    direction49: [0],

    title50: ["Drought"],
    direction50: [51],

    title51: ["Chaos"],
    direction51: [52],

    title52: ["Anarchy consumes the world"],
    direction52: [62],

    title53: ["Dimesional rift"],
    direction53: [54],

    title54: ["Return to the beginning.", "Rift"],
    direction54: [0, 55],

    title55: ["Pet my cat"],
    direction55: [55],

    title56: ["Red pill, blu pill"],
    direction56: [57],

    title57: ["mmm blueberry gummy", "based and redpilled"],
    direction57: [0, 58],

    title58: ["Return to the beginning."],
    direction58: [0],

    title59: ["The simulation starts breaking down"],
    direction59: [60],

    title60: ["The simulation shuts down."],
    direction60: [61],

    title61: ["Return to the beginning."],
    direction61: [0],

    title62: ["Someone attemps to save it."],
    direction62: [63],

    title63: ["THE BIRTH OF GLUMBO"],
    direction63: [64],

    title64: ["Free Jail Cat", "Control pain into another form", "Convert smol cate", "Glumbo sub searches for the pieces of tall cate."],
    direction64: [65, 66, 68, 72],

    title65: ["Return to Glumbo"],
    direction65: [64],

    title66: ["Convert someone else"],
    direction66: [67],

    title67: ["Return to Glumbo", "The battle for the universe"],
    direction67: [64, 77],

    title68: ["The legendary d cat is awakened"],
    direction68: [69],

    title69: ["Tall cate is defeated"],
    direction69: [70],

    title70: ["Tall cate is split"],
    direction70: [71],

    title71: ["Return to Glumbo", "Reassemble Tall Cate"],
    direction71: [64, 75],

    title72: ["Next Piece"],
    direction72: [73],

    title73: ["Next Piece"],
    direction73: [74],

    title74: ["Rebuild Tall Cate"],
    direction74: [75],

    title75: ["God Cat has to take matters into his own hands"],
    direction75: [76],

    title76: ["Glumbo hasn't finished assembling the team.","The Battle of the Gods commences"],
    direction76: [64,77],

    title77: ["God Cat", "Glumbo"],
    direction77: [79, 78],

    title78: ["Return to Glumbo", "Return to the beginning", "Go to the end of the universe"],
    direction78: [64, 0, 80],

    title79: ["Return to Glumbo", "Return to the beginning", "Go to the end of the universe"],
    direction79: [64, 0, 80],

    title80: ["Not all filler endigns are reached. All filler endings are required to continue.", "Us"],
    direction80: [0, 81],

    title81: ["Demon Cat summons abominations"],
    direction81: [82],

    title82: ["We look through all the filler endings again."],
    direction82: [83],

    title83: ["Dream ending", "Ascension ending", "Catgirl ending 1", "Burial ending", "Bingus ending", "Betrayal ending", "Afterlfe ending", "Doom ending", "Backrooms ending", "Burger King ending", "Profit ending", "Catgirl ending 2", "Rat ending", "Halflife ending", "Filler episode ending", "Cheezit ending", "Eternal Vibing ending", "Minecraft ending", "Jail ending", "Smol cat endings", "Slap slap ending", "Watermelon ending", "Suffering ending", "Eternal advertisement ending", "Matrix ending"],
    direction83: [84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 85, 84, 84, 84, 84, 84, 84, 84, 84, 84],

    title84: ["Return to the beginning"],
    direction84: [0],

    title85: ["Complete the game"],
    direction85: [86],
  },

  choicechosen: function (index) {
    if (game.completed[index] == false) {
      game.completed[index] = true

      switch (game.type[index]) {
        case "path":
          break;

        case "ending":
          endings++
          document.getElementById("regularendings").innerHTML = endings
          break;

        case "deathending":
          deathendings++
          document.getElementById("deathendings").innerHTML = deathendings
          break;

        case "survival":
          surendings++
          document.getElementById("surendings").innerHTML = surendings
          break;

        case "bigending":
          big++
          document.getElementById("big").innerHTML = big
          break;
      }
    }

    if (index == 86) {
      window.location.replace("complete.html")
    }

    document.getElementById("img").innerHTML = '<img src="/Images/' + game.image[index] + '">'
    document.getElementById("title").innerHTML = game.title[index]
    document.getElementById("desc").innerHTML = game.description[index]
    document.getElementById("direct").innerHTML = game.direct[index]
    document.getElementById('choices').innerHTML = ""

    for (i = 0; i < game.choices['title' + index].length; i++) {

      var requirement = 0

      for (a = 0; a < game.requirements['req' + game.choices['direction' + index][i]].length; a++) {
        if (game.completed[game.requirements['req' + game.choices['direction' + index][i]][a]] == true) {
          requirement++
        }
      }

      if (requirement == game.requirements['req' + game.choices['direction' + index][i]].length) {
        document.getElementById('choices').innerHTML += '<button onclick="game.choicechosen(' + game.choices['direction' + index][i] + ')">' + game.choices['title' + index][i] + '</button><br/><br/>'
      }
      else {
        document.getElementById('choices').innerHTML += '<button>PATH BLOCKED</button><br /><br />'
      }
    }

    if (game.completed[1] == true && game.completed[4] == true && game.completed[5] == true && game.completed[7] == true && game.completed[9] == true && game.completed[11] == true && game.completed[13] == true && game.completed[16] == true && game.completed[17] == true && game.completed[30] == true && game.completed[32] == true && game.completed[35] == true && game.completed[27] == true && game.completed[23] == true && floor2 == false) {
      floor2 = true
      document.getElementById("alert").innerHTML = `<div class="alert"><span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span><strong>Alert!</strong> You have unlocked the second layer.</div>`
    }

    if (game.completed[17] == true && game.completed[32] == true && game.completed[54] && voidalert == false) {
      voidalert = true
      document.getElementById("alert").innerHTML = `<div class="alert"><span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span><strong>Alert!</strong> You have unlocked the Void.</div>`
    }

    if (game.completed[39] == true && game.completed[42] == true && game.completed[21] == true && game.completed[49] == true && glumb == false) {
      glumb = true
      document.getElementById("alert").innerHTML = `<div class="alert"><span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span><strong>Alert!</strong> You have unlocked the THE BIRTH OF GLUMBO.</div>`
    }

    if (game.completed[61] == true && game.completed[78] == true && game.completed[79] == true && demon == false) {
      demon = true
      document.getElementById("alert").innerHTML = `<div class="alert"><span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span><strong>Alert!</strong> You have unleashed the demon cat.</div>`
    }

    if (game.completed[1] == true && game.completed[4] == true && game.completed[5] == true && game.completed[7] == true && game.completed[9] == true && game.completed[11] == true && game.completed[13] == true && game.completed[16] == true && game.completed[17] == true && game.completed[22] == true && game.completed[24] == true && game.completed[26] == true && game.completed[27] == true && game.completed[28] == true && game.completed[29] == true && game.completed[30] == true && game.completed[32] == true && game.completed[35] == true && game.completed[39] == true && game.completed[42] == true && game.completed[44] == true && game.completed[47] == true && game.completed[49] == true && game.completed[54] == true && game.completed[58] == true && fillers == false) {
      fillers = true
      document.getElementById("alert").innerHTML = `<div class="alert"><span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span><strong>Alert!</strong> All fillers unlocked. You can fight the demon cat.</div>`
    }


    if (index == 55 && Math.floor(Math.random() * (6 - 1) + 1) == 5) {
      document.getElementById('choices').innerHTML = '<button onclick="game.choicechosen(56)">The ceiling cat saves you.</button><br /><br /><button onclick="game.choicechosen(59)">An incredible surge of energy.</button>'
    }
  }
}

setInterval(function () {
  var gameSave = {
    progress: game.completed,
    nendings: endings,
    ndeathendings: deathendings,
    nsurendings: surendings,
    nbig: big,
    nfloor2: floor2,
    nvoidalert: voidalert,
    nglumb: glumb,
    ndemon: demon,
    nfillers: fillers
  }
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}, 100)

function loadGame() {
  var gameSaved = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof gameSaved.progress !== "undefined") game.completed = gameSaved.progress
  if (typeof gameSaved.nendings !== "undefined") endings = gameSaved.nendings
  if (typeof gameSaved.ndeathendings !== "undefined") deathendings = gameSaved.ndeathendings
  if (typeof gameSaved.nsurendings !== "undefined") surendings = gameSaved.nsurendings
  if (typeof gameSaved.nbig !== "undefined") big = gameSaved.nbig
  if (typeof gameSaved.nfloor2 !== "undefined") floor2 = gameSaved.nfloor2
  if (typeof gameSaved.nvoidalert !== "undefined") voidalert = gameSaved.nvoidalert
  if (typeof gameSaved.nglumb !== "undefined") glumb = gameSaved.nglumb
  if (typeof gameSaved.ndemon !== "undefined") demon = gameSaved.ndemon
  if (typeof gameSaved.nfillers !== "undefined") fillers = gameSaved.nfillers

  document.getElementById("regularendings").innerHTML = endings
  document.getElementById("deathendings").innerHTML = deathendings
  document.getElementById("surendings").innerHTML = surendings
  document.getElementById("big").innerHTML = big
}

window.onload = (function () {
  game.choicechosen(0)
  loadGame();
})

function deleteSave() {
  game.completed = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  endings = 0
  deathendings = 0
  complete = 1
  surendings = 0
  big = 0
  floor2 = false
  voidalert = false
  glumb = false
  demon = false
  fillers = false
  document.getElementById("pathsinfo").innerHTML = 'Regular Endings: [<span id="regularendings">0</span>/13]<br /> Death Region Endings: [<span id="deathendings">0</span>/3] <br />Survival Endings: [<span id="surendings">0</span>/9] <br />Main Endings: [<span id="big">0</span>/3] <br />'
  game.choicechosen(0)
}

function test() {
  game.completed = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
  endings = 13
  deathendings = 3
  complete = 1
  surendings = 9
  big = 3
}