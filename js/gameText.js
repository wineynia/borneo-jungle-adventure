alert("🌿🌿🌿 Welcome to the Borneo Jungle Adventure!🌿🌿🌿");

let health = 3;

const paths = ["jungle", "river"];
const items = ["durian", "tuak"];
const riddles = [
  {
    question: "I stand tall and strong, my roots deep in the earth. What am I?",
    answer: "tree",
  },
  {
    question: "I have a trunk but no doors. What am I?",
    answer: "tree",
  },
  {
    question:
      "I can fly without wings. I can cry without eyes. Wherever I go, darkness flies. What am I?",
    answer: "cloud",
  },
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
    answer: "echo",
  },
  {
    question: "I can be cracked, made, told, and played. What am I?",
    answer: "joke",
  },
];

const userName = prompt("What is your name, adventurer?");
if (!userName || userName.trim() === "") {
  alert("You should type your name! Otherwise, the adventure can't begin!🌿");
  throw new Error("🚫Game aborted: No name provided.");
}

alert(`👋 Salamat datang, ${userName}! You have ${health} hearts ❤️❤️❤️`);
alert(
  "You wake up near the banks of the Barito River. Your adventure begins now! 🌳🌺🐒"
);

let pathChoice = "";
while (!paths.includes(pathChoice)) {
  pathChoice = prompt("Choose your path: jungle or river?").toLowerCase();
  if (!paths.includes(pathChoice)) {
    alert("🚫 Invalid choice! Please choose 'jungle' or 'river'.");
  }
}

if (pathChoice === "river") {
  alert(
    "You follow the river and meet a friendly proboscis monkey named Bakey 🐒."
  );

  let choice1 = prompt(
    "Bakey offers you a ripe durian fruit. Do you eat it now (type 'eat') or save it for later (type 'save')?"
  ).toLowerCase();

  if (choice1 === "eat") {
    alert("Sweet and juicy! 🍒 You feel refreshed and gain energy!");
    health++;
  } else {
    alert(
      "You save it for later, but your stomach growls 😅 and you lose one heart 💔."
    );
    health--;
  }

  let choice2 = "";
  while (choice2 !== "ride" && choice2 !== "explore") {
    choice2 = prompt(
      "Bakey shows you a small raft. Do you ride downstream (type 'ride') or explore the riverbank (type 'explore')?"
    ).toLowerCase();
  }

  if (choice2 === "ride") {
    alert(
      "You paddle gently downstream and discover a peaceful Dayak Maanyan village 🏡."
    );
    alert(
      "The villagers welcome you with tuak and rice. You have completed your journey, " +
        userName +
        "! 🎉"
    );
  } else {
    alert("The forest floor is slippery — you fall and lose 1 heart 💔.");
    health--;
  }
} else if (pathChoice === "jungle") {
  alert(
    "You venture deeper into the jungle and hear the beat of gongs in the distance."
  );
  alert("A wise hornbill, Sangiang 🦜, lands nearby and speaks softly.");

  const riddleIndex = Math.floor(Math.random() * riddles.length);
  const riddle = riddles[riddleIndex];
  let riddleAnswer = prompt(riddle.question).toLowerCase();

  if (riddleAnswer === riddle.answer) {
    alert(
      "“Correct!” says Sangiang. He blesses you with the strength of the forest 🌳✨."
    );
    health++;
  } else {
    alert(
      "“Wrong,” he sighs. The forest spirits frown upon you. You lose 1 heart 💔."
    );
    health--;
  }

  let camp = prompt(
    "As night falls, do you set up camp to rest (type 'rest') or keep moving (type 'move')?"
  ).toLowerCase();
  while (camp !== "rest" && camp !== "move") {
    camp = prompt("Invalid choice! Do you rest or keep moving?").toLowerCase();
  }

  if (camp === "rest") {
    alert("You rest safely and recover 1 heart 💤.");
    health++;
  } else {
    alert("You walk through the night and lose 1 heart 💔 from exhaustion 😩.");
    health--;
  }
}

if (health <= 0) {
  alert(
    "💀 You lost all your hearts, " +
      userName +
      ". The jungle has claimed you..."
  );
} else {
  alert(
    "🏁 Adventure over! " +
      userName +
      ", you survived with " +
      health +
      " hearts ❤️. The Maanyan spirits smile upon you."
  );
}

alert("🌿🌿🌿 Thank you for playing Borneo Jungle Adventure! 🌿🌿🌿");
