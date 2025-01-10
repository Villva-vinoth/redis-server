<html>
<body>
    <section>
       <h2>Hashes Commands</h2>
       <ul>
            <li>
                <strong>HSET [key] [field of key - value ]</strong>
                <dl>
                    <dt>Description :<dt>
                    <dd>hset stores in the key of object in a key -value pair
                    <br> ex : hset product:1 name dal price 5 quantity 5 
                    </dd>
                </dl>
            </li>
            <li>
                <strong>HGET [key] [field key]</strong>
                <dl>
                    <dt>Description :<dt>
                    <dd>hget get the single value of the field with key</dd>
                </dl>
            </li>
            <li>
                <strong>HMGET [key] [field key] [field key]</strong>
                <dl>
                    <dt>Description :</dt>
                    <dd>hmget get the multiple value at once...</dd>
                </dl>
            </li>
             <li>
                <strong>HGETALL [key] </strong>
                <dl>
                    <dt>Description :</dt>
                    <dd>hgetall get all the value</dd>
                </dl>
            </li>
            <li>
                <strong>HINCRBY [key] [field key] [field value as integer]</strong>
                <dl>
                    <dt>Description :</dt>
                    <dd>hincrby increment the field value and there is no decr so, if you want to decrement like the same way use negative integer to avail it.</dd>
                </dl>
            </li>
            <li>
                <strong>HEXISTS [key] [field key] [field value]</strong>
                <dl>
                    <dt>Description :</dt>
                    <dd>hexists check if the key of the field key has a value</dd>
                </dl>
            </li>
             <li>
                <strong>HEXPIRE [key] 60 FIELDS [total fields as numbers] [field key] [field key]</strong>
                <dl>
                    <dt>Description :</dt>
                    <dd>hexpire will expire the field in the given time !</dd>
                </dl>
            </li>
            <li>
                <strong>HPERSIST [key] FIELDS [total fields as numbers] [field key] [field key]</strong>
                <dl>
                    <dt>Description :</dt>
                    <dd>Revoke the expiration back</dd>
                </dl>
            </li>
             <li>
                <strong>HKEYS [key]</strong>
                <dl>
                    <dt>Description :</dt>
                    <dd>hkeys get the all field key's</dd>
                </dl>
            </li>
             <li>
                <strong>HVALS [key]</strong>
                <dl>
                    <dt>Description :</dt>
                    <dd>hvals get the all field values</dd>
                </dl>
            </li>
            <li>
                <strong>HLEN [key]</strong>
                <dl>
                    <dt>Description :</dt>
                    <dd>hlen get the length of the key's</dd>
                </dl>
            </li>
       </ul>
    </section>
</body>
</html>