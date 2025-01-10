<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redis Commands Overview</title>
</head>
<body>
    <header>
        <h1>Redis Commands Overview</h1>
        <p>Redis is fast, open-source, and an in-memory key-value database server. Below are common Redis commands, especially focused on working with <strong>strings</strong>.</p>
    </header>
    <section>
        <h2>String Commands</h2>
        <ul>
            <li>
                <strong>SET [key] [value] (NX) (EX 60)</strong>
                <dl>
                    <dt>Description:</dt>
                    <dd>Sets a key for a value.</dd>
                    <dt>Optional Flags:</dt>
                    <dd><strong>NX</strong> - Ensures the key does not exist. If it exists, the command does nothing.</dd>
                    <dd><strong>EX 60</strong> - Sets an expiration time for the key (60 seconds = 1 minute).</dd>
                </dl>
            </li>
            <li>
                <strong>MSET [key] [value] [key] [value] ...</strong>
                <dl>
                    <dt>Description:</dt>
                    <dd>Sets multiple key-value pairs at once.</dd>
                </dl>
            </li>
            <li>
                <strong>GET [key]</strong>
                <dl>
                    <dt>Description:</dt>
                    <dd>Retrieves the value for a given key.</dd>
                </dl>
            </li>
            <li>
                <strong>MGET [key] [key] ...</strong>
                <dl>
                    <dt>Description:</dt>
                    <dd>Retrieves the values for multiple keys at once.</dd>
                </dl>
            </li>
            <li>
                <strong>GETSET [key] [value]</strong>
                <dl>
                    <dt>Description:</dt>
                    <dd>Retrieves the value for a key and sets the new value. It updates the value for an existing key.</dd>
                    <dt>Note:</dt>
                    <dd>This command only works for existing keys.</dd>
                </dl>
            </li>
            <li>
                <strong>GETRANGE [key] [start] [end]</strong>
                <dl>
                    <dt>Description:</dt>
                    <dd>Retrieves a substring of the value for the specified key. The <strong>start</strong> and <strong>end</strong> are integers defining the range.</dd>
                </dl>
            </li>
            <li>
                <strong>INCR [key]</strong>
                <dl>
                    <dt>Description:</dt>
                    <dd>Increments the value of the key by 1.</dd>
                </dl>
            </li>
            <li>
                <strong>INCRBY [key] [integer]</strong>
                <dl>
                    <dt>Description:</dt>
                    <dd>Increments the value of the key by a specified integer.</dd>
                </dl>
            </li>
            <li>
                <strong>DECR [key]</strong>
                <dl>
                    <dt>Description:</dt>
                    <dd>Decrements the value of the key by 1.</dd>
                </dl>
            </li>
            <li>
                <strong>DECRBY [key] [integer]</strong>
                <dl>
                    <dt>Description:</dt>
                    <dd>Decrements the value of the key by a specified integer.</dd>
                </dl>
            </li>
            <li>
                <strong>DEL [key] [key] ...</strong>
                <dl>
                    <dt>Description:</dt>
                    <dd>Deletes one or more keys.</dd>
                </dl>
            </li>
        </ul>
    </section>
</body>
</html>
