var app = angular.module('app',['ngAnimate', 'ngSanitize']);

	app.controller('MainCtrl', function($scope, $interval){
		$scope.slides = [
			{image: 'images/2_2.jpg'},
			{image: 'images/1_1.jpg'},
			{image: 'images/3_3.jpg'}
		];
		$scope.winHeight = window.innerHeight;
		$scope.currentIndex = 0;
		$scope.nextSlide = function () {
			$scope.currentIndex++;
			if ($scope.currentIndex === ($scope.slides.length)) {
				$scope.currentIndex = 0;
			};
		};
		$scope.isCurrentSlideIndex = function (index) {
			return $scope.currentIndex === index;
		};
		$interval(function(){ $scope.nextSlide(); },5000);
//contact info
		$scope.showContacts = function() {
			console.log('bbb'); //don't forget to remove
			$scope.mainText = 'hiden';
			$scope.hideC = 'showing-contacts';
		};

		$scope.hideContacts = function() {
			console.log('aaaa'); //don't forget to remove
			$scope.mainText = 'shown';
			$scope.hideC = 'hiding-contacts';
		};
//services carousel
		$scope.moveRight = function(event) {
			event.preventDefault();
			if ($scope.moveMain === 'move-right' && $scope.moveContent === 'move-content-right') {
				$scope.moveMain = 'move-left';
				$scope.moveContent = 'move-content-left';
			}else{
				$scope.moveMain = 'move-right';
				$scope.moveContent = 'move-content-right';
			}
		};	
		$scope.services = [
			{
				class:'fa-heartbeat',
				text: 'Составление плана тренировок',
				features: [
					{
						description:'Определение цели (потеря веса, набор массы)'
					},
					{
						description:'Составление индивидуального плана тренировок'
					},
					{
						description:'Контроль за правильным выполнением упражнений'
					}
				]
			},
			{
				class:'fa-cutlery',
				text: 'Составление плана питания',
				features: [
					{
						description:'Детальное расписание режима питания в зависимости от поставленной цели'
					},
					{
						description:'Учет необходимого количества белков, жиров и углеводов'
					},
					{
						description:'Не переживайте, голодать точно не придется!'
					}
				]
			},
			{
				class:'fa-skype',
				text: 'Ежедневная связь по скайпу',
				features: [
					{
						description:'Ежедневное общение и поддержка по скайпу в любое удобное для Вас время'
					},
					{
						description:'В целях экономии времени мы онлайн проконсультируем по любым вопросам'
					},
					{
						description:'Мы будем следить за тем, чтобы у вас все получилось!'
					}
				]
			},
			{
				class:'fa-map-marker',
				text: 'Возможность тренировок офлайн',
				features: [
					{
						description:'Самые эффективные тренироки - в тренажерном зале'
					},
					{
						description:'Индивидуальные тренировки в любое удобное время - 200 грн/час'
					},
				],
				link: 'Мы работаем в тренажерном зале <a href="www.crystal-fitness.com.ua" rel="nofollow">"Crystal fitness"</a>'
			},
			{
				class:'fa-hourglass-half',
				text: 'Определение целей и сроков',
				features: [
					{
						description:'Без цели все тренировки и питание могут быть бесполезны'
					},
					{
						description:'Процессы похудения или набора массы имеют свои сроки'
					},
					{
						description:'Мы составим календарь достижения Вашей цели с конкретными датами и сроками'
					}
				]
			},
			{
				class:'fa-download',
				text: 'Попробуйте бесплатно прямо сейчас',
				features: [
					{
						description:'Вы можете скачать примерные планы тренорок и диеты, подобные которым мы обычно предлагаем своим клиентам'
					}
				],
				link: '<a href="1.pdf" class="download">Cкачать программу питания</a> <a class="download" href="1.pdf">Cкачать программу тренировки</a>'
			}
		];
		$scope.next = function() {
			$scope.moveServices = 'move-services-left';
			$scope.tog = 1;
		};
		$scope.previous = function() {
			$scope.moveServices = 'move-services-right';
			$scope.tog = 2;
		};
//show contact form -remooooooooooooooooove comment
		$scope.showForm =function(){
			$scope.toShow = true;
			$scope.toHide = true;
			if (true) {}
			$scope.form = 'move-form-right';
		};
		$scope.hideForm = function(){
			$scope.form = '';
			$scope.toShow = false;
			$scope.toHide = false;
		};

	});

	app.directive('contact', function() {
		return {
			restrict: 'E',
			templateUrl: './templates/contact-data.html'
		}
	});
//contact form
	app.directive('contactForm', function() {
		return{
			restrict: 'E',
			templateUrl:'./templates/contact-form.html'
		}
	});
	app.controller('SubmissionCtrl',function ($scope, $http) {
		$scope.user = {};
		$scope.submit = function () {
			if ($scope.submissionForm.$valid) {
				$scope.clickedInvalid = false;
				$http.post('../mail.php', $scope.user).success(function(res) {
					console.log('2'); //don't forget to remove
					if (res.res === 'ok') {
						$scope.user = {};
						$scope.submissionForm.$setPristine();
						console.log('Мы получили Ваше сообщение. Спасибо!');//don't forget to remove
					}else{
						console.log('Возникла ошибка. Попробуйте еще раз, пожалуйста!'); //don't forget to remove
					}
				}).error(function(err) {
						alert(err);
					})
			}else{
				$scope.clickedInvalid = true;
			}
		}
	});