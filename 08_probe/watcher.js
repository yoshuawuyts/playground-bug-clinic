    // watcher.js
    module.exports = {
      local : function (traces) {
        traces.on("request:start", function (trace) {
          console.log(trace.url);
        });

        traces.on("request:end", function (trace) {
          console.error(trace.statusCode);
        });
      }
    };
