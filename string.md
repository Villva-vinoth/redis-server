<html>
<body>

    <ul> 
        <li>
        STRING ---
        <dl>
            <dt>set [key] [value] (NX) (EX 60)</dt>
            <dd> set the key for a value , (nx is optional, its checking that the key is already exits are not) (ex is optional and it is usefull when you used a cache , 60 means 1 minute) </dd>
            <dt>mset [key] [value] [key] [value] and so on...</dt>
            <dd> mset sets the multiple key value pair at once</dd>

            <dt>get [key]</dt>
            <dd> get the key for a value </dd>
            <dt>mget [key] [key] and so on...</dt>
            <dd> mget return the multiple value at once. </dd>

            <dt>getset [key] [value] </dt>
            <dd>get the value and set the value, its like update the value for existing key ( NOTE : Only used for existing key)</dd>

            <dt>getrange [key] [start as integer] [end as integer] </dt>
            <dd>its works like substring ! for a specify key!</dd>

            <dt>incr [key]</dt>
            <dd>its used for increment by key's value by 1</dd>

            <dt>incrby [key] [integer]</dt>
            <dd>its used for increment by desired value</dd>

            <dt>decr [key]</dt>
            <dd>its used for decrement the key's value by 1</dd>

            <dt>decrby [key] [integer]</dt>
            <dd>its used for decrement by desired value </dd>


            <dt>del [key] ( [key] and so on....)</dt>
            <dd>Its used for deletion purpose, can del with single key and provide multi key it deletes.</dd>
        </dl>
        </li>
    </ul>
</body>
</html>