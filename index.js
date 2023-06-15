function scuberGreetingForFeet(distance) {
      if (distance <= 199) {
        return "This one is on me!";
      } else if (distance <= 2001) {
        return "I will gladly take your thirty bucks.";
      } else if (distance <= 2501) {
        return "No can do.";
      } else {
        return "Whoa, that's quite a journey!";
      }
    }

function ternaryCheckCity(destination) {
      return destination === "NYC" ? "Ok, sounds good." : "No go.";
    }
    
    
function switchOnCharmFromTip(maxAmount) {
      switch (maxAmount) {
        case "generous":
          return "Thank you so much.";
        case "not as generous":
          return "Thank you.";
        default:
        return "Bye.";
        
      }
    }