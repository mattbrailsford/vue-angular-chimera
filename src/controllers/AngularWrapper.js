import Vue from 'vue'
import VueComponent from '../components/VueComponent'

/**
 * @function AngularWrapper
 * @description An Angular controller that serves as a simple wrapper to a Vue
 * app for the purposes of binding the Umbraco Backoffice to non-Angular code.
 */
const AngularWrapper = function ($scope, $element) {
    
    // Helper method to clone an object stripping any "reactivity"
    let clone = function (obj) {
        if (obj === null || obj === undefined || typeof obj !== 'object')  {
            return obj
        }
        return JSON.parse(JSON.stringify(obj));
    } 

    // Special function to listen for changes from the server
    // which we then update the vue model with
    $scope.model.onValueChanged = function (newValue) {
        vueApp.value = clone(newValue)
    };
  
    // Listen for form submitting events and update the angular
    // model with the value from vue. This isn't as "reactive"
    // as watching for changes as they happen, but it's more performant
    var unsubscribe = $scope.$on("formSubmitting", function () {
        $scope.model.value = clone(vueApp.value);
    });
  
    // Cleanup event handlers when the controller gets destroyed
    $scope.$on('$destroy', function () {
        unsubscribe();
    });

    // Initialize the Vue instance
    let vueApp = new Vue({
        components: { VueComponent },
        data: {
            value: clone($scope.model.value),
            config: clone($scope.model.config)
        },
        template: '<vue-component :value.sync="value" :config="config" />'
    }).$mount($element[0].querySelector('.vue-node'))

}

// We must inject these into AngularWrapper to properly DI the controller.
AngularWrapper.$inject = ['$scope', '$element'];

export default AngularWrapper;