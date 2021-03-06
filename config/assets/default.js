'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/metisMenu/dist/metisMenu.min.css',
        'public/lib/fontawesome/css/font-awesome.min.css',
        'public/lib/c3/c3.css'
      ],
      js: [
        'public/lib/jquery/dist/jquery.min.js',
        'public/lib/angular/angular.js',
        'public/lib/metisMenu/dist/metisMenu.min.js',
        'public/lib/pace/pace.min.js',
        'public/scripts.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/dist/angular-file-upload.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/bootstrap/dist/js/bootstrap.min.js',
        'public/lib/moment/moment.js',
        'public/lib/moment/locale/th.js',
        'public/lib/angular-moment/angular-moment.js',
        'public/lib/jspdf/dist/jspdf.min.js',
        'public/lib/html2canvas/build/html2canvas.js',
        'public/lib/c3/c3.js',
        'public/lib/d3/d3.js',
        'public/lib/angular-chart/angular-chart.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js',
        'https://cdn.zingchart.com/zingchart.min.js',
        'https://cdn.zingchart.com/angular/zingchart-angularjs.js',
        'public/lib/devextreme/js/dx.all.js',
        'public/lib/c3-angular/c3-angular.min.js',
        'public/lib/ngInfiniteScroll/build/ng-infinite-scroll.min.js'

      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/policies/*.js',
    views: 'modules/*/server/views/*.html'
  }
};
