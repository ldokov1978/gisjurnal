<!DOCTYPE html>
	<html lang="ru">
		<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		<?php
			echo "<b>Дата начала работ: </b><i>" . $_POST[dateBegin] . "</i><br>";
			echo "<b>Дата окончания работ: </b><i>" . $_POST[dateEnd] . "</i><br>";
			echo "<b>Наличие заявки: </b><i>" . $_POST[requestCheck] . "</i><br>";
			echo "<b>Тип заявителя: </b><i>" . $_POST[appType] . "</i><br>";
			echo "<b>Наименование заявителя: </b><i>" . $_POST[appName] . "</i><br>";
			echo "<b>Сканирование: </b><i>" . $_POST[scanCheck] . "</i><br>";
			echo "<b>Печать: </b><i>" . $_POST[printCheck] . "</i><br>";
			echo "<b>Ламинирование: </b><i>" . $_POST[lamCheck] . "</i><br>";
			echo "<b>Выполненные работы: </b><i>" . $_POST[execWork] . "</i><br>";
			echo "<b>Формат: </b><i>" . $_POST[workFormat] . "</i><br>";
			echo "<b>Стандартный формат: </b><i>" . $_POST[stdFormat] . "</i><br>";
			echo "<b>Высота (мм): </b><i>" . $_POST[notStdHeight] . "</i><br>";
			echo "<b>Ширина (мм): </b><i>" . $_POST[notStdWidth] . "</i><br>";
			echo "<b>Количество: </b><i>" . $_POST[countWork] . "</i><br>";
			echo "<b>Общая площадь (м2): </b><i>" . $_POST[squareWork] . "</i><br>";
			echo "<b>Исполнитель 1: </b><i>" . $_POST[execWork_1] . "</i><br>";
			echo "<b>Исполнитель 2: </b><i>" . $_POST[execWork_2] . "</i><br>";
			echo "<b>Исполнитель 3: </b><i>" . $_POST[execWork_3] . "</i><br>";
			echo "<b>Исполнитель 4: </b><i>" . $_POST[execWork_4] . "</i><br>";
		?>
	</body>
</html>