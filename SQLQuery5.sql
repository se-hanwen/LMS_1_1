select *
 from CourseUsers t1
 inner join aspnetusers t2 on t1.LMSUserId=t2.Id
 inner join AspNetUserRoles t3 on t2.id=t3.UserId
 inner join AspNetRoles t4 on t4.id=t3.RoleId