# FlowRouter SSR & Publish Counts Error

This reproduces a SSR error when using [publish-counts](https://github.com/percolatestudio/publish-counts)
with [FlowRouter SSR](https://github.com/kadirahq/flow-router/tree/ssr)

Versions:

* METEOR@1.3.2.4
* kadira:flow-router-ssr@3.13.0
* tmeasday:publish-counts@0.7.3

## Steps

1. Clone the repo
2. Run it by executing `meteor`
3. On the client side console, see "item count is 10"
4. On the server side, an error occurs:

```
W20160605-18:41:27.896(10)? (STDERR) Error when doing SSR. path:/: Object [object Object] has no method 'get'
W20160605-18:41:28.183(10)? (STDERR) TypeError: Object [object Object] has no method 'get'
W20160605-18:41:28.183(10)? (STDERR)     at both/main.js:8:28
W20160605-18:41:28.183(10)? (STDERR)     at Object.Tracker.autorun (packages/kadira:flow-router-ssr/server/plugins/ssr_data.js:53:5)
W20160605-18:41:28.183(10)? (STDERR)     at Object.action (both/main.js:6:13)
W20160605-18:41:28.183(10)? (STDERR)     at packages/kadira:flow-router-ssr/server/route.js:77:26
W20160605-18:41:28.184(10)? (STDERR)     at [object Object]._.extend.withValue (packages/meteor/dynamics_nodejs.js:56:1)
W20160605-18:41:28.184(10)? (STDERR)     at packages/kadira:flow-router-ssr/server/route.js:67:33
W20160605-18:41:28.184(10)? (STDERR)     at [object Object]._.extend.withValue (packages/meteor/dynamics_nodejs.js:56:1)
W20160605-18:41:28.184(10)? (STDERR)     at Route._processFromSsr (packages/kadira:flow-router-ssr/server/route.js:66:29)
W20160605-18:41:28.184(10)? (STDERR)     at packages/meteorhacks_fast-render/lib/server/routes.js:72:1
W20160605-18:41:28.185(10)? (STDERR)     at [object Object]._.extend.withValue (packages/meteor/dynamics_nodejs.js:56:1)
``
