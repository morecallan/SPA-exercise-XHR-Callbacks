var Predator = (function () {
  // Predator should have two private arrays to store carnivores and herbivores.
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {

      //Step 1: Set up http req for carnivores
      var loader = new XMLHttpRequest;

      //Step 2: Go get it
      loader.open("GET", "carnivores.json");
      loader.send();

      //Step 3: Event Listener
      loader.addEventListener("load", loadSuccess);
      loader.addEventListener("failed", failedExecution);

      //Step 4: Translate into JS
      function failedExecution() {
          alert("Error loading page. Please refresh.")
      };

      //Step 5: Create callback for once the product page loads
      function loadSuccess() {
        carnivores = JSON.parse(this.responseText);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(carnivores)
      };
    },

    loadHerbivores: function (callbackToInvoke) {

      //Step 1: Set up http req for carnivores
      var loader = new XMLHttpRequest;

      //Step 2: Go get it
      loader.open("GET", "herbivores.json");
      loader.send();

      //Step 3: Event Listener
      loader.addEventListener("load", loadSuccess);
      loader.addEventListener("failed", failedExecution);

      //Step 4: Translate into JS
      function failedExecution() {
          alert("Error loading page. Please refresh.")
      };

      //Step 5: Create callback for once the product page loads
      function loadSuccess() {
        herbivores = JSON.parse(this.responseText);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(herbivores)
      };
    }
  }
})();