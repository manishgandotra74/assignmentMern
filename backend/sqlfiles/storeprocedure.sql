
-- get all users OR user by id 

CREATE PROCEDURE getUSers(_id integer)
IF (_id =0) THEN
BEGIN
	select * from users;
END;
ELSE
BEGIN
	select * from users where id =_id;
END;
END IF


-- // insert update data

CREATE PROCEDURE InsertUpdateUsers(
_id integer,
_name character varying(50),
_address character varying(100),
_city character varying(50),
_phone character varying(15)
)
IF (_id =0) THEN
BEGIN
	insert into users(name , address ,city,phone) values ( _name , _address , _city , _phone );
END;
ELSE
BEGIN
	update users set 
    name = _name , 
    address =_address,
    city =_city,
    phone =_phone 
    where id = _id;
END;
END IF

-- delete data

CREATE PROCEDURE delete_user(_id integer)
BEGIN
	delete from users where id =_id;
END