const newman = require("newman");
fs = require("fs");

newman
  .run({
    collection: require("./ExportedPostmanFile.postman_collection.json"), // Executing the API requests written through Postman
    reporters: "cli",
    delayRequest: 5500, // Time delay between each API requests to prevent being misidentified as DoS
  })
  .on("request", function (error, args) {
    if (error) {
      console.error(error);
    } else {
      const newname = Date.now().toString() + ".json"; // Save the Fetch requests as JSON files named chronologically
      fs.writeFile(newname, args.response.stream, function (error) {
        if (error) {
          console.error(error);
        }
      });
    }
  });
