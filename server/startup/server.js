
console.log('hey');
Meteor.startup(function() {
    console.log('mobile');
    BrowserPolicy.content.allowSameOriginForAll('http://meteor.local');

});

