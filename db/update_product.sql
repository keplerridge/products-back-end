UPDATE product
SET description = ${description}
WHERE id = ${id};

SELECT * FROM product;