alert("🌿🌿🌿 Welcome to the Borneo Jungle Adventure!🌿🌿🌿");

const userName = prompt("What is your name, adventurer?");

if (!userName || userName.trim() === "") {
  alert("You should type your name! Otherwise, the adventure can't begin!🌿");
  throw new Error("🚫Game aborted:No name provided.");
}

let health = 3;

alert(`👋 Salamat datang, ${userName} ! You have ${health} hearts ❤️❤️❤️`);
alert(
  "You wake up near the banks of the Barito River, surrounded by whispers of the ancient Dayak Maanyan jungle. Your adventure begins now! 🌳🌺🐒"
);

const pathChoice = prompt(
  "You see two paths ahead: one leading deeper into the jungle (type 'jungle') and another towards the river (type 'river'). Which path do you choose?"
).toLowerCase();

if (pathChoice === "river") {
  alert(
    "You follow the Barito River and meet a friendly proboscis monkey named Bakey 🐒."
  );
  const choice1 = prompt(
    "Bakey offers you a ripe durian fruit. Doy you eat it now (type 'eat') or save it for later (type 'save')?"
  ).toLowerCase();

  if (choice1 === "eat") {
    alert("Sweet and juicy! 🍒 You feel refreshed and gain energy!");
    health++;
  } else {
    alert("You save it for later, but your stomach growls 😅.");
    health--;
  }

  const choice2 = prompt(
    "Bakey shows you a small raft. Do you ride downstream (type 'ride') or explore the riverbank (type 'explore')?"
  ).toLowerCase();
  if (choice2 === "ride") {
    alert(
      "You paddle gently downstream and discover a peaceful Dayak Maanyan village 🏡."
    );
    alert(
      "The villagers welcome you with tuak and rice. You have completed your journey, " +
        userName +
        "! 🎉"
    );
    health = 3;
  } else {
    alert("The forest floor is slippery — you fall and lose 1 heart 💔.");
    health--;
  }
} else if (pathChoice === "jungle") {
  alert(
    "You venture deeper into the jungle and hear the beat of gongs echoing in the distance."
  );
  alert("A wise hornbill named Sangiang 🦜 lands nearby and speaks softly.");
  const riddle = prompt(
    "Sangiang says: 'Answer me, traveler. I stand tall and strong, my roots deep in the earth. What am I?'"
  ).toLowerCase();

  if (riddle.includes("tree")) {
    alert(
      "“Correct!” says Sangiang. He blesses you with the strength of the forest 🌳✨."
    );
    health++;
  } else {
    alert(
      "“Wrong,” he sighs. The forest spirits frown upon you. Lose 1 heart 💔."
    );
    health--;
  }

  const camp = prompt(
    "As night falls, do you set up camp to rest (type 'rest') or keep moving through the night (type 'move')?"
  ).toLowerCase();
  if (camp === "rest") {
    alert("You rest safely and recover 1 heart 💤.");
    health++;
  } else {
    alert("You walk through the night and lose 1 heart from exhaustion 😩.");
    health--;
  }
} else {
  alert(
    "🚫 Invalid choice! You wander aimlessly and get lost in the jungle 💔."
  );
  health = 0;
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
