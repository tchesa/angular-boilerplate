
const RouterProvider = function RouterProvider($locationProvider, $stateProvider, $urlRouterProvider) {
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false,
  // });
  // $urlRouterProvider.otherwise('/404');

  const config = {
    // The paths where html template resides
    viewsBasePath: './views/',
    // Automatically prepend views path to all templatesUrl?
    useViewsBasePath: true,
    // Set the following to true to enable the HTML5 Mode
    // You may have to set <base> tag in index and a routing configuration in your server
    html5Mode: {
      enabled: true,
      requireBase: false,
    },
    // defaults to dashboard
    // defaultRoute: '/app/dashboard'
    defaultRoute: '/404',
  };

  // public access to change configuration
  this.configure = function configure(cfg) {
    angular.extend(config, cfg);
  };

  $locationProvider.html5Mode(config.html5Mode);

  $urlRouterProvider.otherwise(config.defaultRoute);

  this.$get = Router;

  Router.$inject = ['$rootScope', '$state', '$stateParams', 'APP_REQUIRES', 'AuthFactory'];

  function Router($rootScope, $state, $stateParams, APP_REQUIRES, AuthFactory) {
    /* jshint validthis:true */

    const service = {
      // service access level
      viewpath,
      resolveFor,
      state,
      getStates,
    };

    init();

    return service;

    // wrapper for $stateProvider to simply routes creation
    function state(name, options) {
      if (!name) throw new Error('Route name not defined.');

      if (options.require) {
        const require = this.resolveFor(this, options.require);
        options.resolve = angular.extend({}, options.resolve, require);
      }

      if (options.templateUrl && config.useViewsBasePath) {
        options.templateUrl = this.viewpath(options.templateUrl);
      }

      $stateProvider.state(name, options);

      // allow chain execution
      return this;
    }

    // Set here the base of the
    // relative path for all views
    function viewpath(uri) {
      return config.viewsBasePath + uri;
    }

    // Generates a resolve object by passing script names
    // previously configured in constant.APP_REQUIRES
    function resolveFor(...args) {
      // const args = arguments;
      return {
        __deps: ['$ocLazyLoad', '$q', function deps($ocLL, $q) {
          let promiseChain = $q.when(1); // empty promise

          // creates promise to chain dynamically
          function andThen(mod) {
            // support a function that returns a promise
            if (typeof mod === 'function') {
              return promiseChain.then(mod);
            }

            return promiseChain.then(() => {
              // check if module is defined
              if (!APP_REQUIRES[mod]) {
                throw new Error(`Route resolve: Bad resource name [${mod}]`);
              }
              // finally, return the load promise
              return $ocLL.load(APP_REQUIRES[mod]);
            });
          }

          // Creates a promise chain for each argument
          for (let i = 0, len = args.length; i < len; i += 1) {
            promiseChain = andThen(args[i]);
          }
          return promiseChain;
        }],
      };
    } // resolveFor

    function getStates() {
      return $state.get();
    }

    function scrollTopMainView() {
      // There must not be more than one <main> element in a document. (http://www.w3schools.com/tags/tag_main.asp)
      const main = document.querySelector('main');
      if (main) main.scrollTop = 0;
    }

    function init() {
      // Set reference to access them from any scope
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      // auto update document title
      /* $rootScope.$on('$stateChangeSuccess',
      (event, toState, toParams, fromState, fromParams) => { */
      $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        // Autoscroll to top
        scrollTopMainView();

        /* const urlAllow = [
          '/login',
          '/recover',
          '/signup',
          '/recover-password',
          '/recover-email',
        ]; */
        // if (!Parse.User.current() && urlAllow.indexOf(toState.url) < 0) {
        //   location.href = '#/user/login';
        // }

        // Update document title
        const projectName = 'Angular Boilerplate';
        const title = toState.title ? `${toState.title} | ${projectName}` : projectName;
        $rootScope.documentTitle = title; // data bind to <title>
      });
      // on state not found log to console
      $rootScope.$on('$stateNotFound',
        // (event, unfoundState, fromState, fromParams) => {
        (event, unfoundState) => {
          console.log(`State not found: ${unfoundState.to} ${unfoundState.toParams} ${unfoundState.options}`);
        });
      // on error log to console
      $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
        console.log(error);
      });
    }
  }
}

RouterProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
export default RouterProvider;
