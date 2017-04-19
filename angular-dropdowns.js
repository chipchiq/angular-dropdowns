/**
 * @license MIT http://jseppi.mit-license.org/license.html
 */
(function(window, angular, undefined) {
	'use strict';

	var dd = angular.module('ngDropdowns', []);

	dd.run(['$templateCache', function ($templateCache) {
		$templateCache.put('ngDropdowns/templates/dropdownSelect.html', [
			'<div class="wrap-dd-select">',
			'<span class="selected">{{dropdownModel[labelField]}}</span>',
			'<ul class="dropdown">',
			'<li ng-repeat="item in dropdownSelect"',
			' class="dropdown-item"',
			' dropdown-select-item="item"',
			' dropdown-item-label="labelField">',
			'</li>',
			'</ul>',
			'</div>'
		].join(''));


		$templateCache.put('ngDropdowns/templates/dropdownSelectNative.html', [
			'<div class="wrap-dd-select wrap-dd-select_native">',
			'<select ng-model="dropdownModel"',
			'ng-options="item.value as item.text for item in dropdownSelect">',
			'<option value="" disabled>{{dropdownPlaceholder}}</option>',
			'</select>',
			'</div>'
		].join(''));


		$templateCache.put('ngDropdowns/templates/dropdownSelectItem.html', [
			'<li ng-class="{divider: (dropdownSelectItem.divider && !dropdownSelectItem[dropdownItemLabel]), \'divider-label\': (dropdownSelectItem.divider && dropdownSelectItem[dropdownItemLabel])}">',
			'<a href="" class="dropdown-item"',
			' ng-if="!dropdownSelectItem.divider"',
			' ng-href="{{dropdownSelectItem.href}}"',
			' ng-click="selectItem()">',
			'{{dropdownSelectItem[dropdownItemLabel]}}',
			'</a>',
			'<span ng-if="dropdownSelectItem.divider">',
			'{{dropdownSelectItem[dropdownItemLabel]}}',
			'</span>',
			'</li>'
		].join(''));

		$templateCache.put('ngDropdowns/templates/dropdownMenu.html', [
			'<ul class="dropdown">',
			'<li ng-repeat="item in dropdownMenu"',
			' class="dropdown-item"',
			' dropdown-item-label="labelField"',
			' dropdown-menu-item="item">',
			'</li>',
			'</ul>'
		].join(''));

		$templateCache.put('ngDropdowns/templates/dropdownMenuItem.html', [
			'<li ng-class="{divider: dropdownMenuItem.divider, \'divider-label\': dropdownMenuItem.divider && dropdownMenuItem[dropdownItemLabel]}">',
			'<a href="" class="dropdown-item"',
			' ng-if="!dropdownMenuItem.divider"',
			' ng-href="{{dropdownMenuItem.href}}"',
			' ng-click="selectItem()">',
			'{{dropdownMenuItem[dropdownItemLabel]}}',
			'</a>',
			'<span ng-if="dropdownMenuItem.divider">',
			'{{dropdownMenuItem[dropdownItemLabel]}}',
			'</span>',
			'</li>'
		].join(''));

	}]);


	var checkMobile = (function() {
		var check;
		check = false;
		(function(a) {
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
				return check = true;
			}
		})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	})();

	dd.directive('dropdownSelect', ['DropdownService',
		function (DropdownService) {
			return {
				restrict: 'A',
				replace: true,
				scope: {
					dropdownSelect: '=',
					dropdownModel: '=',
					dropdownItemLabel: '@',
					dropdownOnchange: '&',
		  			dropdownPlaceholder: '=',
					notNative: '='
				},

				controller: ['$scope', '$element', function ($scope, $element) {
					var nativeEnable = checkMobile && !$scope.notNative

					var prepareSelectMap;
					$scope.labelField = $scope.dropdownItemLabel || 'text';

					$scope.selectMap = {
						undefined: {
							text: $scope.dropdownPlaceholder
						}

					};
					(prepareSelectMap = function () {
						angular.forEach($scope.dropdownSelect, function(item) {
							$scope.selectMap[item.value] = item;
							if (nativeEnable) {
								item.text = $('<div>'+item.text+'</div>').text();
							}
						});
					})();
					$scope.$watch('dropdownSelect', function(){
						prepareSelectMap();
					}, true);


					if (nativeEnable) {
						if ($scope.dropdownPlaceholder) $scope.dropdownPlaceholder = $('<div>'+$scope.dropdownPlaceholder+'</div>').text()
					} else {

						DropdownService.register($element);

						this.select = function (selected) {
							$scope.dropdownModel = selected.value;
							//if (selected !== $scope.dropdownModel) {
							//  angular.copy(selected, $scope.dropdownModel);
							//}
							$scope.dropdownOnchange({
								selected: selected
							});
						};

						$element.bind('click', function (event) {
							event.stopPropagation();
							DropdownService.toggleActive($element);
							$scope.$emit('openDropdown');
						});

						$scope.$on('$destroy', function () {
							DropdownService.unregister($element);
						});
					}
				}],
				templateUrl: function(elem,attrs) {
				 	return checkMobile && !attrs.notNative ? 'ngDropdowns/templates/dropdownSelectNative.html' : 'ngDropdowns/templates/dropdownSelect.html'
				}
			};
		}
	]);

	dd.directive('dropdownSelectItem', [
		function () {
			return {
				require: '^dropdownSelect',
				replace: true,
				scope: {
					dropdownItemLabel: '=',
					dropdownSelectItem: '='
				},

				link: function (scope, element, attrs, dropdownSelectCtrl) {
					scope.selectItem = function () {
						if (scope.dropdownSelectItem.href) {
							return;
						}
						dropdownSelectCtrl.select(scope.dropdownSelectItem);
					};
				},

				templateUrl: 'ngDropdowns/templates/dropdownSelectItem.html'
			};
		}
	]);

	dd.directive('dropdownMenu', ['$parse', '$compile', 'DropdownService', '$templateCache',
		function ($parse, $compile, DropdownService, $templateCache) {
			return {
				restrict: 'A',
				replace: false,
				scope: {
					dropdownMenu: '=',
					dropdownModel: '=',
					dropdownItemLabel: '@',
					dropdownOnchange: '&'
				},

				controller: ['$scope', '$element', function ($scope, $element) {
					$scope.labelField = $scope.dropdownItemLabel || 'text';

					var $template = angular.element($templateCache.get('ngDropdowns/templates/dropdownMenu.html'));
					// Attach this controller to the element's data
					$template.data('$dropdownMenuController', this);

					var tpl = $compile($template)($scope);
					var $wrap = angular.element('<div class="wrap-dd-menu"></div>');

					$element.replaceWith($wrap);
					$wrap.append($element);
					$wrap.append(tpl);

					DropdownService.register(tpl);

					this.select = function (selected) {
						if (selected !== $scope.dropdownModel) {
							angular.copy(selected, $scope.dropdownModel);
						}
						$scope.dropdownOnchange({
							selected: selected
						});
					};

					$element.bind('click', function (event) {
						event.stopPropagation();
						DropdownService.toggleActive(tpl);
					});

					$scope.$on('$destroy', function () {
						DropdownService.unregister(tpl);
					});
				}]
			};
		}
	]);

	dd.directive('dropdownMenuItem', [
		function () {
			return {
				require: '^dropdownMenu',
				replace: true,
				scope: {
					dropdownMenuItem: '=',
					dropdownItemLabel: '='
				},

				link: function (scope, element, attrs, dropdownMenuCtrl) {
					scope.selectItem = function () {
						if (scope.dropdownMenuItem.href) {
							return;
						}
						dropdownMenuCtrl.select(scope.dropdownMenuItem);
					};
				},

				templateUrl: 'ngDropdowns/templates/dropdownMenuItem.html'
			};
		}
	]);

	dd.factory('DropdownService', ['$document',
		function ($document) {
			var body = $document.find('body'),
				service = {},
				_dropdowns = [];

			body.bind('click', function () {
				angular.forEach(_dropdowns, function (el) {
					el.removeClass('active');
				});
			});

			service.register = function (ddEl) {
				_dropdowns.push(ddEl);
			};

			service.unregister = function (ddEl) {
				var index;
				index = _dropdowns.indexOf(ddEl);
				if (index > -1) {
					_dropdowns.splice(index, 1);
				}
			};

			service.toggleActive = function (ddEl) {
				angular.forEach(_dropdowns, function (el) {
					if (el !== ddEl) {
						el.removeClass('active');
					}
				});

				ddEl.toggleClass('active');
			};

			return service;
		}
	]);
})(window, window.angular);
