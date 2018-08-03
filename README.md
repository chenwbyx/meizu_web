基于Python/Flask的仿魅族官网网站
=====
>Design by chenwenbo
* Python 3.6.5
* Flask 1.0.2
* MySQL 5.7.14
* 其他包：
	* pymysql
	* flask-sqlalchemy
	* flask_script
	* flask_migrate
安装方法
------
* 进入项目目录后（数据库服务已打开并创建数据库）：
	* 首先初始化项目环境（项目目录） 
	···python
	python manage.py db init
	···
	* 然后迁移数据
	···python
	python manage.py db migrate
	···
	* 最后映射到数据库中
	···python
	python manage.py db upgrade
	···

