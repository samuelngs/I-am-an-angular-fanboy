
import angular from '../';

export default function() {
  return (
    <angular.div>
      Welcome to next.js!
      <angular.button ng-click="count = count + 1" ng-init="count = 0">Increment count {`{{count}}`}</angular.button>
    </angular.div>
  );
}
