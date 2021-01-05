'use strict'
// === Инициализация констант ===
const STD_FORMATS = {
	'А0': {
		'width': '1189',
		'height': '841'
	},
	'А1': {
		'width': '841',
		'height': '594'
	},
	'А2': {
		'width': '594',
		'height': '420'
	},
	'А3': {
		'width': '420',
		'height': '297'
	},
	'А4': {
		'width': '297',
		'height': '210'
	},
	'А5': {
		'width': '210',
		'height': '148'
	},
	'А6': {
		'width': '148',
		'height': '105'
	}
};
const DATE_BEGIN = document.querySelector ('#dateBegin');
const DATE_END = document.querySelector ('#dateEnd');
const APP_TYPE = document.querySelector ('#appType');
const APP_TYPE_OPTION= document.querySelectorAll ('#appType option');
const FORMAT = document.querySelector ('#workFormat');
const STD_FORMAT = document.querySelector ('#stdFormat');
const STD_FORMAT_OPTION = document.querySelectorAll ('#stdFormat option');
const HEIGHT = document.querySelector ('#notStdHeight');
const WIDTH = document.querySelector ('#notStdWidth');
const COUNT_WORK = document.querySelector ('#countWork');
const SQUARE_WORK = document.querySelector ('#squareWork');
const FORM = document.querySelector ('#frmJournal');
const SUBMIT_FORM = document.querySelector ('#saveRecord');

// === Заполнение полей с датами текущей датой ===
const CUR_DATE = () => {
	let d = new Date ();
	let day = String (d.getDate ());
	let month = String (d.getMonth () + 1);
	let year = String (d.getFullYear ());
	(day < 10)?day = '0' + day: day;
	(month < 10)?month = '0' + month: month;
	DATE_BEGIN.value = year + '-' + month + '-' + day;
	DATE_END.value = year + '-' + month + '-' + day;
};
CUR_DATE ();

// === Установка всплывающих подсказок при загрузке страницы ===
const APP_TYPE_TITLE_SETUP = () => {
	APP_TYPE.title = APP_TYPE_OPTION[0].value;
};
APP_TYPE_TITLE_SETUP ();

// === Установка всплывающих подсказок при изменении типа заявителя ===
APP_TYPE.addEventListener ('change', (event) => {
	event.target.title = event.target.value;
});

// === Заполнение полей ВЫСОТА и ШИРИНА после загрузки ===
const LOADED_FORMAT = () => {
	for  (let key in STD_FORMATS) {
		if (key === STD_FORMAT.value) {
			// === Установка значений ===
			HEIGHT.value = STD_FORMATS[key].height;
			WIDTH.value = STD_FORMATS[key].width;
			//=== Установка стилей ===
			HEIGHT.style.backgroundColor = '#FFC800';
			WIDTH.style.backgroundColor = '#FFC800';
			return
		}
	};
};
LOADED_FORMAT ();

// === Вычисление площади ===
const CALC_SQUARE_WORK = () => {
	if (FORMAT.value === 'Электронный вид') {
		// === Установка значений ===
		SQUARE_WORK.value ='0';
	} else {
		let width_m = (parseInt (WIDTH.value) / 1000);
		let height_m = (parseInt (HEIGHT.value) / 1000);
		let area_sq_m = (width_m * height_m);
		let area_sq_m_count = (area_sq_m * COUNT_WORK.value);
		// === Установка значений ===
		SQUARE_WORK.value = area_sq_m_count.toFixed(2);
	};
};
CALC_SQUARE_WORK ();

