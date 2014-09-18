'use strict';

angular.module('agae')
        .controller('BgameCntr', function($q, $scope, $timeout) {
            $scope.mcheck = function(element) {
                $scope.mahjong[element.x][element.y].visible = true;
                $scope.couple.push(element);

                if ($scope.couple.length > 1) {
                    $scope.selectable = false;
                    if ($scope.couple[0].card !== $scope.couple[1].card) {
                        setTimeout(function() {
                            $scope.$apply(function() {
                                $scope.mahjong[$scope.couple[0].x][$scope.couple[0].y].visible = false;
                                $scope.mahjong[$scope.couple[1].x][$scope.couple[1].y].visible = false;
                            });
                        }, 1000);

                    } else {
                        setTimeout(function() {
                            $scope.$apply(function() {
                                $scope.total -= 2;
                                jQuery("#c-" + $scope.couple[0].x + "y" + $scope.couple[0].y).addClass("btn-transparent");
                                jQuery("#c-" + $scope.couple[1].x + "y" + $scope.couple[1].y).addClass("btn-transparent");
                            });
                        }, 1000);
                    }
                    setTimeout(function() {
                        $scope.$apply(function() {
                            $scope.couple.length = 0;
                            $scope.selectable = true;
                        });
                    }, 1000);
                }
            };

            $scope.refresh = function() {
                $scope.couple.length = 0;
                $scope.selectable = true;
                $scope.total = $scope.size * $scope.size;

                $scope.mahjong = mahjong($scope.size);
            };

            $scope.sizeSet = function(upDown) {
                if ((upDown === true) && ($scope.size < 8)) {
                    $scope.size += 2;
                } else if ((upDown === false) && ($scope.size > 2)) {
                    $scope.size -= 2;
                }
                $scope.refresh();
            };

            $scope.size = 4;
            $scope.couple = [];
            $scope.refresh();
        });
