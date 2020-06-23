# Online School System

Скачиваем репозитори с помощью команды **git clone git@github.com:YerkebulanZhumalin/online-school-system.git**
Запускаем локальный сервер Postgres (предполагаю База Данных Postgres заранее установлен) с помощью команды:
1) Windows: **pg_ctl -D "C:\Program Files\PostgreSQL\9.6\data" start**
2) MacOS: **pg_ctl -D /usr/local/var/postgres start**
3) Linux: **sudo service postgresql start**

Заходим в файл **back/src/main/resources/application.properties**:
меняем **spring.datasource.url=jdbc:postgresql://localhost:5432/YOUR_DATABASE** на существующую базу данных
меняем **spring.datasource.username=YOUR_USERNAME** ставим юмя существующего юзера, который имеет доступ к базе данных указанной выше
меняем **spring.datasource.password=YOUR_PASSWORD** на свой личный пароль от юзера.

Заходим в папку **back/**, запускаем команду **mvn spring-boot:run** (предполагаю сборщик maven заранее установлен)
  
Заходим в папку **front/**, запускаем команду **ng serve --open** (предполагаю node и angular заранее установлены), после чего, в Браузере автоматический откроется проект.

Чтобы удалять студентов из списка, нужно выбирать этих студентов, наводя и нажимая в область конкретного студента, тогда и появится кнопка удаления