// === Установки для стандартного формата ===
const  STD_FORMAT_SETUP = () => {
	let key = STD_FORMAT_OPTION[0].value;
	// === Установка атрибутов ===
	STD_FORMAT.removeAttribute ('disabled');
	HEIGHT.setAttribute ('readonly', 'readonly');
	WIDTH.setAttribute ('readonly', 'readonly');
	// === Установка значений ===
	STD_FORMAT.value = key;
	HEIGHT.value = STD_FORMATS[key].height;
	WIDTH.value = STD_FORMATS[key].width;
	COUNT_WORK.value = '1';
	//=== Установка стилей ===
	STD_FORMAT.style.backgroundColor = '';
	HEIGHT.style.backgroundColor = '#FFC800';
	WIDTH.style.backgroundColor = '#FFC800';
	// === Вычисление площади ===
	CALC_SQUARE_WORK ();
};

// === Установки для нестандартного формата ===
const NOT_STD_FORMAT_SETUP = () => {
	// === Установка атрибутов ===
	STD_FORMAT.setAttribute ('disabled', 'disabled');
	HEIGHT.removeAttribute ('readonly');
	WIDTH.removeAttribute ('readonly');
	// === Установка значений ===
	STD_FORMAT.value = '';
	HEIGHT.value = '0';
	WIDTH.value = '0';
	COUNT_WORK.value = '1';
	SQUARE_WORK.value ='0';
	//=== Установка стилей ===
	STD_FORMAT.style.backgroundColor = '#FFC800';
	HEIGHT.style.backgroundColor = '';
	WIDTH.style.backgroundColor = '';
};

// === Установки для электронного вида ===
const ELECTRON_VIEW_SETUP = () => {
	// === Установка атрибутов ===
	STD_FORMAT.setAttribute ('disabled', 'disabled');
	HEIGHT.setAttribute ('readonly', 'readonly');
	WIDTH.setAttribute ('readonly', 'readonly');
	// === Установка значений ===
	STD_FORMAT.value = '';
	HEIGHT.value = '';
	WIDTH.value = '';
	COUNT_WORK.value = '1';
	SQUARE_WORK.value ='0';
	//=== Установка стилей ===
	STD_FORMAT.style.backgroundColor = '#FFC800';
	HEIGHT.style.backgroundColor = '#FFC800';
	WIDTH.style.backgroundColor = '#FFC800';
};

// === Проверка - какой выбран формат (Стандартный, нестандартный, электронный вид) ===
FORMAT.addEventListener ('change', (event) => {
	if (FORMAT.value === 'Стандартный') {
		STD_FORMAT_SETUP ();
	};

	if (FORMAT.value === 'Нестандартный') {
		NOT_STD_FORMAT_SETUP ();
	};

	if (FORMAT.value === 'Электронный вид') {
		ELECTRON_VIEW_SETUP ();
	};
});

// === Заполнение полей ВЫСОТА и ШИРИНА при выборе одного из стандартных форматов
STD_FORMAT.addEventListener ('change', (event) => {
	for  (let key in STD_FORMATS) {
		if (key === event.target.value) {
			// === Установка 	значений ===
			HEIGHT.value = STD_FORMATS[key].height;
			WIDTH.value = STD_FORMATS[key].width;
			COUNT_WORK.value = '1';
			CALC_SQUARE_WORK ();
			return
		}
	};
});

// === Вычисление общей площади в кв. метрах при изменениие количества ===
COUNT_WORK.addEventListener ('change', () => {
	CALC_SQUARE_WORK ();
});

// === Вычисление общей площади в кв. метрах при изменениие высоты ===
HEIGHT.addEventListener ('change', () => {
	CALC_SQUARE_WORK ();
});

// === Вычисление общей площади в кв. метрах при изменениие ширины ===
WIDTH.addEventListener ('change', () => {
	CALC_SQUARE_WORK ();
});

// === Отправка формы на сервер ===
SUBMIT_FORM.addEventListener ('click', () => {
	FORM.action = 'handler.php';
	FORM.method = 'POST';
	FORM.target= '_blank';
	FORM.submit ();
	FORM.reset ();
	APP_TYPE_TITLE_SETUP ();
	STD_FORMAT_SETUP ();
	CUR_DATE ();
	LOADED_FORMAT ();
	CALC_SQUARE_WORK ();
});