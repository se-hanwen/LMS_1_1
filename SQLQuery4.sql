select * from courses t1
--assets\img\0_JLPdbimCEnWB8qJL.png
alter table courses
drop column courseImgPath


alter table courses
add  CourseImgPath nvarchar(max) null

courseImgPath
assets\img\0_JLPdbimCEnWB8qJL.png