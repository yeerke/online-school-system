# online school system

Скачиваем репозитори с помощью команды **git clone git@github.com:YerkebulanZhumalin/online-school-system.git**
Запускаем локальный сервер Postgres (предполагаю База Данных Postgres заранее установлен) с помощью команды:
1) Windows: **pg_ctl -D "C:\Program Files\PostgreSQL\9.6\data" start**
2) MacOS: **pg_ctl -D /usr/local/var/postgres start**
3) Linux: **sudo service postgresql start**

Заходим в файл **back/src/main/resources/application.properties** меням **spring.datasource.password=password** на свой личный пароль от postgres юзера.

Заходим в папку **back/**, запускаем команду **mvn spring-boot:run** (предполагаю сборщик maven заранее установлен)
  
Заходим в папку **front/**, запускаем команду **ng serve --open** (предполагаю node и angular заранее установлены), после чего, в Браузере автоматический откроется проект.

Чтобы удалять студентов из списка, нужно выбирать этих студентов, наводя и нажимая в область конкретного студента, тогда и появится кнопка удаления
