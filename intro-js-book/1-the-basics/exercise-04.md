Code logs '510' instead of 15 because JavaScript will 
implicitly coerces a non-string value to a string when 
one operand is a string. '5' is a string so 10 is coerced 
into a string, and string concatenation yields '510'.